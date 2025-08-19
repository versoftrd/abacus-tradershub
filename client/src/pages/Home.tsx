import Navbar from "@/components/Navbar";

export default function Home() {
  const handleJoinEmailList = () => {
    // TODO: Implement email subscription logic
    console.log("Join email list clicked");
  };

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
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight"
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

              {/* CTA Button */}
              <div className="pt-8">
                <button
                  onClick={handleJoinEmailList}
                  className="px-8 py-3 rounded-full bg-neon-green text-gray-900 font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-green/60 shadow-lg"
                  data-testid="button-join-email-list"
                >
                  Join our email list
                </button>
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
