import { Mail, Phone, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa6";

import Container from "../common/Container";
import Logo from "../../assets/images/TH_Logo_FA_LAB.svg";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#160A26] text-white">
      {/* Subtle decorative glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-violet-700/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] lg:gap-10 lg:py-20">

          {/* =====================================================
              BRAND
          ===================================================== */}
          <div>
            <img
              src={Logo}
              alt="THiNK Lab"
              className="h-14 w-auto object-contain"
            />

            <p className="mt-6 max-w-xs text-sm leading-6 text-violet-200/70">
              THiNK Lab is the testing and quality assurance arm of THiNK,
              helping organisations build safe, trustworthy and
              deployment-ready AI and software systems.
            </p>

            {/* Socials */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.facebook.com/TechInnovatorsNetwork/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-violet-300 transition-all duration-300 hover:bg-violet-600 hover:text-white"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://think.ke"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="THiNK Website"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-violet-300 transition-all duration-300 hover:bg-violet-600 hover:text-white"
              >
                <FaGlobe size={14} />
              </a>

              <a
                href="https://www.linkedin.com/company/think-ke/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-violet-300 transition-all duration-300 hover:bg-violet-600 hover:text-white"
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-violet-400">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="/assessments"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  Assessments
                </a>
              </li>

              <li>
                <a
                  href="/tools"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  Tools
                </a>
              </li>

              <li>
                <a
                  href="/standards"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  Standards Hub
                </a>
              </li>
            </ul>
          </div>

          {/* =====================================================
              SERVICES
          ===================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-violet-400">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/assessments"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  AI Assessments
                </a>
              </li>

              <li>
                <a
                  href="/assessments"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  AI Maturity
                </a>
              </li>

              <li>
                <a
                  href="/assessments"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  AI Security
                </a>
              </li>

              <li>
                <a
                  href="/assessments"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  Model Assessment
                </a>
              </li>

              <li>
                <a
                  href="/assessments"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  DPI Assessment
                </a>
              </li>
            </ul>
          </div>

          {/* =====================================================
              STANDARDS
          ===================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-violet-400">
              Standards
            </h3>

            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="/standards"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  ISO/IEC 42001
                </a>
              </li>

              <li>
                <a
                  href="/standards"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  ISO/IEC 27001
                </a>
              </li>

              <li>
                <a
                  href="/standards"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  ISO/IEC 23894
                </a>
              </li>

              <li>
                <a
                  href="/standards"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  KS 3007
                </a>
              </li>

              <li>
                <a
                  href="/standards"
                  className="text-violet-200/70 transition hover:text-white"
                >
                  Kenya DPA 2019
                </a>
              </li>
            </ul>
          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-violet-400">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-5 text-sm">

              <a
                href="mailto:lab@think.ke"
                className="flex items-start gap-3 text-violet-200/70 transition hover:text-white"
              >
                <Mail
                  size={17}
                  className="mt-0.5 flex-shrink-0 text-violet-400"
                />

                <span>lab@think.ke</span>
              </a>

              <a
                href="tel:+254759759311"
                className="flex items-start gap-3 text-violet-200/70 transition hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 flex-shrink-0 text-violet-400"
                />

                <span>+254 759 759311</span>
              </a>

            </div>

            <a
              href="/coming"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:gap-3 hover:text-violet-300"
            >
              Digital Hub
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-3 text-xs text-violet-200/50 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} THiNK Lab. All Rights Reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/ai-responsibility"
                className="transition hover:text-white"
              >
                AI Responsibility Policy
              </a>
            </div>

          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;