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
import img1 from "@assets/img1_1755720550863.png";
import img2 from "@assets/img2_1755720550861.png";
import img3 from "@assets/img3_1755720550856.png";
import exampleImg from "@assets/example_1755728132421.png";
import img7 from "@assets/image7_1755728146437.png";
import img0209 from "@assets/img0209_1755728146437.png";
import img0222 from "@assets/img0222_1755728146438.png";
import backgroundGradient from "@assets/Background gradient_1755728624523.png";
import gree from "@assets/gree_1755729513904.png";
import boxes from "@assets/boxes_1755729518901.png";
import chart from "@assets/chart_1755730233734.png";
import logo from "@assets/logo_1755607335061.png";
import abacusLogo from "@assets/abacus_1755732410058.png";
import candlestickIcon from "@assets/Candlestick Chart_1755658217886.png";
import conflictIcon from "@assets/Conflict_1755658277781.png";
import circleChartIcon from "@assets/Circle Chart_1755658307230.png";
import stocksIcon from "@assets/Stocks_1755658381592.png";
import { Check, ArrowLeftRight, Zap, PieChart, TrendingUp, Twitter, MessageCircle, Instagram, Facebook, MessageSquare } from "lucide-react";

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
            <p className="font-sans text-green-400 text-sm font-medium mb-4 tracking-wide" data-testid="resultados-eyebrow">
              Resultados Expertos
            </p>
            <h2 className="font-sans text-white mb-6 font-semibold" style={{ fontSize: '32px' }} data-testid="resultados-headline">
              Resultados que hablan por sí solos
            </h2>
            <p className="font-sans text-gray-300 max-w-4xl mx-auto px-4 text-[14px]" style={{ fontSize: '16px' }} data-testid="resultados-description">
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
                      <span className="text-xs px-2 py-1 rounded text-[#000000] relative z-10 bg-[#ffffff] font-bold">
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

          {/* Modern Trading Dashboard - Two Frames */}
          <div className="relative max-w-6xl mx-auto mt-16">
            {/* Gradient Overlay on top of the cards */}
            <div 
              className="absolute bg-cover bg-center bg-no-repeat pointer-events-none z-50"
              style={{ 
                backgroundImage: `url(${backgroundGradient})`,
                borderRadius: '1rem',
                top: '-75%',
                left: '0',
                right: '0',
                height: '200%',
                opacity: 0.4
              }}
            ></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Left Panel - Frame 1934 */}
              <div className="group relative h-full">
                <div 
                  className="relative border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-green-400/40 hover:shadow-green-400/20 h-full flex flex-col"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(16, 32, 16, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 0 30px rgba(34, 197, 94, 0.1)'
                  }}
                >
                  
                  {/* Trading Table - img1 */}
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={img1} 
                      alt="Trading Portfolio Table" 
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  
                  {/* Growth Chart - img2 */}
                  <div className="relative mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={img2} 
                      alt="Portfolio Growth Chart" 
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  
                  {/* Caption */}
                  <p className="text-center text-gray-500 text-sm">
                    (Portafolios de Ernesto Yunes, en 1 año)
                  </p>
                </div>
              </div>

              {/* Right Panel - Frame 1933 */}
              <div className="group relative h-full">
                <div 
                  className="relative border border-white/20 rounded-2xl p-6 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-purple-400/40 hover:shadow-purple-400/20 h-full flex flex-col"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(32, 16, 32, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 0 30px rgba(147, 51, 234, 0.1)'
                  }}
                >
                  
                  {/* Trading Chart - img3 */}
                  <div className="relative mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={img3} 
                      alt="Trading Results Chart" 
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  
                  {/* Caption for img3 */}
                  <p className="text-center text-gray-500 text-sm mb-6">
                    (Resultados de trades de Carlos Amec Gutiérrez en 15 días)
                  </p>
                  
                  {/* Trading Positions Summary - Jean Vizón Results */}
                  <div className="space-y-4">
                    
                    
                    {/* Additional Trading Data */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="relative rounded-xl overflow-hidden">
                        <img 
                          src={img7} 
                          alt="P/L Performance" 
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="relative rounded-xl overflow-hidden">
                        <img 
                          src={img0209} 
                          alt="Single Position Details" 
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                    
                    {/* Portfolio Summary */}
                    <div className="relative rounded-xl overflow-hidden">
                      <img 
                        src={img0222} 
                        alt="Portfolio Summary" 
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                  
                  {/* Caption for img4 */}
                  <p className="text-center text-gray-500 text-sm mt-[16px] mb-[16px]">
                    (Resultados de Swing Trades con Opciones de Jean Vizón, 2025)
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* Student Results/Testimonial Section */}
      <section className="relative bg-[#141414] py-16 px-4 sm:px-6 overflow-hidden">
        {/* Green Gradient Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
          style={{ 
            backgroundImage: `url(${gree})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Additional dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/80 via-transparent to-[#141414]/80 pointer-events-none"></div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-400/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="font-sans text-green-400 text-sm font-medium mb-4 tracking-wide" data-testid="student-results-eyebrow">
              Resultados de Estudiantes
            </p>
            <h2 className="font-sans text-white mb-6 font-semibold" style={{ fontSize: '32px' }} data-testid="student-results-headline">
              Lo que aprendes aquí se convierte en resultados reales
            </h2>
            <p className="font-sans text-gray-300 max-w-4xl mx-auto px-4 text-[14px]" data-testid="student-results-description">
              Conoce a estudiantes que, tras capacitarse con nuestros mentores, ya están aplicando lo aprendido en el mercado.
            </p>
          </div>

          {/* Results Boxes Image */}
          <div className="flex justify-center">
            <div className="relative max-w-6xl mx-auto">
              <img 
                src={boxes} 
                alt="Student Trading Results" 
                className="w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 20px rgba(34, 197, 94, 0.1))',
                  maxWidth: '100%'
                }}
                data-testid="student-results-boxes"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Feature Highlights Section */}
      <section className="relative bg-[#0a0a0a] py-16 px-4 sm:px-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-400/2 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="font-sans text-green-400 text-sm font-medium mb-4 tracking-wide" data-testid="features-eyebrow">
              Lo que obtienes
            </p>
            <h2 className="font-sans text-white mb-6 font-semibold" style={{ fontSize: '32px' }} data-testid="features-headline">
              Características exclusivas de TradersHub
            </h2>
            <p className="font-sans text-gray-400 max-w-4xl mx-auto px-4 text-[14px]" data-testid="features-description">
              Desde sesiones en vivo hasta comunidad y análisis en tiempo real, todo está pensado para que aprendas practicando.
            </p>
          </div>

          {/* Features Card */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-2xl p-8 shadow-2xl border border-green-500/10"
              style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.08) 0%, rgba(16, 185, 129, 0.05) 50%, rgba(34, 197, 94, 0.08) 100%)',
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.1)'
              }}
              data-testid="features-card"
            >
              <div className="space-y-4">
                
                <div className="flex items-start space-x-4" data-testid="feature-1">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Sesiones en vivo de trading en tiempo real con los mentores de Abacus
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-2">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    7 a 9 sesiones semanales de práctica divididas en diferentes núcleos de especialización
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Live Day Trading con Jorge Valet: Aprende a leer y ejecutar operaciones intradía en vivo
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-4">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Opciones Avanzadas con Carlos Amec: Estrategias con opciones para rentabilizar tu portafolio
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-5">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Portafolio & Wealth con Ernesto Yunes: Construcción de portafolios diversificados a largo plazo
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-6">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Charting de la semana con Jean Vizón: Análisis técnico y estructuración de escenarios de mercado
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-7">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Acceso a grabaciones completas de todas las sesiones en español
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-8">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Metodología práctica: Aprendes mientras operas junto a traders expertos
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-9">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Acceso exclusivo a la comunidad de traders e inversionistas de Abacus
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-10">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Acompañamiento directo: Pregunta y recibe respuestas en vivo de los mentores
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-11">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Clases temáticas y actualizaciones constantes sobre tendencias y noticias del mercado
                  </p>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="feature-12">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-white text-[15px] leading-relaxed">
                    Entorno de trading seguro y guiado, ideal para aplicar estrategias sin estar solo
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call-to-Action Section */}
      <section className="relative bg-[#0a0a0a] py-16 px-4 sm:px-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/2 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* CTA Card */}
          <div 
            className="relative"
            style={{
              backgroundImage: `url(${chart})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              filter: 'drop-shadow(0 0 60px rgba(59, 130, 246, 0.15)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
            }}
            data-testid="cta-card"
          >
            {/* Content overlay */}
            <div className="relative z-10 flex flex-col items-start justify-center min-h-[480px] text-left pl-[15%] pr-4 sm:pr-8 md:pr-12 lg:pr-16">
              
              {/* Heading */}
              <h2 
                className="font-sans text-white mb-4 sm:mb-6 sm:text-3xl lg:text-4xl xl:text-5xl max-w-2xl font-semibold text-[29px]"
                data-testid="cta-heading"
              >
                Invierte con confianza, aprende en tiempo real
              </h2>
              
              {/* Subheading */}
              <p 
                className="font-sans text-gray-300 mb-6 sm:mb-10 sm:text-base lg:text-lg max-w-xl lg:max-w-2xl text-[18px]"
                data-testid="cta-subheading"
              >
                Accede al hub de trading más completo en español y transforma la forma en que entiendes e inviertes en la bolsa de valores.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-start">
                <button 
                  className="group font-sans font-bold text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-400/30 hover:bg-gradient-to-br hover:from-sky-600 hover:to-blue-600 hover:shadow-[0_8px_30px_rgba(56,189,248,0.5)] text-sm sm:text-base lg:text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%)',
                    boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)'
                  }}
                  data-testid="cta-button"
                >
                  Quiero mi acceso a TradersHub 🔥
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="relative bg-[#0a0a0a] py-16 px-4 sm:px-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-green-500/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-green-400/1 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="font-sans text-green-400 text-sm font-medium mb-4 tracking-wide" data-testid="faq-eyebrow">
              Preguntas Frecuentes
            </p>
            <h2 className="font-sans text-white mb-6 font-semibold text-2xl sm:text-3xl lg:text-4xl" data-testid="faq-headline">
              ¿Tienes preguntas? Aquí están las respuestas.
            </h2>
          </div>

          {/* FAQ Accordion Container */}
          <div 
            className="rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/5"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 16, 16, 0.95) 0%, rgba(24, 24, 24, 0.9) 50%, rgba(16, 16, 16, 0.95) 100%)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
            data-testid="faq-container"
          >
            <div className="space-y-0">
              
              {/* FAQ Item 1 */}
              <div className="group" data-testid="faq-item-1">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-colors duration-200 hover:text-green-400"
                  onClick={() => {
                    const content = document.getElementById('faq-content-1');
                    const icon = document.getElementById('faq-icon-1');
                    if (content && icon) {
                      const isOpen = !content.classList.contains('hidden');
                      if (isOpen) {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                        icon.textContent = '+';
                      } else {
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(90deg)';
                        icon.textContent = '–';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4">
                    ¿Qué incluye mi membresía a TradersHub?
                  </span>
                  <span 
                    id="faq-icon-1"
                    className="text-green-400 text-2xl font-bold transition-transform duration-300 flex-shrink-0"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-1" className="hidden pb-4 pl-0">
                  <p className="font-sans text-gray-400 text-base leading-relaxed">
                    Tu membresía incluye acceso a 7-9 sesiones semanales en vivo, grabaciones completas, análisis de mercado en tiempo real, acceso a la comunidad exclusiva de traders, y mentorías directas con nuestros expertos Jorge Valet, Carlos Amec, Ernesto Yunes y Jean Vizón.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group" data-testid="faq-item-2">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-colors duration-200 hover:text-green-400"
                  onClick={() => {
                    const content = document.getElementById('faq-content-2');
                    const icon = document.getElementById('faq-icon-2');
                    if (content && icon) {
                      const isOpen = !content.classList.contains('hidden');
                      if (isOpen) {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                        icon.textContent = '+';
                      } else {
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(90deg)';
                        icon.textContent = '–';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4">
                    ¿Necesito experiencia previa en trading?
                  </span>
                  <span 
                    id="faq-icon-2"
                    className="text-green-400 text-2xl font-bold transition-transform duration-300 flex-shrink-0"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-2" className="hidden pb-4 pl-0">
                  <p className="font-sans text-gray-400 text-base leading-relaxed">
                    No es necesario tener experiencia previa. Nuestro programa está diseñado tanto para principiantes como para traders experimentados. Comenzamos desde lo básico y progresamos gradualmente, siempre con apoyo directo de nuestros mentores.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group" data-testid="faq-item-3">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-colors duration-200 hover:text-green-400"
                  onClick={() => {
                    const content = document.getElementById('faq-content-3');
                    const icon = document.getElementById('faq-icon-3');
                    if (content && icon) {
                      const isOpen = !content.classList.contains('hidden');
                      if (isOpen) {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                        icon.textContent = '+';
                      } else {
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(90deg)';
                        icon.textContent = '–';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4">
                    ¿Cuánto capital necesito para empezar?
                  </span>
                  <span 
                    id="faq-icon-3"
                    className="text-green-400 text-2xl font-bold transition-transform duration-300 flex-shrink-0"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-3" className="hidden pb-4 pl-0">
                  <p className="font-sans text-gray-400 text-base leading-relaxed">
                    Puedes comenzar con tan poco como $500-$1,000 para aplicar las estrategias que aprendes. Sin embargo, recomendamos tener al menos $2,000-$5,000 para una gestión de riesgo más cómoda y mejores oportunidades de diversificación.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group" data-testid="faq-item-4">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-colors duration-200 hover:text-green-400"
                  onClick={() => {
                    const content = document.getElementById('faq-content-4');
                    const icon = document.getElementById('faq-icon-4');
                    if (content && icon) {
                      const isOpen = !content.classList.contains('hidden');
                      if (isOpen) {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                        icon.textContent = '+';
                      } else {
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(90deg)';
                        icon.textContent = '–';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4">
                    ¿Las sesiones están disponibles en horarios específicos?
                  </span>
                  <span 
                    id="faq-icon-4"
                    className="text-green-400 text-2xl font-bold transition-transform duration-300 flex-shrink-0"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-4" className="hidden pb-4 pl-0">
                  <p className="font-sans text-gray-400 text-base leading-relaxed">
                    Sí, tenemos un horario establecido para las sesiones en vivo que coincide con los horarios de mercado más activos. Todas las sesiones quedan grabadas y disponibles para verlas cuando te sea conveniente si no puedes asistir en vivo.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 5 - Open by default */}
              <div className="group" data-testid="faq-item-5">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-colors duration-200 hover:text-green-400 text-green-400"
                  onClick={() => {
                    const content = document.getElementById('faq-content-5');
                    const icon = document.getElementById('faq-icon-5');
                    if (content && icon) {
                      const isOpen = !content.classList.contains('hidden');
                      if (isOpen) {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                        icon.textContent = '+';
                      } else {
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(90deg)';
                        icon.textContent = '–';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4">
                    ¿Puedo cancelar mi membresía en cualquier momento?
                  </span>
                  <span 
                    id="faq-icon-5"
                    className="text-green-400 text-2xl font-bold transition-transform duration-300 flex-shrink-0"
                    style={{ transform: 'rotate(90deg)' }}
                  >
                    –
                  </span>
                </button>
                <div id="faq-content-5" className="pb-4 pl-0">
                  <p className="font-sans text-gray-400 text-base leading-relaxed">
                    Absolutamente. No hay compromisos a largo plazo ni penalizaciones por cancelación. Puedes cancelar tu membresía en cualquier momento desde tu panel de usuario, y mantendrás acceso hasta el final de tu período de facturación actual.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="relative bg-[#080808] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
            
            {/* Logo Section */}
            <div className="lg:col-span-1">
              <img 
                src={abacusLogo} 
                alt="Abacus Logo" 
                className="h-12 w-auto mb-4"
                data-testid="footer-logo"
              />
            </div>
            
            {/* Navigation Columns */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                
                {/* Column 1 - Abacus */}
                <div data-testid="footer-column-abacus">
                  <h3 className="font-sans text-gray-400 font-semibold mb-4" style={{ fontSize: '14px' }}>Abacus</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-home">Home</a></li>
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-videos">Videos</a></li>
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-reviews">Reviews</a></li>
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-testimonials">Testimonials</a></li>
                  </ul>
                </div>
                
                {/* Column 2 - Aprende */}
                <div data-testid="footer-column-aprende">
                  <h3 className="font-sans text-gray-400 font-semibold mb-4" style={{ fontSize: '14px' }}>Aprende</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-experience">Abacus Experience</a></li>
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-campus">Campus Virtual</a></li>
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-market">Market Open</a></li>
                  </ul>
                </div>
                
                {/* Column 3 - Conoce más */}
                <div data-testid="footer-column-conoce">
                  <h3 className="font-sans text-gray-400 font-semibold mb-4" style={{ fontSize: '14px' }}>Conoce más</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-tradestation">TradeStation</a></li>
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-tradersync">TraderSync</a></li>
                  </ul>
                </div>
                
                {/* Column 4 - Ayuda */}
                <div data-testid="footer-column-ayuda">
                  <h3 className="font-sans text-gray-400 font-semibold mb-4" style={{ fontSize: '14px' }}>Ayuda</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-contact">Contáctanos</a></li>
                    <li><a href="#" className="font-sans text-white hover:text-green-400 transition-colors duration-200" style={{ fontSize: '12px' }} data-testid="footer-link-refer">Refiere a un Amigo</a></li>
                  </ul>
                </div>
                
              </div>
            </div>
            
            {/* Right Section - Register Button */}
            <div className="lg:col-span-1 flex justify-start lg:justify-end">
              <button 
                className="font-sans bg-gradient-to-b from-[#2ab46b] to-[#1b864e] text-white font-semibold py-3 px-6 rounded-[16px] hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 text-sm"
                data-testid="footer-register-button"
              >
                Regístrate
              </button>
            </div>
            
          </div>
          
          {/* Headquarters Info */}
          <div className="flex justify-center items-center mb-8 space-x-12">
            <p className="font-sans text-[12px] text-[#9da3ae]">
              <span className="font-bold text-[#9da3a9]">Headquarters:</span>{" "}
              <span className="text-gray-400">Toronto, ON, Canada | Santo Domingo, Dominican Republic</span>
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200" data-testid="footer-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200" data-testid="footer-discord">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200" data-testid="footer-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200" data-testid="footer-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200" data-testid="footer-whatsapp">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Divider Line */}
          <div className="border-t border-gray-800 mb-8"></div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Left - Copyright */}
            <div>
              <p className="font-sans text-gray-400 text-sm" data-testid="footer-copyright">
                © 2025 Abacus Exchange. All rights reserved.
              </p>
            </div>
            
            {/* Right - Privacy Links */}
            <div className="flex space-x-4">
              <a href="#" className="font-sans text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm" data-testid="footer-privacy">
                Política de Privacidad
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="font-sans text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm" data-testid="footer-terms">
                Términos y Condiciones
              </a>
            </div>
            
          </div>
          
        </div>
      </footer>
    </div>
  );
}
