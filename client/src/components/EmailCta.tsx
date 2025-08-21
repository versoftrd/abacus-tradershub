import { useState } from "react";

export default function EmailCta() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Implement email subscription logic
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mt-[-16px] mb-[-16px] px-3 xs:px-4 sm:px-0">
      <div className="mx-auto w-full max-w-lg backdrop-blur-2xl bg-white/5 border border-white/5 px-2 xs:px-3 sm:px-4 md:px-6 py-1.5 xs:py-2 rounded-[20px] xs:rounded-[22px] sm:rounded-[24px]">
        <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 h-10 xs:h-11 sm:h-12 md:h-14">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            aria-label="Email"
            required
            className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-500 text-xs xs:text-sm sm:text-base md:text-lg focus:outline-none min-w-0"
            data-testid="input-email"
          />
          <button
            type="submit"
            className="rounded-[12px] xs:rounded-[14px] sm:rounded-[16px] bg-gradient-to-r from-[#98f7b0] via-[#79e39e] to-[#3a8a5f] px-2.5 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 xs:py-2 sm:py-2 md:py-3 text-white font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-300/60 transition-opacity duration-200 text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0"
            data-testid="button-submit-email"
          >
            Join our email list
          </button>
        </div>
      </div>
    </form>
  );
}