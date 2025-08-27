import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/logotipo white@2x_1756142000438.png";

const navigationItems = [
  { name: "Home", path: "/", section: "hero" },
  { name: "Precios", path: "/precios", section: "pricing" },
  { name: "Núcleos", path: "/nucleos", section: "nucleos" },
  { name: "Resultados", path: "/resultados", section: "resultados" },
  { name: "Lo que obtienes", path: "/beneficios", section: "beneficios" },
  { name: "FAQ", path: "/faq", section: "faq" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
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
    <nav className="sticky top-12 z-50 relative">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-12 xs:h-14 sm:h-17 items-center justify-between gap-1 xs:gap-2 sm:gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="TRADERS Hub"
              className="logo-responsive"
              style={{ 
                width: 'auto',
                display: 'block',
                marginTop: '15%'
              }}
              data-testid="logo-traders-hub"
            />
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden lg:flex">
            <div className="flex items-center gap-0.5 sm:gap-1 rounded-[19px] backdrop-blur-2xl bg-white/5 border border-white/5 px-2 sm:px-2.5 py-1.5">
              {navigationItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleSectionClick(e, item.section)}
                  className={`px-2 sm:px-2.5 md:px-4 py-2 rounded-[12px] text-sm whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 text-white hover:font-semibold ${
                    isActive(item.path) ? "font-medium" : "font-light"
                  }`}
                  data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Separator */}
              <div className="w-px h-7 bg-white/10 mx-1 sm:mx-2"></div>
              
              {/* Login and Get Started buttons */}
              <a 
                href="http://abacusexchange.org/tradershub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 sm:px-4 md:px-5 py-2 rounded-[12px] bg-[#393939] text-zinc-200 hover:bg-[#4a4a4a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 text-sm font-semibold whitespace-nowrap"
                data-testid="button-login"
              >
                Entrar
              </a>
              <button 
                className="px-2.5 sm:px-4 md:px-5 py-2 rounded-[12px] text-white shadow-sm hover:opacity-95 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60 text-sm font-semibold whitespace-nowrap"
                style={{
                  background: 'linear-gradient(to top, #0943bb, #0759fb)'
                }}
                onClick={handleGetStartedClick}
                data-testid="button-get-started"
              >
                Iniciar Ahora
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-[200]">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-[12px] p-2 sm:p-2.5 hover:bg-tab-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              data-testid="button-mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 sm:h-7 sm:w-7" />
              ) : (
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed left-0 right-0 border-t border-border-subtle bg-mobile-panel z-[100]" style={{ top: '0' }} data-testid="mobile-menu-panel">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`block px-4 py-2.5 rounded-[12px] text-sm transition-all duration-200 hover:font-semibold ${
                  isActive(item.path)
                    ? "text-white font-medium"
                    : "text-zinc-300 font-light hover:bg-tab-hover"
                }`}
                data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => {
                  handleSectionClick(e, item.section);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 space-y-2">
              <a 
                href="http://abacusexchange.org/tradershub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center px-5 py-2.5 rounded-[12px] bg-[#393939] text-zinc-200 hover:bg-[#4a4a4a] transition-colors duration-200 text-sm font-semibold"
                data-testid="mobile-button-login"
              >
                Entrar
              </a>
              <button 
                className="w-full px-5 py-2.5 rounded-[12px] text-white shadow-sm hover:opacity-95 transition-opacity duration-200 text-sm font-semibold"
                style={{
                  background: 'linear-gradient(to top, #0943bb, #0759fb)'
                }}
                onClick={(e) => {
                  handleGetStartedClick(e);
                  setIsMobileMenuOpen(false);
                }}
                data-testid="mobile-button-get-started"
              >
                Iniciar Ahora
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
