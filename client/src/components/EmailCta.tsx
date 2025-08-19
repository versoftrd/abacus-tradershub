import { useState } from "react";

export default function EmailCta() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // TODO: Implement email subscription logic
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative mx-auto w-full max-w-3xl rounded-full border border-[#2a2a2a] bg-[#1e1e1e] px-5 md:px-6 py-2 focus-within:ring-2 focus-within:ring-gray-500/40">
        <div className="flex items-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            aria-label="Email"
            required
            className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-400 text-lg md:text-xl focus:outline-none"
            data-testid="input-email"
          />
          <button
            type="submit"
            className="rounded-full bg-[#3a3a3a] hover:bg-[#2f2f2f] px-6 md:px-8 py-3 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400/60 transition-colors duration-200"
            data-testid="button-submit-email"
          >
            Join our email list
          </button>
        </div>
      </div>
    </form>
  );
}