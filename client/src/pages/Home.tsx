import Navbar from "@/components/Navbar";
import EmailCta from "@/components/EmailCta";
import heroBackground from "@assets/Hero Background_1755619519675.png";
import roundGradient from "@assets/Round Gradient_1755620690824.png";
import { Check, Star, Trophy } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen bg-page-bg">
      <div className="relative z-50">
        <Navbar />
      </div>
      {/* Hero Section */}
      <main className="relative -mt-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        
        {/* Background overlay for depth */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        
        {/* Gradient transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent pointer-events-none"></div>
        
        {/* Round Gradient Decoration */}
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bottom-right bg-no-repeat opacity-60 pointer-events-none z-10"
          style={{ 
            backgroundImage: `url(${roundGradient})`,
            backgroundSize: '100% 100%'
          }}
        ></div>
        
        {/* Green Glow */}
        <div className="absolute bottom-1/2 left-1/2 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl pointer-events-none z-5 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex min-h-screen items-center justify-center">
            <div className="text-center space-y-8 relative z-10">
              
              {/* Main Headline */}
              <h1 
                className="font-bold text-white tracking-wide blacklisted-font"
                data-testid="hero-headline"
              >APRENDE VIENDO. MEJORA HACIENDO. GANA ENTENDIENDO.</h1>

              {/* Subtitle */}
              <div className="space-y-2 max-w-3xl mx-auto text-[13px]">
                <p 
                  className="text-sm md:text-base text-zinc-300 font-medium"
                  data-testid="hero-subtitle-1"
                >
                  Acceso directo a la sala de trading de Abacus: 7 a 9 sesiones en vivo
                </p>
                <p 
                  className="text-sm md:text-base text-zinc-300 font-medium"
                  data-testid="hero-subtitle-2"
                >
                  semanales con mentores que operan y explican en tiempo real.
                </p>
              </div>

              {/* Email Capture */}
              <div className="pt-8 pb-20">
                <EmailCta />
              </div>

            </div>
          </div>
        </div>

      </main>
      {/* Pricing Section */}
      <section id="pricing" className="relative bg-[#141414] pt-0 pb-24 px-4">
        {/* Background with green glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#141414] to-[#141414]">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-400/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-green-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Headline Section */}
          <div className="text-center mb-16 relative z-10">
            <p className="font-sans text-green-400 text-sm font-medium mb-4 animate-fade-in" data-testid="pricing-eyebrow">
              Precio simple y flexible
            </p>
            <h2 className="font-sans md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up text-[30px]" data-testid="pricing-headline">
              Elige el plan que se adapta a tu camino.
            </h2>
            <p className="font-sans text-white max-w-4xl mx-auto animate-fade-in-up-delay text-[14px]" data-testid="pricing-subtitle">Suscríbete de forma mensual o anual — sin cargos ocultos, sin contratos, sin rodeos. 
            Comienza hoy a operar con los que realmente están en el mercado.</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Pase Semanal */}
            <div className="group relative bg-gradient-to-b from-[#0F1A17] to-[#0A1512] border border-green-500/10 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300" data-testid="card-weekly">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-400" />
                </div>
              </div>
              
              <h3 className="font-sans text-2xl font-bold text-white mb-2" data-testid="title-weekly">
                Pase Semanal
              </h3>
              <p className="font-sans text-gray-400 mb-6" data-testid="subtitle-weekly">
                Ideal para quienes prueban el trading por primera vez.
              </p>
              
              <div className="mb-8">
                <span className="font-sans text-5xl md:text-6xl font-bold text-white" data-testid="price-weekly">$50</span>
                <span className="font-sans text-gray-400 text-lg ml-2">/ por semana</span>
              </div>
              
              <button className="font-sans w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold py-4 px-6 rounded-full hover:from-green-500 hover:to-green-400 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 mb-8" data-testid="button-weekly">
                Iniciar ahora
              </button>
              
              <hr className="border-green-500/10 mb-6" />
              
              <div>
                <h4 className="font-sans text-white font-semibold mb-4" data-testid="features-title-weekly">
                  Que obtendrás:
                </h4>
                <ul className="space-y-3">
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-1-weekly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-2-weekly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Comunidad privada en Discord
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-3-weekly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Material educativo exclusivo
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-4-weekly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ideas de trading y análisis de mercado
                  </li>
                </ul>
              </div>
            </div>

            {/* Membresía Mensual - Most Popular */}
            <div className="group relative bg-gradient-to-b from-[#0F1A17] to-[#0A1512] border border-green-500/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300" data-testid="card-monthly">
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="font-sans bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold px-3 py-1 rounded-full" data-testid="badge-popular">
                  Más popular
                </span>
                <span className="font-sans bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-2 py-1 rounded-full" data-testid="badge-discount-monthly">
                  35% de descuento
                </span>
              </div>
              
              <div className="flex items-start justify-between mb-6 mt-8">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-green-400" />
                </div>
              </div>
              
              <h3 className="font-sans text-2xl font-bold text-white mb-2" data-testid="title-monthly">
                Membresía Mensual
              </h3>
              <p className="font-sans text-gray-400 mb-6" data-testid="subtitle-monthly">
                Perfecta para traders comprometidos con mejorar.
              </p>
              
              <div className="mb-8">
                <span className="font-sans text-5xl md:text-6xl font-bold text-white" data-testid="price-monthly">$150</span>
                <span className="font-sans text-gray-400 text-lg ml-2">/ por mes</span>
              </div>
              
              <button className="font-sans w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold py-4 px-6 rounded-full hover:from-green-500 hover:to-green-400 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 mb-8" data-testid="button-monthly">
                Iniciar ahora
              </button>
              
              <hr className="border-green-500/10 mb-6" />
              
              <div>
                <h4 className="font-sans text-white font-semibold mb-4" data-testid="features-title-monthly">
                  Que obtendrás:
                </h4>
                <ul className="space-y-3">
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-1-monthly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-2-monthly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Comunidad privada en Discord
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-3-monthly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Material educativo exclusivo
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-4-monthly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ideas de trading y análisis de mercado
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan Pro Trimestral - Best Value */}
            <div className="group relative bg-gradient-to-b from-[#0F1A17] to-[#0A1512] border border-green-500/10 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300" data-testid="card-quarterly">
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="font-sans bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1" data-testid="badge-best-value">
                  <Trophy className="w-3 h-3" />
                  Mejor valor
                </span>
                <span className="font-sans bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium px-2 py-1 rounded-full" data-testid="badge-discount-quarterly">
                  45% de descuento
                </span>
              </div>
              
              <div className="flex items-start justify-between mb-6 mt-8">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-400" />
                </div>
              </div>
              
              <h3 className="font-sans text-2xl font-bold text-white mb-2" data-testid="title-quarterly">
                Plan Pro Trimestral
              </h3>
              <p className="font-sans text-gray-400 mb-6" data-testid="subtitle-quarterly">
                Ideal para traders enfocados en el largo plazo.
              </p>
              
              <div className="mb-8">
                <span className="font-sans text-5xl md:text-6xl font-bold text-white" data-testid="price-quarterly">$350</span>
                <span className="font-sans text-gray-400 text-lg ml-2">/ por 3 meses</span>
              </div>
              
              <button className="font-sans w-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold py-4 px-6 rounded-full hover:from-green-500 hover:to-green-400 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 mb-8" data-testid="button-quarterly">
                Iniciar ahora
              </button>
              
              <hr className="border-green-500/10 mb-6" />
              
              <div>
                <h4 className="font-sans text-white font-semibold mb-4" data-testid="features-title-quarterly">
                  Que obtendrás:
                </h4>
                <ul className="space-y-3">
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-1-quarterly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-2-quarterly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Comunidad privada en Discord
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-3-quarterly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Material educativo exclusivo
                  </li>
                  <li className="font-sans flex items-center text-gray-300" data-testid="feature-4-quarterly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ideas de trading y análisis de mercado
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
