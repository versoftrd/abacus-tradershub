import { useState } from "react";

export default function EmailCta() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Implement email subscription logic
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <div className="mx-auto w-full max-w-lg bg-[#1c1c1c] px-4 md:px-6 py-2 rounded-[24px]">
        <div className="flex items-center gap-3 h-14 md:h-16">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            aria-label="Email"
            required
            className="flex-1 bg-[#1b1b1b] text-zinc-100 placeholder:text-zinc-400 text-lg md:text-xl focus:outline-none"
            data-testid="input-email"
          />
          <button
            type="submit"
            className="rounded-[16px] bg-gradient-to-r from-[#98f7b0] via-[#79e39e] to-[#51b97f] px-6 md:px-8 py-3 md:py-4 text-white font-semibold shadow hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-300/60 transition-opacity duration-200 text-sm md:text-base whitespace-nowrap"
            data-testid="button-submit-email"
          >
            Join our email list
          </button>
        </div>
      </div>
    </form>
  );
}