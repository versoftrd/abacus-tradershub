import Navbar from "@/components/Navbar";
import EmailCta from "@/components/EmailCta";
import PlanCircle from "@/components/PlanCircle";
import heroBackground from "@assets/Hero Background_1755619519675.png";
import roundGradient from "@assets/Round Gradient_1755877095797.png";
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
import winstonTradingImage from "@assets/winston-cordero-new.png";
import optionsIcon from "@assets/options-icon.png";
import desktopLoopVideo from "@assets/Loop dekstop_1755737411238.mp4";
import mobileLoopVideo from "@assets/Loop Movil_1755737411240.mp4";
import { Check, ArrowLeftRight, Zap, PieChart, TrendingUp, Instagram, Facebook, MessageSquare, Youtube } from "lucide-react";
import { SiWhatsapp, SiDiscord, SiX, SiTiktok, SiYoutube } from "react-icons/si";
import { useState, useEffect } from "react";

// Animated Counter Component
function AnimatedCounter({ target, duration = 2000, suffix = "%" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const startValue = 0;
            const endValue = target;

            const updateCount = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = startValue + (endValue - startValue) * easeOutQuart;
              
              setCount(currentValue);
              
              if (progress < 1) {
                requestAnimationFrame(updateCount);
              }
            };
            
            requestAnimationFrame(updateCount);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('win-rate-counter');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span id="win-rate-counter">
      {count.toFixed(6)}{suffix}
    </span>
  );
}

