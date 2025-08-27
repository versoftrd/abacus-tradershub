export default function EmailCta() {
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-[-16px] mb-[-16px] px-3 xs:px-4 sm:px-0">
      <div className="mx-auto w-fit backdrop-blur-2xl bg-white/5 border border-white/5 px-2 xs:px-2.5 sm:px-3 py-1 xs:py-1.5 rounded-[20px] xs:rounded-[22px] sm:rounded-[24px]">
        <div className="flex items-center justify-center h-10 xs:h-11 sm:h-12 md:h-14">
          <button
            type="button"
            onClick={handleClick}
            className="rounded-[12px] xs:rounded-[14px] sm:rounded-[16px] px-2.5 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 xs:py-2 sm:py-2 md:py-3 text-white font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-sky-300/60 transition-opacity duration-200 text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0"
            style={{
              background: 'linear-gradient(to top, #0943bb, #0759fb)'
            }}
            data-testid="button-submit-email"
          >
Suscríbete ahora
          </button>
        </div>
      </div>
    </div>
  );
}