import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/logo_1755607335061.png";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Abacus Experience", path: "https://abacusexchange.org", external: true },
  { name: "Market Open", path: "https://marketopen.ai", external: true },
  { name: "Campus Virtual", path: "https://campus.abacusexchange.org", external: true },
  { name: "Pricing", path: "/pricing" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePricingClick = (e: React.MouseEvent) => {
    if (location === '/') {
      e.preventDefault();
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        <div className="flex h-10 xs:h-12 sm:h-14 items-center justify-between gap-1 xs:gap-2 sm:gap-3">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="TRADERS Hub"
              className="logo-responsive mt-0.5 sm:mt-1"
              style={{ 
                width: 'auto',
                display: 'block'
              }}
              data-testid="logo-traders-hub"
            />
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden lg:flex">
            <div className="flex items-center gap-0.5 sm:gap-1 rounded-[16px] backdrop-blur-2xl bg-white/5 border border-white/5 px-1.5 sm:px-2 py-1">
              {navigationItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={item.name === 'Pricing' ? handlePricingClick : undefined}
                  className={`px-1.5 sm:px-2 md:px-3 py-1.5 rounded-[10px] text-xs whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 text-white hover:font-semibold ${
                    isActive(item.path) ? "font-medium" : "font-light"
                  }`}
                  data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Separator */}
              <div className="w-px h-6 bg-white/10 mx-1 sm:mx-2"></div>
              
              {/* Login and Get Started buttons */}
              <button 
                className="px-2 sm:px-3 md:px-4 py-1.5 rounded-[10px] bg-[#393939] text-zinc-200 hover:bg-[#4a4a4a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 text-xs font-semibold whitespace-nowrap"
                data-testid="button-login"
              >
                Login
              </button>
              <button 
                className="px-2 sm:px-3 md:px-4 py-1.5 rounded-[10px] bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-sm hover:opacity-95 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60 text-xs font-semibold whitespace-nowrap"
                onClick={handleGetStartedClick}
                data-testid="button-get-started"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-[10px] p-1.5 sm:p-2 hover:bg-tab-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              data-testid="button-mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border-subtle bg-mobile-panel" data-testid="mobile-menu-panel">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`block px-3 py-2 rounded-[10px] text-xs transition-all duration-200 hover:font-semibold ${
                  isActive(item.path)
                    ? "text-white font-medium"
                    : "text-zinc-300 font-light hover:bg-tab-hover"
                }`}
                data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => {
                  if (item.name === 'Pricing') {
                    handlePricingClick(e);
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 space-y-2">
              <button 
                className="w-full px-4 py-2 rounded-[10px] bg-[#393939] text-zinc-200 hover:bg-[#4a4a4a] transition-colors duration-200 text-xs font-semibold"
                data-testid="mobile-button-login"
              >
                Login
              </button>
              <button 
                className="w-full px-4 py-2 rounded-[10px] bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-sm hover:opacity-95 transition-opacity duration-200 text-xs font-semibold"
                onClick={(e) => {
                  handleGetStartedClick(e);
                  setIsMobileMenuOpen(false);
                }}
                data-testid="mobile-button-get-started"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