// Animated Chart Percentage Display
function AnimatedChartPercentage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Show text while chart is still drawing (3.5s)
            setTimeout(() => {
              setIsVisible(true);
            }, 3500);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('chart-percentage-trigger');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div 
      id="chart-percentage-trigger"
      className={`font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#ffffff] mt-8 sm:mt-12 md:mt-[55px] mb-8 sm:mb-12 md:mb-[55px] transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ 
        filter: 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.4))',
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
      }}
    >
      +150.8%
    </div>
  );
}

// Animated Line Chart Component
function AnimatedLineChart() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Chart data points (x, y coordinates) - More realistic trading pattern
  const dataPoints = [
    { x: 85, y: 280, value: 0 },      // Aug 1: Starting point at 0%
    { x: 175, y: 260, value: 12 },    // Aug 3: Small gain 12%
    { x: 265, y: 270, value: 8 },     // Aug 5: Small dip to 8%
    { x: 355, y: 235, value: 28 },    // Aug 7: Recovery to 28%
    { x: 445, y: 250, value: 22 },    // Aug 9: Minor pullback to 22%
    { x: 535, y: 140, value: 100 },   // Aug 11: Strong growth to 100%
    { x: 625, y: 160, value: 75 },    // Aug 13: Pullback to 75%
    { x: 715, y: 72, value: 150.8 }   // Aug 15: Straight line surge to 150.8%
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const duration = 5000; // 5 seconds for full animation (slower)

            const updateProgress = () => {
              const now = Date.now();
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              setAnimationProgress(easeOutQuart);
              
              if (progress < 1) {
                requestAnimationFrame(updateProgress);
              }
            };
            
            requestAnimationFrame(updateProgress);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('animated-chart');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Calculate which points to show based on animation progress
  const pointsToShow = Math.ceil(animationProgress * dataPoints.length);
  const visiblePoints = dataPoints.slice(0, pointsToShow);
  
  // Generate smooth curved path for the visible portion
  const generatePath = (points: typeof dataPoints) => {
    if (points.length === 0) return "";
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
    if (points.length === 2) return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
    
    let path = `M ${points[0].x} ${points[0].y}`;
    
    // Create smooth curves using quadratic bezier curves
    for (let i = 1; i < points.length; i++) {
      const current = points[i];
      const previous = points[i - 1];
      
      if (i === 1) {
        // First curve - start smoothly
        const controlX = previous.x + (current.x - previous.x) * 0.5;
        const controlY = previous.y + (current.y - previous.y) * 0.3;
        path += ` Q ${controlX} ${controlY} ${current.x} ${current.y}`;
      } else {
        // Subsequent curves - create smooth transitions
        const next = points[i + 1];
        if (next) {
          // Use the midpoint between current and next for smooth continuation
          const controlX = current.x - (current.x - previous.x) * 0.2;
          const controlY = current.y - (current.y - previous.y) * 0.2;
          path += ` Q ${controlX} ${controlY} ${current.x} ${current.y}`;
        } else {
          // Check if this is the final segment (from Aug 13 to Aug 15)
          if (i === points.length - 1 && points.length >= 3) {
            // Make final segment a straight line
            path += ` L ${current.x} ${current.y}`;
          } else {
            // Last point - smooth ending for other segments
            const controlX = previous.x + (current.x - previous.x) * 0.7;
            const controlY = previous.y + (current.y - previous.y) * 0.5;
            path += ` Q ${controlX} ${controlY} ${current.x} ${current.y}`;
          }
        }
      }
    }
    return path;
  };

  // Generate smooth area fill path
  const generateAreaPath = (points: typeof dataPoints) => {
    if (points.length === 0) return "";
    
    let path = `M ${points[0].x} 280`; // Start from bottom
    path += ` L ${points[0].x} ${points[0].y}`; // Go to first point
    
    // Use the same smooth curve logic as the line
    if (points.length > 1) {
      for (let i = 1; i < points.length; i++) {
        const current = points[i];
        const previous = points[i - 1];
        
        if (i === 1) {
          const controlX = previous.x + (current.x - previous.x) * 0.5;
          const controlY = previous.y + (current.y - previous.y) * 0.3;
          path += ` Q ${controlX} ${controlY} ${current.x} ${current.y}`;
        } else {
          const next = points[i + 1];
          if (next) {
            const controlX = current.x - (current.x - previous.x) * 0.2;
            const controlY = current.y - (current.y - previous.y) * 0.2;
            path += ` Q ${controlX} ${controlY} ${current.x} ${current.y}`;
          } else {
            // Check if this is the final segment for area fill too
            if (i === points.length - 1 && points.length >= 3) {
              // Make final segment a straight line
              path += ` L ${current.x} ${current.y}`;
            } else {
              const controlX = previous.x + (current.x - previous.x) * 0.7;
              const controlY = previous.y + (current.y - previous.y) * 0.5;
              path += ` Q ${controlX} ${controlY} ${current.x} ${current.y}`;
            }
          }
        }
      }
    }
    
    if (points.length > 0) {
      const lastPoint = points[points.length - 1];
      path += ` L ${lastPoint.x} 280`; // Close to bottom
    }
    path += " Z"; // Close path
    
    return path;
  };



  return (
    <div id="animated-chart" className="h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[32rem] xl:h-[36rem] w-full group cursor-pointer flex items-center justify-center">
      <svg viewBox="0 40 800 320" className="w-full h-full overflow-hidden" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0"/>
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        <line x1="85" y1="280" x2="740" y2="280" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        <line x1="85" y1="210" x2="740" y2="210" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        <line x1="85" y1="140" x2="740" y2="140" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        <line x1="85" y1="70" x2="740" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        
        {/* Vertical grid lines */}
        <line x1="175" y1="70" x2="175" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <line x1="265" y1="70" x2="265" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <line x1="355" y1="70" x2="355" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <line x1="445" y1="70" x2="445" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <line x1="535" y1="70" x2="535" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <line x1="625" y1="70" x2="625" y2="280" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        
        {/* Y-axis labels */}
        <text x="65" y="285" fill="#9CA3AF" fontSize="12" textAnchor="end">0%</text>
        <text x="65" y="215" fill="#9CA3AF" fontSize="12" textAnchor="end">50%</text>
        <text x="65" y="145" fill="#9CA3AF" fontSize="12" textAnchor="end">100%</text>
        <text x="65" y="75" fill="#9CA3AF" fontSize="12" textAnchor="end">150%</text>
        
        {/* Area fill - animated */}
        <path
          d={generateAreaPath(visiblePoints)}
          fill="url(#chartGradient)"
          opacity="0.6"
        />
        
        {/* Main line - animated */}
        <path
          d={generatePath(visiblePoints)}
          stroke="rgb(34, 197, 94)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))"
        />
        
        {/* Data points - appear as line progresses */}
        <g>
          {visiblePoints.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="rgb(34, 197, 94)"
              className="hover:r-7 transition-all cursor-pointer"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.6))',
                opacity: animationProgress > (index / dataPoints.length) ? 1 : 0,
                transition: 'opacity 0.3s ease'
              }}
            />
          ))}
        </g>

        {/* X-axis labels */}
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
  );
}

export default function Home() {

  return (
    <div className="min-h-screen bg-page-bg overflow-x-hidden">
      <div className="absolute top-0 z-50 pt-6 w-full">
        <Navbar />
      </div>
      {/* Hero Section */}
      <main id="hero" className="relative overflow-hidden min-h-screen" role="banner" aria-label="TradersHub - Plataforma de Trading en Vivo">
        {/* Background Video */}
        <div className="absolute inset-0">
          {/* Desktop Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: '100%', height: 'auto', minHeight: '100vh' }}
          >
            <source src={desktopLoopVideo} type="video/mp4" />
          </video>
          
          {/* Mobile Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover block md:hidden"
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: '100%', height: 'auto', minHeight: '100vh' }}
          >
            <source src={mobileLoopVideo} type="video/mp4" />
          </video>
        </div>
        
        {/* Background overlay for depth */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        
        {/* Gradient transition overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent pointer-events-none"></div>
        
        {/* Round Gradient Decoration */}
        <div 
          className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] bg-bottom-right bg-no-repeat opacity-60 pointer-events-none z-10"
          style={{ 
            backgroundImage: `url(${roundGradient})`,
            backgroundSize: '100% 100%'
          }}
        ></div>
        
        {/* Green Glow */}
        <div className="absolute bottom-1/2 left-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-green-500/10 rounded-full blur-3xl pointer-events-none z-5 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="mx-auto max-w-6xl px-3 sm:px-4 md:px-6 w-full">
          <div className="flex min-h-screen items-center justify-center py-20 sm:py-24 md:py-0">
            <div className="text-center space-y-7 sm:space-y-10 relative z-10 w-full">
              
              {/* Main Headline with Blacklisted font at 34px - Safari compatible */}
              <h1 
                className="text-white tracking-wide px-2 font-normal mt-[0px] mb-[0px] overflow-visible blacklisted-font"
                style={{
                  fontSize: '34px !important', 
                  fontFamily: "'Blacklisted', sans-serif !important",
                  display: 'block',
                  paddingTop: '0.1em',
                  paddingBottom: '0.1em',
                  minHeight: '40px',
                  overflow: 'visible',
                  WebkitTextStroke: '0.1px transparent',
                  lineHeight: '1.3',
                  fontWeight: 'normal',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  textRendering: 'optimizeLegibility'
                }}
                data-testid="hero-headline"
              >
                APRENDE VIENDO. MEJORA HACIENDO. GANA ENTENDIENDO.
              </h1>

              {/* Subtitle */}
              <div className="space-y-1 sm:space-y-2 max-w-4xl sm:max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
                <p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 font-medium leading-snug sm:leading-relaxed"
                  data-testid="hero-subtitle-1"
                >
                  <span className="sm:hidden">Acceso directo a la sala de trading de Abacus:</span>
                  <span className="hidden sm:inline">Acceso directo a la sala de trading de Abacus: 7 a 9 sesiones en vivo semanales</span>
                </p>
                <p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 font-medium leading-snug sm:leading-relaxed"
                  data-testid="hero-subtitle-2"
                >
                  <span className="sm:hidden">7 a 9 sesiones en vivo semanales con mentores</span>
                  <span className="hidden sm:inline">con mentores que operan y explican en tiempo real.</span>
                </p>
                <p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-300 font-medium leading-snug sm:leading-relaxed sm:hidden"
                  data-testid="hero-subtitle-3"
                >
                  que operan y explican en tiempo real.
                </p>
              </div>

              {/* Email Capture */}
              <div className="pt-6 sm:pt-8 pb-16 sm:pb-20">
                <EmailCta />
              </div>

            </div>
          </div>
        </div>

      </main>
      {/* Pricing Section */}
      <section id="pricing" className="relative bg-[#141414] pt-0 pb-12 px-4 sm:px-6" aria-labelledby="pricing-headline">
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
            <h2 className="font-sans text-[24px] sm:text-3xl md:text-[32px] lg:text-[36px] text-white mb-6 animate-fade-in-up font-semibold" data-testid="pricing-headline">
              Elige el plan que se adapta a tu camino.
            </h2>
            <p className="font-sans text-white max-w-4xl mx-auto animate-fade-in-up-delay text-sm md:text-[14px] px-4" data-testid="pricing-subtitle">Suscríbete de forma mensual o anual — sin cargos ocultos, sin contratos, sin rodeos.<br />
            Comienza hoy a operar con los que realmente están en el mercado.</p>
          </div>

          {/* Pricing Cards */}
          <div className="responsive-grid responsive-grid-2 max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
            
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
                <span className="font-sans text-3xl sm:text-[40px] font-semibold text-white" data-testid="price-weekly">$250</span>
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
                <span className="font-sans text-3xl sm:text-[40px] font-semibold text-white" data-testid="price-quarterly">$2,500</span>
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
      {/* Los 5 núcleos del Traders Hub Section */}
      <section id="nucleos" className="relative bg-[#141414] py-16 px-4 sm:px-6" aria-labelledby="nucleos-headline">
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
            <h2 className="font-sans text-white mb-6 flex items-start justify-center gap-4 font-semibold text-[24px] sm:text-3xl lg:text-4xl" data-testid="nucleos-headline">
              Los 5 núcleos del <img src={logo} alt="Traders Hub Logo" className="h-10 sm:h-14 md:h-16 inline-block mt-[4px] mb-[4px] pt-[3px] pb-[3px]" />
            </h2>
            <p className="font-sans text-gray-300 max-w-4xl mx-auto px-4" style={{ fontSize: '14px' }} data-testid="nucleos-description">No son clases: son 7 a 9 sesiones de trading en vivo cada semana, donde literalmente operas junto a nuestros mentores y observas su operativa en tiempo real.  Es la parte más práctica de todo el Abacus Experience, diseñada para que la comunidad siga, aprenda y ejecute exactamente lo que hacemos dentro del mercado. Se divide de en 5 núcleos.</p>
          </div>

          {/* Content Cards - Combined */}
          <div className="max-w-6xl mx-auto">
            <div className="group border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-green-500/10 hover:border-green-500/20 transition-all duration-300" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(27, 27, 27, 0.3) 10%, rgba(27, 27, 27, 1) 15%, rgba(27, 27, 27, 1) 100%)' }}>
              
              {/* Card 1 - Portafolio & Wealth con Ernesto Yunes */}
              <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 group cursor-pointer transition-all duration-500 hover:bg-white/[0.02] hover:shadow-lg rounded-2xl sm:rounded-3xl p-3 sm:p-4 -m-3 sm:-m-4" data-testid="card-ernesto-yunes">
                <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-xl sm:rounded-2xl">
                  <img src={image3} alt="Ernesto Yunes portfolio session" className="w-full h-48 sm:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-0">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={circleChartIcon} alt="Portfolio Chart" className="w-8 h-8 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </div>
                  <h3 className="font-sans text-white mb-3 sm:mb-4 font-semibold transition-colors duration-300 group-hover:text-green-100 text-lg sm:text-xl md:text-2xl leading-tight">
                    Portafolio & Wealth con Ernesto Yunes
                  </h3>
                  <p className="font-sans text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base transition-colors duration-300 group-hover:text-gray-300 leading-relaxed">Construye un portafolio sólido y a largo plazo. 
                  Ernesto comparte su enfoque de inversión en valor, gestión de portafolios y estrategias para hacer crecer tu capital de manera sostenible. Aprende a tomar decisiones financieras con fundamentos y visión estratégica.</p>
                  <p className="font-sans text-green-400 font-semibold text-base sm:text-lg transition-all duration-300 group-hover:text-green-300 group-hover:scale-105">
                    Invierte con lógica. Crece con disciplina.
                  </p>
                </div>
              </div>

              {/* Separator */}
              <hr className="border-white/10 mb-12" />

              {/* Card 2 - Live Trading con Jorge Valet */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-12 group cursor-pointer transition-all duration-500 hover:bg-white/[0.02] hover:shadow-lg rounded-3xl p-4 -m-4" data-testid="card-jorge-valet">
                <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-2xl">
                  <img src={image1} alt="Jorge Valet trading session" className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={candlestickIcon} alt="Candlestick Chart" className="w-8 h-8 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </div>
                  <h3 className="font-sans text-white mb-4 font-semibold transition-colors duration-300 group-hover:text-green-100 text-lg sm:text-xl md:text-2xl leading-tight">
                    Live Trading con Jorge Valet
                  </h3>
                  <p className="font-sans text-gray-400 mb-6 text-[14px] transition-colors duration-300 group-hover:text-gray-300" style={{ fontSize: '14px' }}>Acompaña a Jorge en sesiones de trading en vivo, donde analiza el mercado, ejecuta operaciones y explica paso a paso su proceso de decisión. Aprende a identificar oportunidades reales y a gestionar el riesgo mientras observas la acción del mercado minuto a minuto.</p>
                  <p className="font-sans text-green-400 font-semibold text-lg transition-all duration-300 group-hover:text-green-300 group-hover:scale-105">
                    Aprende mirando. Crece operando.
                  </p>
                </div>
              </div>

              {/* Separator */}
              <hr className="border-white/10 mb-12" />

              {/* Card 3 - Live Options Trading con Winston Cordero */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-12 group cursor-pointer transition-all duration-500 hover:bg-white/[0.02] hover:shadow-lg rounded-3xl p-4 -m-4" data-testid="card-winston-cordero">
                <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-2xl">
                  <img src={winstonTradingImage} alt="Winston Cordero options trading session" className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={optionsIcon} alt="Options Trading Icon" className="w-8 h-8 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </div>
                  <h3 className="font-sans text-white mb-4 font-semibold transition-colors duration-300 group-hover:text-green-100 text-lg sm:text-xl md:text-2xl leading-tight">
                    Live Options Trading con Winston Cordero
                  </h3>
                  <p className="font-sans text-gray-400 mb-6 text-[14px] transition-colors duration-300 group-hover:text-gray-300" style={{ fontSize: '14px' }}>Winston te lleva al siguiente nivel en el manejo de opciones, combinando análisis de contexto, estructura del mercado y ejecución práctica. Aprende desde day trading, hasta cómo crear un portafolio flexible con opciones que se adapte al movimiento del mercado y potencie tu rendimiento con control de riesgo.</p>
                  <p className="font-sans text-green-400 font-semibold text-lg transition-all duration-300 group-hover:text-green-300 group-hover:scale-105">
                    No solo aprendes a operar; aprenderás a pensar como un trader institucional.
                  </p>
                </div>
              </div>

              {/* Separator */}
              <hr className="border-white/10 mb-12" />

              {/* Card 4 - Opciones Avanzadas con Carlos Amec */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-12 group cursor-pointer transition-all duration-500 hover:bg-white/[0.02] hover:shadow-lg rounded-3xl p-4 -m-4" data-testid="card-carlos-amec">
                <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-2xl">
                  <img src={image2} alt="Carlos Amec options session" className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={conflictIcon} alt="Options Strategy" className="w-8 h-8 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </div>
                  <h3 className="font-sans text-white mb-4 font-semibold transition-colors duration-300 group-hover:text-green-100 text-lg sm:text-xl md:text-2xl leading-tight">
                    Opciones Avanzadas con Carlos Amec
                  </h3>
                  <p className="font-sans text-gray-400 mb-6 text-[14px] transition-colors duration-300 group-hover:text-gray-300" style={{ fontSize: '14px' }}>Domina las estrategias que usan los profesionales. Carlos te guía en el mundo de las opciones con tácticas avanzadas como covered calls, puts y spreads. Descubre cómo generar ingresos consistentes y proteger tu portafolio en distintos escenarios de mercado.</p>
                  <p className="font-sans text-green-400 font-semibold text-lg transition-all duration-300 group-hover:text-green-300 group-hover:scale-105">
                    Expande tu visión. Crea impacto.
                  </p>
                </div>
              </div>

              {/* Separator */}
              <hr className="border-white/10 mb-12" />

              {/* Card 5 - Charting de la Semana con Jean Vizón */}
              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 group cursor-pointer transition-all duration-500 hover:bg-white/[0.02] hover:shadow-lg rounded-3xl p-4 -m-4" data-testid="card-jean-vizon">
                <div className="w-full lg:w-1/2 flex-shrink-0 overflow-hidden rounded-2xl">
                  <img src={image4} alt="Jean Vizón charting session" className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <img src={stocksIcon} alt="Stock Analysis" className="w-8 h-8 transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  </div>
                  <h3 className="font-sans text-white mb-4 font-semibold transition-colors duration-300 group-hover:text-green-100 text-lg sm:text-xl md:text-2xl leading-tight">
                    Charting de la Semana con Jean Vizón
                  </h3>
                  <p className="font-sans text-gray-400 mb-6 text-[14px] transition-colors duration-300 group-hover:text-gray-300" style={{ fontSize: '14px' }}>Análisis técnico aplicado a lo que importa.  
                  Jean revisa los gráficos más relevantes de la semana y te muestra cómo leer el mercado con precisión. Identifica patrones, zonas clave y posibles escenarios para estar siempre un paso adelante.</p>
                  <p className="font-sans text-green-400 font-semibold text-lg transition-all duration-300 group-hover:text-green-300 group-hover:scale-105">
                    Lee los charts. Anticipa el mercado.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Resultados Expertos Section */}
      <section id="resultados" className="relative bg-[#141414] py-8 px-4 sm:px-6" aria-labelledby="resultados-headline">
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
            <h2 className="font-sans text-white mb-6 font-semibold text-[24px] sm:text-3xl lg:text-4xl" data-testid="resultados-headline">
              Resultados que hablan por sí solos
            </h2>
            <p className="font-sans text-gray-300 max-w-4xl mx-auto px-4 text-[14px]" style={{ fontSize: '16px' }} data-testid="resultados-description">
              Nuestros mentores no solo enseñan, operan en vivo y demuestran sus estrategias con resultados reales en el mercado.
            </p>
          </div>

          {/* Main Stats Card */}
          <div className="max-w-6xl mx-auto relative z-[90] px-2 sm:px-4">
            <div className="relative border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-2xl" style={{ 
              background: 'linear-gradient(135deg, rgba(27, 27, 27, 0.9) 0%, rgba(34, 34, 34, 0.8) 50%, rgba(27, 27, 27, 0.9) 100%)',
              backdropFilter: 'blur(10px)'
            }}>
              
              {/* Chart Container */}
              <div className="relative mb-2">
                {/* +150.8% Metric - Animated */}
                <div className="absolute top-0 right-2 sm:right-4 md:right-8 lg:right-12 z-10">
                  <AnimatedChartPercentage />
                </div>

                {/* Animated Chart */}
                <AnimatedLineChart />
              </div>

              {/* Chart Caption */}
              <p className="text-center text-gray-500 text-xs mt-1 mb-2">
                (Valor de la cuenta de Jorge Valet en 15 días)
              </p>

              {/* Stats Panel */}
              <div className="border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 bg-black/20 relative z-[200]">
                <div className="responsive-grid responsive-grid-2 gap-4 sm:gap-6 md:gap-8">
                  
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
                    <h3 className="text-white font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Win Rate</h3>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-green-400 mb-2" style={{ filter: 'drop-shadow(0 0 12px rgba(34, 197, 94, 0.4))' }}>
                      <AnimatedCounter target={83.333333} duration={2500} suffix="%" />
                    </div>
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
              className="absolute bg-cover bg-center bg-no-repeat pointer-events-none z-10"
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
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #141414 0%, #141414 60%, #0a0a0a 100%)' }}>
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/80 via-transparent to-[#0a0a0a]/80 pointer-events-none"></div>
        
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
            <h2 className="font-sans text-white mb-6 font-semibold text-[24px] sm:text-3xl lg:text-4xl" data-testid="student-results-headline">
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
      <section id="beneficios" className="relative bg-[#0a0a0a] py-16 px-4 sm:px-6">
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
            <h2 className="font-sans text-white mb-6 font-semibold text-[24px] sm:text-3xl lg:text-4xl" data-testid="features-headline">
              Características exclusivas de TradersHub
            </h2>
            <p className="font-sans text-gray-400 max-w-4xl mx-auto px-4 text-[14px]" data-testid="features-description">
              Desde sesiones en vivo hasta comunidad y análisis en tiempo real, todo está pensado para que aprendas practicando.
            </p>
          </div>

          {/* Features Card */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-2xl p-8 shadow-2xl border border-green-500/10 transition-all duration-500 hover:border-green-500/20 hover:shadow-[0_0_60px_rgba(34,197,94,0.2)] hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(to top, #1c1c1c 0%, #225539 100%)',
                boxShadow: '0 0 40px rgba(34, 197, 94, 0.1)'
              }}
              data-testid="features-card"
            >
              <div className="space-y-4">
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-1">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Sesiones en vivo de trading en tiempo real con los mentores de Abacus
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-2">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    7 a 9 sesiones semanales de práctica divididas en diferentes núcleos de especialización
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Live Day Trading con Jorge Valet: Aprende a leer y ejecutar operaciones intradía en vivo
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-4">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Opciones Avanzadas con Carlos Amec: Estrategias con opciones para rentabilizar tu portafolio
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-5">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Portafolio & Wealth con Ernesto Yunes: Construcción de portafolios diversificados a largo plazo
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-6">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Charting de la semana con Jean Vizón: Análisis técnico y estructuración de escenarios de mercado
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-7">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Acceso a grabaciones completas de todas las sesiones en español
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-8">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Metodología práctica: Aprendes mientras operas junto a traders expertos
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-9">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Acceso exclusivo a la comunidad de traders e inversionistas de Abacus
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-10">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Acompañamiento directo: Pregunta y recibe respuestas en vivo de los mentores
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-11">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Clases temáticas y actualizaciones constantes sobre tendencias y noticias del mercado
                  </p>
                </div>
                
                <div className="flex items-start space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300 hover:translate-x-2" data-testid="feature-12">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <p className="text-white text-[15px] leading-relaxed group-hover:text-green-50">
                    Entorno de trading seguro y guiado, ideal para aplicar estrategias sin estar solo
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call-to-Action Section */}
      <section className="relative bg-[#0a0a0a] py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/2 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-1 sm:px-2 md:px-4 lg:px-6">
          {/* CTA Card */}
          <div 
            className="relative group cursor-pointer transition-all duration-500 hover:scale-[1.02] rounded-xl sm:rounded-2xl overflow-hidden w-full"
            style={{
              backgroundImage: `url(${chart})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.3))',
              aspectRatio: '16/7.4',
              minHeight: '280px'
            }}
            data-testid="cta-card"
          >
            {/* Content overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-center text-left px-4 py-6 sm:pl-[15%] sm:pr-8 sm:py-8 md:pl-[15%] md:pr-12 md:py-10 lg:pl-[15%] lg:pr-16 lg:py-12">
              
              {/* Heading */}
              <h2 
                className="font-sans text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-full sm:max-w-2xl font-semibold group-hover:text-blue-50 transition-colors duration-300 leading-tight"
                data-testid="cta-heading"
              >
                Invierte con confianza, aprende en tiempo real
              </h2>
              
              {/* Subheading */}
              <p 
                className="font-sans text-gray-300 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base lg:text-lg max-w-full sm:max-w-xl lg:max-w-2xl group-hover:text-gray-200 transition-colors duration-300 leading-relaxed"
                data-testid="cta-subheading"
              >
                Accede al hub de trading más completo en español y transforma la forma en que entiendes e inviertes en la bolsa de valores.
              </p>
              
              {/* CTA Button */}
              <div className="flex justify-start w-full">
                <button 
                  className="group/button font-sans font-bold text-white px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-[14px] sm:rounded-[16px] md:rounded-[20px] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-sky-400/30 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-500 hover:shadow-[0_12px_40px_rgba(56,189,248,0.6)] text-xs sm:text-sm md:text-base lg:text-lg transform hover:-translate-y-1"
                  onClick={() => {
                    const pricingSection = document.getElementById('pricing');
                    if (pricingSection) {
                      pricingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%)',
                    boxShadow: '0 4px 20px rgba(56, 189, 248, 0.3)'
                  }}
                  data-testid="cta-button"
                >
                  <span className="group-hover/button:scale-105 transition-transform duration-200 inline-block">
                    Quiero mi acceso a TradersHub 🔥
                  </span>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="relative bg-[#0a0a0a] py-16 px-4 sm:px-6" aria-labelledby="faq-headline">
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
            <h2 className="font-sans text-white mb-6 font-semibold text-[24px] sm:text-3xl lg:text-4xl" data-testid="faq-headline">
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
                  className="w-full flex items-center justify-between py-6 text-left transition-all duration-300 hover:text-green-400 hover:pl-2"
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
                        // Close all other FAQs
                        for (let i = 2; i <= 6; i++) {
                          const otherContent = document.getElementById(`faq-content-${i}`);
                          const otherIcon = document.getElementById(`faq-icon-${i}`);
                          if (otherContent && otherIcon) {
                            otherContent.classList.add('hidden');
                            otherIcon.style.transform = 'rotate(0deg)';
                            otherIcon.textContent = '+';
                          }
                        }
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(45deg)';
                        icon.textContent = '+';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4 transition-all duration-300">
                    ¿Qué es exactamente TradersHub y en qué se diferencia de un curso tradicional?
                  </span>
                  <span 
                    id="faq-icon-1"
                    className="text-green-400 text-3xl font-light transition-all duration-300 flex-shrink-0 hover:scale-110"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-1" className="hidden pb-4 pl-0 animate-fade-in">
                  <p className="font-sans text-gray-400 text-[15px] leading-relaxed pl-2 pr-8">
                    TradersHub no es un curso. Es un espacio de entrenamiento práctico donde operas junto a nuestros mentores en sesiones en vivo. Aprendes observando cómo analizan, ejecutan y revisan sus operaciones reales, semana tras semana.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group" data-testid="faq-item-2">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-all duration-300 hover:text-green-400 hover:pl-2"
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
                        // Close all other FAQs
                        for (let i = 1; i <= 6; i++) {
                          if (i !== 2) {
                            const otherContent = document.getElementById(`faq-content-${i}`);
                            const otherIcon = document.getElementById(`faq-icon-${i}`);
                            if (otherContent && otherIcon) {
                              otherContent.classList.add('hidden');
                              otherIcon.style.transform = 'rotate(0deg)';
                              otherIcon.textContent = '+';
                            }
                          }
                        }
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(45deg)';
                        icon.textContent = '+';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4 transition-all duration-300">
                    ¿Necesito experiencia previa para entrar a TradersHub?
                  </span>
                  <span 
                    id="faq-icon-2"
                    className="text-green-400 text-3xl font-light transition-all duration-300 flex-shrink-0 hover:scale-110"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-2" className="hidden pb-4 pl-0 animate-fade-in">
                  <p className="font-sans text-gray-400 text-[15px] leading-relaxed pl-2 pr-8">
                    No. Puedes comenzar desde cero. Las sesiones están diseñadas para que incluso los principiantes entiendan el razonamiento detrás de cada trade y aprendan por observación, con explicaciones claras de parte de cada mentor.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group" data-testid="faq-item-3">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-all duration-300 hover:text-green-400 hover:pl-2"
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
                        // Close all other FAQs
                        for (let i = 1; i <= 6; i++) {
                          if (i !== 3) {
                            const otherContent = document.getElementById(`faq-content-${i}`);
                            const otherIcon = document.getElementById(`faq-icon-${i}`);
                            if (otherContent && otherIcon) {
                              otherContent.classList.add('hidden');
                              otherIcon.style.transform = 'rotate(0deg)';
                              otherIcon.textContent = '+';
                            }
                          }
                        }
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(45deg)';
                        icon.textContent = '+';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4 transition-all duration-300">
                    ¿Qué pasa si no puedo asistir a todas las sesiones en vivo?
                  </span>
                  <span 
                    id="faq-icon-3"
                    className="text-green-400 text-3xl font-light transition-all duration-300 flex-shrink-0 hover:scale-110"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-3" className="hidden pb-4 pl-0 animate-fade-in">
                  <p className="font-sans text-gray-400 text-[15px] leading-relaxed pl-2 pr-8">
                    Cada sesión queda grabada y disponible para ti. Puedes verla cuando quieras, las veces que necesites. Incluso muchos miembros prefieren revisar las grabaciones con calma y tomar notas detalladas.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 4 */}
              <div className="group" data-testid="faq-item-4">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-all duration-300 hover:text-green-400 hover:pl-2"
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
                        // Close all other FAQs
                        for (let i = 1; i <= 6; i++) {
                          if (i !== 4) {
                            const otherContent = document.getElementById(`faq-content-${i}`);
                            const otherIcon = document.getElementById(`faq-icon-${i}`);
                            if (otherContent && otherIcon) {
                              otherContent.classList.add('hidden');
                              otherIcon.style.transform = 'rotate(0deg)';
                              otherIcon.textContent = '+';
                            }
                          }
                        }
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(45deg)';
                        icon.textContent = '+';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4 transition-all duration-300">
                    ¿Qué incluye mi suscripción a TradersHub?
                  </span>
                  <span 
                    id="faq-icon-4"
                    className="text-green-400 text-3xl font-light transition-all duration-300 flex-shrink-0 hover:scale-110"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-4" className="hidden pb-4 pl-0 animate-fade-in">
                  <p className="font-sans text-gray-400 text-[15px] leading-relaxed pl-2 pr-8">
                    Acceso completo a todas las sesiones en vivo de los 5 núcleos, acceso a las grabaciones, frameworks operativos reales de los mentores, y una comunidad activa de traders con la que puedes interactuar, hacer preguntas y compartir ideas.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 5 */}
              <div className="group" data-testid="faq-item-5">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-all duration-300 hover:text-green-400 hover:pl-2"
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
                        // Close all other FAQs
                        for (let i = 1; i <= 6; i++) {
                          if (i !== 5) {
                            const otherContent = document.getElementById(`faq-content-${i}`);
                            const otherIcon = document.getElementById(`faq-icon-${i}`);
                            if (otherContent && otherIcon) {
                              otherContent.classList.add('hidden');
                              otherIcon.style.transform = 'rotate(0deg)';
                              otherIcon.textContent = '+';
                            }
                          }
                        }
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(45deg)';
                        icon.textContent = '+';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4 transition-all duration-300">
                    ¿Qué herramientas necesito para seguir las sesiones?
                  </span>
                  <span 
                    id="faq-icon-5"
                    className="text-green-400 text-3xl font-light transition-all duration-300 flex-shrink-0 hover:scale-110"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-5" className="hidden pb-4 pl-0 animate-fade-in">
                  <p className="font-sans text-gray-400 text-[15px] leading-relaxed pl-2 pr-8">
                    Solo necesitas conexión a internet. Las sesiones se transmiten por Zoom o dentro de la plataforma de Abacus. Los mentores usan plataformas como TradingView, Thinkorswim o Tastyworks, pero no necesitas tenerlas instaladas para aprender.
                  </p>
                </div>
                <div className="border-b border-white/10"></div>
              </div>

              {/* FAQ Item 6 */}
              <div className="group" data-testid="faq-item-6">
                <button 
                  className="w-full flex items-center justify-between py-6 text-left transition-all duration-300 hover:text-green-400 hover:pl-2"
                  onClick={() => {
                    const content = document.getElementById('faq-content-6');
                    const icon = document.getElementById('faq-icon-6');
                    if (content && icon) {
                      const isOpen = !content.classList.contains('hidden');
                      if (isOpen) {
                        content.classList.add('hidden');
                        icon.style.transform = 'rotate(0deg)';
                        icon.textContent = '+';
                      } else {
                        // Close all other FAQs
                        for (let i = 1; i <= 6; i++) {
                          if (i !== 6) {
                            const otherContent = document.getElementById(`faq-content-${i}`);
                            const otherIcon = document.getElementById(`faq-icon-${i}`);
                            if (otherContent && otherIcon) {
                              otherContent.classList.add('hidden');
                              otherIcon.style.transform = 'rotate(0deg)';
                              otherIcon.textContent = '+';
                            }
                          }
                        }
                        content.classList.remove('hidden');
                        icon.style.transform = 'rotate(45deg)';
                        icon.textContent = '+';
                      }
                    }
                  }}
                >
                  <span className="font-sans text-white text-lg font-medium pr-4 transition-all duration-300">
                    ¿Puedo cancelar mi suscripción cuando quiera?
                  </span>
                  <span 
                    id="faq-icon-6"
                    className="text-green-400 text-3xl font-light transition-all duration-300 flex-shrink-0 hover:scale-110"
                    style={{ transform: 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>
                <div id="faq-content-6" className="hidden pb-4 pl-0 animate-fade-in">
                  <p className="font-sans text-gray-400 text-[15px] leading-relaxed pl-2 pr-8">
                    Sí. No hay contratos ni ataduras. Puedes cancelar en cualquier momento desde tu perfil, sin penalizaciones ni cargos ocultos. Es una suscripción flexible, diseñada para que te unas cuando estés listo y salgas si lo necesitas.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="relative bg-[#0a0a0a] pt-16 pb-8 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <a href="https://www.abacusexchange.org/" target="_blank" rel="noopener noreferrer" data-testid="footer-logo-link">
                <img 
                  src="/tradershub-logo.png" 
                  alt="TradersHub Logo" 
                  className="h-8 w-auto hover:opacity-80 transition-opacity duration-200"
                  data-testid="footer-logo"
                />
              </a>
            </div>
            
            {/* Center - Navigation Columns */}
            <div className="flex-1 max-w-3xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                
                {/* Column 1 - Abacus */}
                <div data-testid="footer-column-abacus">
                  <h3 className="font-sans text-gray-500 text-sm font-bold mb-4">Abacus</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-home">Home</a></li>
                    <li><a href="https://youtube.com/c/abacusexchange" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-videos">Videos</a></li>
                    <li><a href="https://www.trustpilot.com/review/abacusexchange.org" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-reviews">Reviews</a></li>
                    <li><a href="https://www.youtube.com/@TheDailyWinnerPodcast" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-testimonials">Testimonials</a></li>
                  </ul>
                </div>
                
                {/* Column 2 - Aprende */}
                <div data-testid="footer-column-aprende">
                  <h3 className="font-sans text-gray-500 text-sm font-bold mb-4">Aprende</h3>
                  <ul className="space-y-2">
                    <li><a href="https://abacusexchange.org" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-experience">Abacus Experience</a></li>
                    <li><a href="https://campus.abacusexchange.org" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-campus">Campus Virtual</a></li>
                    <li><a href="https://marketopen.ai" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-market">Market Open</a></li>
                  </ul>
                </div>
                
                {/* Column 3 - Conoce más */}
                <div data-testid="footer-column-conoce">
                  <h3 className="font-sans text-gray-500 text-sm font-bold mb-4">Conoce más</h3>
                  <ul className="space-y-2">
                    <li><a href="https://abacusexchange.org/tradestation" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-tradestation">TradeStation</a></li>
                    <li><a href="https://abacusexchange.org/tradersync" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-tradersync">TraderSync</a></li>
                  </ul>
                </div>
                
                {/* Column 4 - Ayuda */}
                <div data-testid="footer-column-ayuda">
                  <h3 className="font-sans text-gray-500 text-sm font-bold mb-4">Ayuda</h3>
                  <ul className="space-y-2">
                    <li><a href="https://abacusexchange.org/calendly" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-contact">Contáctanos</a></li>
                    <li><a href="https://abacusexchange.org/referral" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-300 hover:text-white transition-colors duration-200 text-sm" data-testid="footer-link-refer">Refiere a un Amigo</a></li>
                  </ul>
                </div>
                
              </div>
            </div>
            
            {/* Right - Register Button */}
            <div className="flex-shrink-0">
              <button 
                className="font-sans w-full min-w-[160px] bg-gradient-to-b from-[#2ab46b] to-[#1b864e] text-white font-semibold py-3 px-6 rounded-[16px] hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 text-sm sm:text-base"
                data-testid="footer-register-button"
              >
                Regístrate
              </button>
            </div>
            
          </div>
          
          {/* Middle Section - Headquarters and Social */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 py-8 border-t border-gray-800">
            
            {/* Headquarters Info */}
            <div className="flex items-center gap-2">
              <span className="font-sans text-gray-500 text-sm">Headquarters:</span>
              <span className="font-sans text-gray-400 text-sm">Toronto, ON, Canada | Santo Domingo, Dominican Republic.</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="https://discord.gg/abacusexchange" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" data-testid="footer-discord">
                <SiDiscord className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/abacusexchange" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" data-testid="footer-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@abacusexchange" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" data-testid="footer-tiktok">
                <SiTiktok className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/c/abacusexchange" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" data-testid="footer-youtube">
                <SiYoutube className="w-5 h-5" />
              </a>
              <a href="https://wa.me/abacusexchange" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" data-testid="footer-whatsapp">
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://x.com/abacusexchange" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" data-testid="footer-x">
                <SiX className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/abacusexchange" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 transition-colors duration-200" data-testid="footer-instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-800">
            
            {/* Copyright */}
            <p className="font-sans text-gray-500 text-sm" data-testid="footer-copyright">
              © 2025 Abacus Exchange. All rights reserved.
            </p>
            
            {/* Privacy Links */}
            <div className="flex items-center gap-6">
              <a href="https://www.abacusexchange.org/politicas-de-privacidad" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" data-testid="footer-privacy">
                Política de Privacidad
              </a>
              <a href="https://www.abacusexchange.org/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="font-sans text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm" data-testid="footer-terms">
                Términos y Condiciones
              </a>
            </div>
            
          </div>
          
        </div>
      </footer>
    </div>
  );
}
