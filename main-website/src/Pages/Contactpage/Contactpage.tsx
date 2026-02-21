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
      <div className="w-full h-20 bg-[#2a1f1f] relative">
        <BackgroundCircles className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-xl px-6 py-10 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-semibold mb-2">Contact Us</h1>
        <p className="text-white/90 text-center mb-8">
          Send us a message and we’ll get back to you as soon as we can.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-5 bg-[#2a1f1f]/80 rounded-2xl p-8 shadow-xl border border-[#4a3636]/20"
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

        <p className="mt-6 text-white/70 text-sm text-center">....</p>
      </div>
    </div>
  );
};

export default Contactpage;
