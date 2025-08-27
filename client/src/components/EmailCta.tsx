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
        <div className="flex items-center justify-center h-12 xs:h-13 sm:h-14 md:h-16">
          <button
            type="button"
            onClick={handleClick}
            className="rounded-[12px] xs:rounded-[14px] sm:rounded-[16px] px-3 xs:px-3.5 sm:px-5 md:px-7 lg:px-10 py-2 xs:py-2.5 sm:py-2.5 md:py-4 text-white font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-sky-300/60 transition-opacity duration-200 text-[12px] xs:text-sm sm:text-base md:text-lg whitespace-nowrap flex-shrink-0"
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