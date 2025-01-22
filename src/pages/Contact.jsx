import { useState } from "react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnnqleoa");
  const [focusedInput, setFocusedInput] = useState(null);

  if (state.succeeded) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#16404D] to-[#0E2A33] flex flex-col items-center justify-center">
        <div className="w-full max-w-[280px] sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8 md:mb-12 text-[#DDA853] fredericka-the-great-regular drop-shadow-lg">
            Thank You!
          </h2>
          <div className="backdrop-blur-sm bg-[#16404D]/10 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
            <div className="text-center space-y-6">
              <p className="text-[#EDCA95] text-lg">
                Your message has been sent successfully. I'll get back to you
                soon!
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-[#DDA853] text-[#16404D] rounded-lg font-semibold hover:bg-[#E5B974] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#16404D] to-[#0E2A33] flex flex-col items-center justify-center">
      <div className="w-full max-w-[280px] sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8 md:mb-12 text-[#DDA853] fredericka-the-great-regular drop-shadow-lg">
          Contact Me
        </h1>

        <div className="backdrop-blur-sm bg-[#16404D]/10 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                required
                className={`peer w-full bg-[#16404D]/20 border-2 rounded-lg border-[#DDA853]/30 py-3 px-4 text-[#EDCA95] placeholder-transparent focus:outline-none focus:border-[#DDA853] transition-all duration-300 ${
                  focusedInput === "name" ? "border-[#DDA853]" : ""
                }`}
                placeholder="Your name"
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
              />
              <label
                htmlFor="name"
                className={`absolute left-4 -top-5 text-sm text-[#DDA853] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#E5B974]/70 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[#DDA853] peer-focus:text-sm`}
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                required
                className={`peer w-full bg-[#16404D]/20 border-2 rounded-lg border-[#DDA853]/30 py-3 px-4 text-[#EDCA95] placeholder-transparent focus:outline-none focus:border-[#DDA853] transition-all duration-300 ${
                  focusedInput === "email" ? "border-[#DDA853]" : ""
                }`}
                placeholder="Your email"
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
              />
              <label
                htmlFor="email"
                className={`absolute left-4 -top-5 text-sm text-[#DDA853] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#E5B974]/70 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[#DDA853] peer-focus:text-sm`}
              >
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className={`peer w-full bg-[#16404D]/20 border-2 border-[#DDA853]/30 rounded-lg py-3 px-4 text-[#EDCA95] placeholder-transparent focus:outline-none focus:border-[#DDA853] transition-all duration-300 ${
                  focusedInput === "message" ? "border-[#DDA853]" : ""
                }`}
                placeholder="Your message"
                onFocus={() => setFocusedInput("message")}
                onBlur={() => setFocusedInput(null)}
              />
              <label
                htmlFor="message"
                className={`absolute left-4 -top-5 text-sm text-[#DDA853] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#E5B974]/70 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[#DDA853] peer-focus:text-sm`}
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-6 py-3 bg-[#DDA853] text-[#16404D] rounded-lg font-semibold hover:bg-[#E5B974] transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
