// TRIMMED for landing page migration — this only covers what
// LandingPage/MarketingNavbar/MarketingFooter need. When you migrate
// /pricing, /kitchen-styles, etc., copy the full commercialPages.js
// over from the old client (it's plain data, no JSX changes needed),
// along with its *Meta.json imports.
import coreMoneyPagesData from "./coreMoneyPages.json";

export const proPurchaseUrl = "https://karlgusta.gumroad.com/l/dizhyb?wanted=true";
export const businessPurchaseUrl = "https://karlgusta.gumroad.com/l/gkqom?wanted=true";
export const purchaseUrl = proPurchaseUrl;

export const coreMoneyPages = coreMoneyPagesData;
