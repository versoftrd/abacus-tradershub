import Navbar from "@/components/Navbar";
import EmailCta from "@/components/EmailCta";
import heroBackground from "@assets/Hero Background_1755619519675.png";
import roundGradient from "@assets/Round Gradient_1755620690824.png";
import { Check } from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen bg-page-bg">
      <div className="relative z-50">
        <Navbar />
      </div>
      {/* Hero Section */}
      <main className="relative -mt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        ></div>
        
        {/* Background overlay for depth */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        
        {/* Round Gradient Decoration */}
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bottom-right bg-no-repeat opacity-60 pointer-events-none z-10"
          style={{ 
            backgroundImage: `url(${roundGradient})`,
            backgroundSize: '100% 100%'
          }}
        ></div>
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
              <div className="pt-8">
                <EmailCta />
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-green-400 text-sm font-medium mb-4" data-testid="pricing-subtitle">
              Precio simple y flexible
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" data-testid="pricing-title">
              Elige el plan que se adapta a tu camino.
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto" data-testid="pricing-description">
              Suscríbete de forma mensual o anual — sin cargos ocultos, sin contratos, sin rodeos.<br/>
              Comienza hoy a operar con los que realmente están en el mercado.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pase Semanal */}
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800" data-testid="card-weekly">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 rounded-full border-2 border-zinc-600 mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold text-white">Pase Semanal</h3>
                  <p className="text-zinc-400 text-sm">Ideal para quienes prueban el trading por primera vez.</p>
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$50</span>
                <span className="text-zinc-400 ml-2">/ por semana</span>
              </div>
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 rounded-lg font-medium transition-colors mb-8" data-testid="button-weekly">
                Iniciar ahora
              </button>
              <div>
                <p className="text-white font-semibold mb-4">Que obtendrás:</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Comunidad privada en Discord
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Material educativo exclusivo
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Ideas de trading y análisis de mercado
                  </li>
                </ul>
              </div>
            </div>

            {/* Membresía Mensual - Most Popular */}
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 relative" data-testid="card-monthly">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Más popular
                </span>
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold ml-2">
                  30% de descuento
                </span>
              </div>
              <div className="flex items-center mb-6 mt-4">
                <div className="w-6 h-6 rounded-full bg-green-500 mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold text-white">Membresía Mensual</h3>
                  <p className="text-zinc-400 text-sm">Perfecta para traders comprometidos con mejorar.</p>
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$150</span>
                <span className="text-zinc-400 ml-2">/ por mes</span>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-black py-3 px-6 rounded-lg font-medium transition-colors mb-8" data-testid="button-monthly">
                Iniciar ahora
              </button>
              <div>
                <p className="text-white font-semibold mb-4">Que obtendrás:</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Comunidad privada en Discord
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Material educativo exclusivo
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Ideas de trading y análisis de mercado
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan Pro Trimestal - Best Value */}
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 relative" data-testid="card-quarterly">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Mejor valor
                </span>
                <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold ml-2">
                  61% de descuento
                </span>
              </div>
              <div className="flex items-center mb-6 mt-4">
                <div className="w-6 h-6 rounded-full bg-green-500 mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold text-white">Plan Pro Trimestal</h3>
                  <p className="text-zinc-400 text-sm">Ideal para traders enfocados en el largo plazo.</p>
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">$350</span>
                <span className="text-zinc-400 ml-2">/ por 3 meses</span>
              </div>
              <button className="w-full bg-green-500 hover:bg-green-600 text-black py-3 px-6 rounded-lg font-medium transition-colors mb-8" data-testid="button-quarterly">
                Iniciar ahora
              </button>
              <div>
                <p className="text-white font-semibold mb-4">Que obtendrás:</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Comunidad privada en Discord
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    Material educativo exclusivo
                  </li>
                  <li className="flex items-center text-zinc-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
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
