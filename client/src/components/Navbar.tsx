import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";

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
    <nav className="sticky top-0 z-50 bg-navbar-bg backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative">
              <span className="text-xl font-bold text-white tracking-tight" data-testid="logo-traders">
                TRADERS
              </span>
              <span className="absolute -bottom-1 -right-2 font-cursive italic text-neon-green text-sm translate-y-1 -ml-2" data-testid="logo-hub">
                Hub
              </span>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="hidden md:flex">
            <div className="flex items-center gap-1 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 px-2 py-1">
              {navigationItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
                    isActive(item.path)
                      ? "text-white bg-tab-active"
                      : "text-zinc-300 hover:bg-tab-hover"
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
                className="px-4 py-1.5 rounded-full bg-login-bg text-zinc-200 hover:bg-login-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 text-sm font-medium"
                data-testid="button-login"
              >
                Login
              </button>
              <button 
                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-sm hover:opacity-95 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-sky-300/60 text-sm font-medium"
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
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-tab-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
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
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-white bg-tab-active"
                    : "text-zinc-300 hover:bg-tab-hover"
                }`}
                data-testid={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 space-y-2">
              <button 
                className="w-full px-4 py-2 rounded-full bg-login-bg text-zinc-200 hover:bg-login-hover transition-colors duration-200 text-sm font-medium"
                data-testid="mobile-button-login"
              >
                Login
              </button>
              <button 
                className="w-full px-4 py-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end text-white shadow-sm hover:opacity-95 transition-opacity duration-200 text-sm font-medium"
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
