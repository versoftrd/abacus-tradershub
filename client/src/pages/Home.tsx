import Navbar from "@/components/Navbar";
import EmailCta from "@/components/EmailCta";

export default function Home() {

  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />
      {/* Hero Section */}
      <main className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex min-h-screen items-center justify-center">
            <div className="text-center space-y-8">
              
              {/* Main Headline */}
              <h1 
                className="md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-[30px]"
                style={{ fontFamily: 'Blacklisted, sans-serif' }}
                data-testid="hero-headline"
              >
                APRENDE VIENDO, MEJORA HACIENDO, GANA ENTENDIENDO.
              </h1>

              {/* Subtitle */}
              <div className="space-y-2 max-w-3xl mx-auto">
                <p 
                  className="text-lg md:text-xl text-zinc-300 font-medium"
                  data-testid="hero-subtitle-1"
                >
                  Acceso directo a la sala de trading de Abacus: 7 a 9 sesiones en vivo
                </p>
                <p 
                  className="text-lg md:text-xl text-zinc-300 font-medium"
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

        {/* Background overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-page-bg/20 to-page-bg pointer-events-none"></div>
      </main>
    </div>
  );
}
