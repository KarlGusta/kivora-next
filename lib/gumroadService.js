const GUMROAD_API_BASE_URL = "https://api.gumroad.com/v2";
const GUMROAD_MAX_PAGES = 10;

const normalizeGumroadSale = (sale) => ({
  id: sale.id || "",
  email: (sale.email || sale.purchaser_email || "").toLowerCase().trim(),
  fullName: sale.full_name || sale.purchaser_name || "",
  productId: sale.product_id || "",
  productName: sale.product_name || sale.product_title || "Unknown product",
  price: Number.isFinite(Number(sale.price)) ? Number(sale.price) : 0,
  currencySymbol: sale.currency_symbol || "$",
  createdAt: sale.created_at || null,
  refunded: Boolean(sale.refunded),
  disputed: Boolean(sale.disputed || sale.chargebacked || sale.charged_back),
  cancelled: Boolean(
    sale.subscription_cancelled_at ||
      sale.subscription_ended_at ||
      sale.subscription_failed_at
  ),
});

export const getSaleDateValue = (sale) => {
  const timestamp = new Date(sale.createdAt).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

const fetchGumroadSalesPage = async (accessToken, page) => {
  const url = new URL(`${GUMROAD_API_BASE_URL}/sales`);
  url.searchParams.set("access_token", accessToken);
  url.searchParams.set("page", String(page));

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    throw new Error(data.message || data.error || "Failed to load Gumroad sales.");
  }

  return data;
};

export const buildGumroadUserRecords = (sales) => {
  const usersByEmail = new Map();

  sales.forEach((sale) => {
    if (!sale.email) return;

    const saleIsActive = !sale.refunded && !sale.disputed && !sale.cancelled;
    const existing = usersByEmail.get(sale.email) || {
      email: sale.email,
      fullName: "",
      purchaseCount: 0,
      totalSpent: 0,
      currencySymbol: sale.currencySymbol,
      productNames: new Set(),
      firstPurchaseAt: null,
      latestPurchaseAt: null,
      refundedCount: 0,
      disputedCount: 0,
      cancelledCount: 0,
      activePurchaseCount: 0,
    };

    existing.fullName = existing.fullName || sale.fullName;
    existing.purchaseCount += 1;
    existing.totalSpent += sale.price;
    existing.currencySymbol = existing.currencySymbol || sale.currencySymbol;
    existing.productNames.add(sale.productName);

    if (
      !existing.firstPurchaseAt ||
      getSaleDateValue(sale) < getSaleDateValue({ createdAt: existing.firstPurchaseAt })
    ) {
      existing.firstPurchaseAt = sale.createdAt;
    }

    if (
      !existing.latestPurchaseAt ||
      getSaleDateValue(sale) > getSaleDateValue({ createdAt: existing.latestPurchaseAt })
    ) {
      existing.latestPurchaseAt = sale.createdAt;
    }

    if (sale.refunded) existing.refundedCount += 1;
    if (sale.disputed) existing.disputedCount += 1;
    if (sale.cancelled) existing.cancelledCount += 1;
    if (saleIsActive) existing.activePurchaseCount += 1;

    usersByEmail.set(sale.email, existing);
  });

  return Array.from(usersByEmail.values())
    .map((entry) => {
      let status = "Customer";
      if (entry.activePurchaseCount > 0) status = "Active";
      else if (entry.refundedCount >= entry.purchaseCount) status = "Refunded";
      else if (entry.disputedCount > 0) status = "Disputed";
      else if (entry.cancelledCount > 0) status = "Cancelled";

      return {
        ...entry,
        active: entry.activePurchaseCount > 0,
        productNames: Array.from(entry.productNames),
        status,
      };
    })
    .sort(
      (a, b) =>
        getSaleDateValue({ createdAt: b.latestPurchaseAt }) -
        getSaleDateValue({ createdAt: a.latestPurchaseAt })
    );
};

export const fetchGumroadUserRecords = async () => {
  const accessToken = process.env.GUMROAD_ACCESS_TOKEN;
  if (!accessToken) return [];

  const sales = [];
  let page = 1;
  let hasNextPage = true;

  while (hasNextPage && page <= GUMROAD_MAX_PAGES) {
    const result = await fetchGumroadSalesPage(accessToken, page);
    const pageSales = Array.isArray(result.sales) ? result.sales : [];
    sales.push(...pageSales.map(normalizeGumroadSale));
    hasNextPage = Boolean(result.next_page_url) && pageSales.length > 0;
    page += 1;
  }

  return buildGumroadUserRecords(sales);
};

export const getGumroadUsersByEmail = async () => {
  const gumroadUsers = await fetchGumroadUserRecords();
  return new Map(gumroadUsers.map((entry) => [entry.email, entry]));
};
