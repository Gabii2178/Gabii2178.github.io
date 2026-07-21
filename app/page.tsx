import { PortfolioSections } from "@/app/components/sections/portfolio-sections";
import { SiteNavbar } from "@/app/components/layout/site-navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1">
        <PortfolioSections />
      </main>
    </div>
  );
}
