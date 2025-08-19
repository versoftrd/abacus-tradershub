import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/logo_1755607335061.png";

const navigationItems = [
  { name: "Home", path: "/" },
  { name: "Abacus Experience", path: "/abacus-experience" },
  { name: "Market Open", path: "/market-open" },
  { name: "Campus Virtual", path: "/campus-virtual" },
  { name: "Traders Hub", path: "/traders-hub" },
  { name: "Pricing", path: "/pricing" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <img 
              src={logoPath} 
              alt="TRADERS Hub"
              className="h-[45px] w-auto mt-2"
              data-testid="logo-traders-hub"
            />
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex">
            <div className="flex items-center gap-1 rounded-[16px] backdrop-blur-sm border border-white/10 px-2 py-1 bg-[#1a1a1a]">
              {navigationItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-1.5 rounded-[10px] text-xs transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 text-white ${
                    isActive(item.path) ? "font-medium" : "font-light"
                  }`}
                  data-testid={`nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Separator */}
              <div className="w-px h-6 bg-white/10 mx-2"></div>
              
              {/* Login and Get Started buttons */}
              <button 
                className="px-4 py-1.5 rounded-[10px] bg-[#393939] text-zinc-200 hover:bg-[#4a4a4a] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 text-xs font-semibold"
                data-testid="button-login"
              >
                Login
              </button>
              <button 
                className="px-4 py-1.5 rounded-[10px] bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-sm hover:opacity-95 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60 text-xs font-semibold"
                data-testid="button-get-started"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-[10px] p-2 hover:bg-tab-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              data-testid="button-mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border-subtle bg-mobile-panel" data-testid="mobile-menu-panel">
          <div className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-[10px] text-xs transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-white font-medium"
                    : "text-zinc-300 font-light hover:bg-tab-hover"
                }`}
                data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsMobileMenuOpen(false)}
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
