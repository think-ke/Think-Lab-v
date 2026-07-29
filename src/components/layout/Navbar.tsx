import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/images/TH_Logo_FA_LAB.svg";
import Container from "../common/Container";
import Button from "../common/Button";

import { navigation } from "../../constants/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
            ? "bg-[#2A084E]/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
          }`}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between">
            {/* Logo */}

            <a
              href="/"
              className="flex items-center"
            >
              <img
                src={Logo}
                alt="THINK LAB"
                className="h-45 w-auto object-contain"
              />
            </a>

            {/* Desktop Menu */}

            <ul className="hidden items-center gap-8 lg:flex">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group relative text-sm font-medium text-white/90 transition"
                  >
                    {item.label}

                    {item.label === "Services" && (
                      <ChevronDown
                        size={15}
                        className="ml-1 inline"
                      />
                    )}

                    {item.label === "Standards Hub" && (
                      <ChevronDown
                        size={15}
                        className="ml-1 inline"
                      />
                    )}

                    <span className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full bg-violet-300 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side */}

            <div className="hidden lg:flex">
              <Button
                variant="secondary"
                icon={false}
                className="border-white/30 bg-white text-violet-900 hover:bg-violet-100"
              >
                Digital Hub
              </Button>
            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white lg:hidden"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </Container>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-20 left-0 z-40 w-full bg-[#2A084E]/95 backdrop-blur-xl lg:hidden"
          >
            <Container>
              <div className="flex flex-col py-8">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-white/10 py-4 text-white"
                  >
                    {item.label}
                  </a>
                ))}

                <Button
                  variant="primary"
                  className="mt-6 w-full justify-center"
                >
                  Digital Hub
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;