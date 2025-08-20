import Navbar from "@/components/Navbar";
import EmailCta from "@/components/EmailCta";
import PlanCircle from "@/components/PlanCircle";
import heroBackground from "@assets/Hero Background_1755619519675.png";
import roundGradient from "@assets/Round Gradient_1755620690824.png";
import image1 from "@assets/image1_1755651733674.png";
import image2 from "@assets/image2_1755651733676.png";
import image3 from "@assets/image3_1755651733676.png";
import image4 from "@assets/image4_1755651733677.png";
import lineGradient from "@assets/line gradient_1755651923504.png";
import logo from "@assets/logo_1755607335061.png";
import candlestickIcon from "@assets/Candlestick Chart_1755658217886.png";
import conflictIcon from "@assets/Conflict_1755658277781.png";
import circleChartIcon from "@assets/Circle Chart_1755658307230.png";
import stocksIcon from "@assets/Stocks_1755658381592.png";
import { Check, ArrowLeftRight, Zap, PieChart, TrendingUp } from "lucide-react";

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
          className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-bottom-right bg-no-repeat opacity-60 pointer-events-none z-10"
          style={{ 
            backgroundImage: `url(${roundGradient})`,
            backgroundSize: '100% 100%'
          }}
        ></div>
        
        {/* Green Glow */}
        <div className="absolute bottom-1/2 left-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-green-500/10 rounded-full blur-3xl pointer-events-none z-5 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex min-h-screen items-center justify-center">
            <div className="text-center space-y-8 relative z-10">
              
              {/* Main Headline */}
              <h1 
                className="font-bold text-white tracking-wide blacklisted-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                data-testid="hero-headline"
              >APRENDE VIENDO. MEJORA HACIENDO. GANA ENTENDIENDO.</h1>

              {/* Subtitle */}
              <div className="space-y-2 max-w-3xl mx-auto px-4 sm:px-6">
                <p 
                  className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium"
                  data-testid="hero-subtitle-1"
                >
                  Acceso directo a la sala de trading de Abacus: 7 a 9 sesiones en vivo
                </p>
                <p 
                  className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium"
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
      <section id="pricing" className="relative bg-[#141414] pt-0 pb-12 px-4 sm:px-6">
        {/* Background with green glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#141414] to-[#141414]">
          <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-green-400/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-green-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Headline Section */}
          <div className="text-center mb-8 relative z-10">
            <p className="font-sans text-green-400 text-[12px] font-medium mb-4 animate-fade-in" data-testid="pricing-eyebrow">
              Precio simple y flexible
            </p>
            <h2 className="font-sans text-2xl sm:text-3xl md:text-[32px] text-white mb-6 animate-fade-in-up font-semibold" data-testid="pricing-headline">
              Elige el plan que se adapta a tu camino.
            </h2>
            <p className="font-sans text-white max-w-4xl mx-auto animate-fade-in-up-delay text-sm md:text-[14px] px-4" data-testid="pricing-subtitle">Suscríbete de forma mensual o anual — sin cargos ocultos, sin contratos, sin rodeos.<br />
            Comienza hoy a operar con los que realmente están en el mercado.</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-0">
            
            {/* Pase Semanal */}
            <div className="group relative bg-[linear-gradient(to_bottom,#151e19_0%,#141414_20%)] border border-green-500/10 rounded-3xl p-4 sm:p-6 shadow-2xl hover:scale-105 transition-transform duration-300" data-testid="card-weekly">
              <div className="flex items-start justify-between mb-4">
                <PlanCircle size={40} variant="neutral" className="sm:w-12 sm:h-12" />
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-2" data-testid="title-weekly">
                Pase Semanal
              </h3>
              <p className="font-sans text-gray-400 mb-4 text-[12px] font-semibold" data-testid="subtitle-weekly">
                Ideal para quienes prueban el trading por primera vez.
              </p>
              
              <div className="mb-6 flex items-start gap-2">
                <span className="font-sans text-3xl sm:text-[40px] font-semibold text-white" data-testid="price-weekly">$50</span>
                <div className="font-sans text-gray-400 text-sm sm:text-[16px] font-semibold pt-1">/ por semana</div>
              </div>
              
              <button className="font-sans w-full bg-gradient-to-b from-[#193b29] to-[#141d18] text-white font-semibold py-3 px-6 rounded-[16px] hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 mb-6 text-sm sm:text-base" data-testid="button-weekly">
                Iniciar ahora
              </button>
              
              <hr className="border-green-500/10 mb-4" />
              
              <div>
                <h4 className="font-sans text-white font-semibold mb-3" data-testid="features-title-weekly">
                  Que obtendrás:
                </h4>
                <ul className="space-y-2">
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-1-weekly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-2-weekly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Comunidad privada en Discord
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-3-weekly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Material educativo exclusivo
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-4-weekly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ideas de trading y análisis de mercado
                  </li>
                </ul>
              </div>
            </div>

            {/* Membresía Mensual - Most Popular */}
            <div className="group relative bg-[linear-gradient(to_bottom,#183023_0%,#141414_50%)] border border-green-500/20 rounded-3xl p-4 sm:p-6 shadow-2xl hover:scale-105 transition-transform duration-300" data-testid="card-monthly">
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <PlanCircle size={40} variant="neutral" className="sm:w-12 sm:h-12" />
                  <span className="font-sans text-white text-xs font-semibold px-3 py-1 rounded-full" data-testid="badge-popular">
                    Más popular
                  </span>
                </div>
                <span className="font-sans bg-gradient-to-b from-[#227649] to-[#193829] text-green-400 text-xs font-medium px-2 py-1 rounded-full" data-testid="badge-discount-monthly">
                  35% de descuento
                </span>
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-2" data-testid="title-monthly">
                Membresía Mensual
              </h3>
              <p className="font-sans text-gray-400 mb-4 text-[12px] font-semibold" data-testid="subtitle-monthly">
                Perfecta para traders comprometidos con mejorar.
              </p>
              
              <div className="mb-6 flex items-start gap-2">
                <span className="font-sans text-3xl sm:text-[40px] font-semibold text-white" data-testid="price-monthly">$150</span>
                <div className="font-sans text-gray-400 text-sm sm:text-[16px] font-semibold pt-1">/ por mes</div>
              </div>
              
              <button className="font-sans w-full bg-gradient-to-b from-[#19422d] to-[#17231b] text-white font-semibold py-3 px-6 rounded-[16px] hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 mb-6 text-sm sm:text-base" data-testid="button-monthly">
                Iniciar ahora
              </button>
              
              <hr className="border-green-500/10 mb-4" />
              
              <div>
                <h4 className="font-sans text-white font-semibold mb-3" data-testid="features-title-monthly">
                  Que obtendrás:
                </h4>
                <ul className="space-y-2">
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-1-monthly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-2-monthly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Comunidad privada en Discord
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-3-monthly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Material educativo exclusivo
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-4-monthly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ideas de trading y análisis de mercado
                  </li>
                </ul>
              </div>
            </div>

            {/* Plan Pro Trimestral - Best Value */}
            <div className="group relative bg-[linear-gradient(to_bottom,#183a2a_0%,#141414_80%)] border border-green-500/10 rounded-3xl p-4 sm:p-6 shadow-2xl hover:scale-105 transition-transform duration-300" data-testid="card-quarterly">
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <PlanCircle size={40} variant="filled" className="sm:w-12 sm:h-12" />
                  <span className="font-sans text-xs font-semibold px-3 py-1 rounded-full text-[#59b964]" data-testid="badge-best-value">
                    Mejor valor
                  </span>
                </div>
                <span className="font-sans bg-gradient-to-b from-[#227649] to-[#193829] text-green-400 text-xs font-medium px-2 py-1 rounded-full" data-testid="badge-discount-quarterly">
                  45% de descuento
                </span>
              </div>
              
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-white mb-2" data-testid="title-quarterly">
                Plan Pro Trimestral
              </h3>
              <p className="font-sans text-gray-400 mb-4 text-[12px] font-semibold" data-testid="subtitle-quarterly">
                Ideal para traders enfocados en el largo plazo.
              </p>
              
              <div className="mb-6 flex items-start gap-2">
                <span className="font-sans text-3xl sm:text-[40px] font-semibold text-white" data-testid="price-quarterly">$350</span>
                <div className="font-sans text-gray-400 text-sm sm:text-[16px] font-semibold pt-1">/ por 3 meses</div>
              </div>
              
              <button className="font-sans w-full bg-gradient-to-b from-[#2ab46b] to-[#1b864e] text-white font-semibold py-3 px-6 rounded-[16px] hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 mb-6 text-sm sm:text-base" data-testid="button-quarterly">
                Iniciar ahora
              </button>
              
              <hr className="border-green-500/10 mb-4" />
              
              <div>
                <h4 className="font-sans text-white font-semibold mb-3" data-testid="features-title-quarterly">
                  Que obtendrás:
                </h4>
                <ul className="space-y-2">
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-1-quarterly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Sesiones en vivo diarias
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-2-quarterly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Comunidad privada en Discord
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-3-quarterly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Material educativo exclusivo
                  </li>
                  <li className="font-sans flex items-center text-gray-400 text-[12px] font-semibold" data-testid="feature-4-quarterly">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    Ideas de trading y análisis de mercado
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Los 4 núcleos del Traders Hub Section */}
      <section className="relative bg-[#141414] py-16 px-4 sm:px-6">
        {/* Line Gradient Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat opacity-60 pointer-events-none"
          style={{ 
            backgroundImage: `url(${lineGradient})`, 
            backgroundPosition: 'center 15%',
            backgroundSize: '100% 72%'
          }}
        ></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-400/8 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="font-sans text-green-400 text-sm font-medium mb-4" data-testid="sessions-eyebrow">
              Nuestras sesiones
            </p>
            <h2 className="font-sans text-white mb-6 flex items-start justify-center gap-4 font-semibold" style={{ fontSize: '32px' }} data-testid="nucleos-headline">
              Los 4 núcleos del <img src={logo} alt="Traders Hub Logo" className="h-10 sm:h-14 md:h-16 inline-block mt-[4px] mb-[4px] pt-[3px] pb-[3px]" />
            </h2>
            <p className="font-sans text-gray-300 max-w-4xl mx-auto px-4" style={{ fontSize: '14px' }} data-testid="nucleos-description">No son clases: son 7 a 9 sesiones de trading en vivo cada semana, donde literalmente operas junto a nuestros mentores y observas su operativa en tiempo real.  Es la parte más práctica de todo el Abacus Experience, diseñada para que la comunidad siga, aprenda y ejecute exactamente lo que hacemos dentro del mercado. Se divide de en 4 núcleos.</p>
          </div>

          {/* Content Cards - Combined */}
          <div className="max-w-6xl mx-auto">
            <div className="group border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-green-500/10 hover:border-green-500/20 transition-all duration-300" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(27, 27, 27, 0.3) 10%, rgba(27, 27, 27, 1) 15%, rgba(27, 27, 27, 1) 100%)' }}>
              
              {/* Card 1 - Live Trading con Jorge Valet */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-12" data-testid="card-jorge-valet">
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <img src={image1} alt="Jorge Valet trading session" className="w-full h-64 lg:h-80 object-cover rounded-2xl" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={candlestickIcon} alt="Candlestick Chart" className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans text-white mb-4 font-semibold" style={{ fontSize: '24px' }}>
                    Live Trading con Jorge Valet
                  </h3>
                  <p className="font-sans text-gray-400 mb-6 text-[14px]" style={{ fontSize: '14px' }}>Acompaña a Jorge en sesiones de trading en vivo, donde analiza el mercado, ejecuta operaciones y explica paso a paso su proceso de decisión. Aprende a identificar oportunidades reales y a gestionar el riesgo mientras observas la acción del mercado minuto a minuto.</p>
                  <p className="font-sans text-green-400 font-semibold text-lg">
                    Aprende mirando. Crece operando.
                  </p>
                </div>
              </div>

              {/* Separator */}
              <hr className="border-white/10 mb-12" />

              {/* Card 2 - Opciones Avanzadas con Carlos Amec */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-12" data-testid="card-carlos-amec">
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <img src={image2} alt="Carlos Amec options session" className="w-full h-64 lg:h-80 object-cover rounded-2xl" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={conflictIcon} alt="Options Strategy" className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans text-white mb-4 font-semibold" style={{ fontSize: '24px' }}>
                    Opciones Avanzadas con Carlos Amec
                  </h3>
                  <p className="font-sans text-gray-400 mb-6 text-[14px]" style={{ fontSize: '14px' }}>Domina las estrategias que usan los profesionales. Carlos te guía en el mundo de las opciones con tácticas avanzadas como covered calls, puts y spreads. Descubre cómo generar ingresos consistentes y proteger tu portafolio en distintos escenarios de mercado.</p>
                  <p className="font-sans text-green-400 font-semibold text-lg">
                    Expande tu visión. Crea impacto.
                  </p>
                </div>
              </div>

              {/* Separator */}
              <hr className="border-white/10 mb-12" />

              {/* Card 3 - Portafolio & Wealth con Ernesto Yunes */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-12" data-testid="card-ernesto-yunes">
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <img src={image3} alt="Ernesto Yunes portfolio session" className="w-full h-64 lg:h-80 object-cover rounded-2xl" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={circleChartIcon} alt="Portfolio Chart" className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans text-white mb-4 font-semibold" style={{ fontSize: '24px' }}>
                    Portafolio & Wealth con Ernesto Yunes
                  </h3>
                  <p className="font-sans text-gray-400 mb-6 text-[14px]" style={{ fontSize: '14px' }}>Construye un portafolio sólido y a largo plazo. 
                  Ernesto comparte su enfoque de inversión en valor, gestión de portafolios y estrategias para hacer crecer tu capital de manera sostenible. Aprende a tomar decisiones financieras con fundamentos y visión estratégica.</p>
                  <p className="font-sans text-green-400 font-semibold text-lg">
                    Invierte con lógica. Crece con disciplina.
                  </p>
                </div>
              </div>

              {/* Separator */}
              <hr className="border-white/10 mb-12" />

              {/* Card 4 - Charting de la Semana con Jean Vizón */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8" data-testid="card-jean-vizon">
                <div className="w-full lg:w-1/2 flex-shrink-0">
                  <img src={image4} alt="Jean Vizón charting session" className="w-full h-64 lg:h-80 object-cover rounded-2xl" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={stocksIcon} alt="Stock Analysis" className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans text-white mb-4 font-semibold" style={{ fontSize: '24px' }}>
                    Charting de la Semana con Jean Vizón
                  </h3>
                  <p className="font-sans text-gray-400 mb-6 text-[14px]" style={{ fontSize: '14px' }}>Análisis técnico aplicado a lo que importa.  
                  Jean revisa los gráficos más relevantes de la semana y te muestra cómo leer el mercado con precisión. Identifica patrones, zonas clave y posibles escenarios para estar siempre un paso adelante.</p>
                  <p className="font-sans text-green-400 font-semibold text-lg">
                    Lee los charts. Anticipa el mercado.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Resultados Expertos Section */}
      <section className="relative bg-[#141414] py-8 px-4 sm:px-6">
        {/* Line Gradient Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat opacity-40 pointer-events-none"
          style={{ 
            backgroundImage: `url(${lineGradient})`, 
            backgroundPosition: 'center 20%',
            backgroundSize: '100% 50%'
          }}
        ></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-400/8 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-6">
            <p className="font-sans text-green-400 text-sm font-medium mb-4 uppercase tracking-wide" data-testid="resultados-eyebrow">
              Resultados Expertos
            </p>
            <h2 className="font-sans text-white mb-6 font-semibold" style={{ fontSize: '32px' }} data-testid="resultados-headline">
              Resultados que hablan por sí solos
            </h2>
            <p className="font-sans text-gray-300 max-w-4xl mx-auto px-4" style={{ fontSize: '16px' }} data-testid="resultados-description">
              Nuestros mentores no solo enseñan, operan en vivo y demuestran sus estrategias con resultados reales en el mercado.
            </p>
          </div>

          {/* Main Stats Card */}
          <div className="max-w-6xl mx-auto">
            <div className="relative border border-white/10 rounded-2xl p-3 shadow-2xl" style={{ 
              background: 'linear-gradient(135deg, rgba(27, 27, 27, 0.9) 0%, rgba(34, 34, 34, 0.8) 50%, rgba(27, 27, 27, 0.9) 100%)',
              backdropFilter: 'blur(10px)'
            }}>
              
              {/* Chart Container */}
              <div className="relative mb-2">
                {/* +61% Metric */}
                <div className="absolute top-0 right-4 sm:right-8 md:right-12 z-10">
                  <div className="font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-[132px] mb-[132px] text-[70px] text-[#ffffff]" style={{ filter: 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.4))' }}>
                    +61%
                  </div>
                </div>

                {/* Chart SVG */}
                <div className="h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-full group cursor-pointer flex items-center justify-center">
                  <svg viewBox="0 40 800 320" className="w-full h-full overflow-hidden" preserveAspectRatio="xMidYMid meet">
                    {/* Grid lines */}
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    
                    {/* Horizontal grid lines */}
                    <line x1="85" y1="280" x2="740" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="85" y1="210" x2="740" y2="210" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="85" y1="140" x2="740" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="85" y1="70" x2="740" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    
                    {/* Vertical grid lines */}
                    <line x1="85" y1="70" x2="85" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="175" y1="70" x2="175" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="265" y1="70" x2="265" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="355" y1="70" x2="355" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="445" y1="70" x2="445" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="535" y1="70" x2="535" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="625" y1="70" x2="625" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <line x1="715" y1="70" x2="715" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

                    {/* Y-axis labels - Four main values */}
                    <text x="80" y="285" fill="#fff" fontSize="12" textAnchor="end" className="font-medium">$0</text>
                    <text x="80" y="215" fill="#fff" fontSize="12" textAnchor="end" className="font-medium">US$1,000</text>
                    <text x="80" y="145" fill="#fff" fontSize="12" textAnchor="end" className="font-medium">US$2,000</text>
                    <text x="80" y="75" fill="#fff" fontSize="12" textAnchor="end" className="font-medium">US$3,000</text>

                    {/* Chart line with area fill - Proportional to actual data */}
                    <path
                      d="M 85,245 L 175,240 L 265,240 L 355,210 L 445,195 L 535,195 L 625,190 L 715,175"
                      fill="none"
                      stroke="rgb(34, 197, 94)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:stroke-green-300 group-hover:drop-shadow-lg"
                      style={{
                        filter: 'drop-shadow(0 0 4px rgba(34, 197, 94, 0.3))',
                        strokeDasharray: '2000',
                        strokeDashoffset: '2000',
                        animation: 'drawLine 2s ease-out forwards'
                      }}
                    />
                    <path
                      d="M 85,245 L 175,240 L 265,240 L 355,210 L 445,195 L 535,195 L 625,190 L 715,175 L 715,280 L 85,280 Z"
                      fill="url(#chartGradient)"
                      className="transition-all duration-300 group-hover:opacity-80"
                      style={{
                        opacity: '0',
                        animation: 'fillArea 2s ease-out 1s forwards'
                      }}
                    />
                    
                    {/* Interactive data points - Proportional positioning */}
                    <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <circle cx="85" cy="245" r="5" fill="rgb(34, 197, 94)" className="hover:r-7 transition-all cursor-pointer" data-value="$1,800" data-date="Aug 1"/>
                      <circle cx="175" cy="240" r="5" fill="rgb(34, 197, 94)" className="hover:r-7 transition-all cursor-pointer" data-value="$1,900" data-date="Aug 3"/>
                      <circle cx="265" cy="240" r="5" fill="rgb(34, 197, 94)" className="hover:r-7 transition-all cursor-pointer" data-value="$1,900" data-date="Aug 5"/>
                      <circle cx="355" cy="210" r="5" fill="rgb(34, 197, 94)" className="hover:r-7 transition-all cursor-pointer" data-value="$2,100" data-date="Aug 7"/>
                      <circle cx="445" cy="195" r="5" fill="rgb(34, 197, 94)" className="hover:r-7 transition-all cursor-pointer" data-value="$2,250" data-date="Aug 9"/>
                      <circle cx="535" cy="195" r="5" fill="rgb(34, 197, 94)" className="hover:r-7 transition-all cursor-pointer" data-value="$2,250" data-date="Aug 11"/>
                      <circle cx="625" cy="190" r="5" fill="rgb(34, 197, 94)" className="hover:r-7 transition-all cursor-pointer" data-value="$2,300" data-date="Aug 13"/>
                      <circle cx="715" cy="175" r="5" fill="rgb(34, 197, 94)" className="hover:r-7 transition-all cursor-pointer" data-value="$2,400" data-date="Aug 15"/>
                    </g>

                    {/* X-axis labels - Proportionally spaced dates */}
                    <text x="85" y="300" fill="#9CA3AF" fontSize="11" textAnchor="middle" className="group-hover:fill-green-300 transition-colors font-medium">Aug 1</text>
                    <text x="175" y="300" fill="#9CA3AF" fontSize="11" textAnchor="middle" className="group-hover:fill-green-300 transition-colors font-medium">Aug 3</text>
                    <text x="265" y="300" fill="#9CA3AF" fontSize="11" textAnchor="middle" className="group-hover:fill-green-300 transition-colors font-medium">Aug 5</text>
                    <text x="355" y="300" fill="#9CA3AF" fontSize="11" textAnchor="middle" className="group-hover:fill-green-300 transition-colors font-medium">Aug 7</text>
                    <text x="445" y="300" fill="#9CA3AF" fontSize="11" textAnchor="middle" className="group-hover:fill-green-300 transition-colors font-medium">Aug 9</text>
                    <text x="535" y="300" fill="#9CA3AF" fontSize="11" textAnchor="middle" className="group-hover:fill-green-300 transition-colors font-medium">Aug 11</text>
                    <text x="625" y="300" fill="#9CA3AF" fontSize="11" textAnchor="middle" className="group-hover:fill-green-300 transition-colors font-medium">Aug 13</text>
                    <text x="715" y="300" fill="#9CA3AF" fontSize="11" textAnchor="middle" className="group-hover:fill-green-300 transition-colors font-medium">Aug 15</text>
                  </svg>
                </div>

                {/* Chart Caption */}
                <p className="text-center text-gray-500 text-xs mt-2">
                  (Valor de la cuenta de Jorge Valet en 15 días)
                </p>
              </div>

              {/* Stats Panel */}
              <div className="border border-white/10 rounded-xl p-6 bg-black/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Left Column - Win/Loss Ratio */}
                  <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Win/Loss Ratio</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Pérdidas</span>
                        <span className="text-red-400 font-medium">2</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Ganancias</span>
                        <span className="text-green-400 font-medium">10</span>
                      </div>
                      <hr className="border-white/10"/>
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">Total</span>
                        <span className="text-white font-medium">12</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Win Rate */}
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-6 text-lg">Win Rate</h3>
                    <div className="text-6xl font-bold text-green-400 mb-2" style={{ filter: 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.4))' }}>83.333333%</div>
                    <div className="text-right">
                      <span className="text-xs px-2 py-1 rounded bg-[#ffffff80] text-[#000000]">
                        Resultados de 1 semana
                      </span>
                    </div>
                  </div>
                </div>

                {/* Panel Caption */}
                <p className="text-center text-gray-500 text-xs mt-6">
                  (Win Rate de Jorge Valet en una semana)
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
