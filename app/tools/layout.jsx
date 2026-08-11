import MarketingNavbar from "@/components/marketing/MarketingNavbar";
import MarketingFooter from "@/components/marketing/MarketingFooter";

export default function ToolsLayout({ children }) {
  return (
    <>
      <div className="print:hidden">
        <MarketingNavbar />
      </div>
      {children}
      <div className="print:hidden">
        <MarketingFooter />
      </div>
    </>
  );
}
