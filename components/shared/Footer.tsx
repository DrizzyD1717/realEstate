"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-light tracking-tighter italic mb-6 block"
            >
              LUXEPATH
            </Link>
            <p className="text-white/40 text-sm font-light max-w-sm leading-relaxed">
              Curating architectural masterpieces for the discerning collector.
              Based in Berlin, serving the global elite since 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Contact Info */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm font-light text-white/60 hover:text-white transition-colors tracking-wide"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-light text-white/60 hover:text-white transition-colors tracking-wide"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:inquiry@luxepath.com"
                  className="text-sm font-light text-white/60 hover:text-white transition-colors"
                >
                  Inquiry@luxepath.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/20">
            © {currentYear} LuxePath Estates. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/privacy"
              className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
