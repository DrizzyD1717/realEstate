"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API (like Formspree or a custom route)
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left: Branding & Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter mb-8 italic font-serif">
              Let&apos;s talk.
            </h1>
            <p className="text-white/50 text-xl font-light max-w-md leading-relaxed">
              Whether you are looking to acquire your first architectural
              masterpiece or sell an existing estate, our team is here to guide
              you.
            </p>
          </div>

          <div className="mt-20 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">
                Office
              </p>
              <p className="text-lg font-light">
                101 Architecture Way, <br />
                Berlin, Germany
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">
                Direct
              </p>
              <p className="text-lg font-light">inquiry@luxepath.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right: The Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-zinc-900/50 p-8 md:p-12 border border-white/5 relative"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-200 transition-all"
                >
                  Send Inquiry
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="h-16 w-16 border border-white/20 rounded-full flex items-center justify-center mb-6">
                  <motion.div
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    className="text-white"
                  >
                    ✓
                  </motion.div>
                </div>
                <h3 className="text-2xl font-light mb-4">Inquiry Received</h3>
                <p className="text-white/50 font-light">
                  An agent will reach out to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-[10px] uppercase tracking-widest border-b border-white/20 pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
