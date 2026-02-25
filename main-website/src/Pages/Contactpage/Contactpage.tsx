import { useState } from "react";
import type { FormEvent } from "react";
import { BackgroundCircles } from "@/Components/ui/circles";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "your-form-id";

type SubmitStatus = "idle" | "sending" | "success" | "error";

const Contactpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _replyto: email,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed: ${res.status}`);
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-gradient-to-b from-[#2a1f1f] from-20% to-[#4a3636]">
      <div className="w-full h-20 bg-[#2a1f1f]  relative">
        <BackgroundCircles className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-xl px-6 py-10 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-semibold mb-2">Contact Us</h1>
        <p className="text-white/90 text-center mb-8">
          Send us a message and we’ll get back to you as soon as we can.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5 bg-[#2a1f1f]/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#4a3636]/20"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-white font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-white font-medium">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:border-transparent resize-y min-h-[120px]"
              placeholder="Your message..."
            />
          </div>

          {status === "success" && (
            <p className="text-green-300 text-sm text-center">
              Thanks! Your message has been sent. We’ll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-300 text-sm text-center">
              {errorMessage || "Failed to send. Please try again or email us directly."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 rounded-xl py-3 px-6 bg-[#DC0000] text-white font-semibold hover:bg-[#b80000] focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:ring-offset-2 focus:ring-offset-[#2a1f1f] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        </form>

        

        <section className="mt-8 w-full flex flex-col items-center gap-5">
          <h2 className="text-white font-medium text-lg">Find us on</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <a
              href="https://www.facebook.com/groups/2052647094761701"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white/85 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:ring-offset-2 focus:ring-offset-[#2a1f1f] rounded-lg px-2 py-1"
              aria-label="Facebook"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-medium">Facebook</span>
            </a>
            
            <a
              href="https://www.instagram.com/sbgc_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-white/85 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#4a3636] focus:ring-offset-2 focus:ring-offset-[#2a1f1f] rounded-lg px-2 py-1"
              aria-label="Instagram"
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contactpage;
