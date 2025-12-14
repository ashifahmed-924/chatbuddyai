import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/Logo.png";

// Navbar component data
const navigationConfig = {
  logo: {
    src: "../assets/Logo.png",
    alt: "ChatBuddy Logo"
  },
  menuItems: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" }
  ],
  ctaButton: {
    text: "Try 7-Days Free Trial",
    href: "#"
  }
};

export default function Navbar() {
  const { logo, menuItems, ctaButton } = navigationConfig;
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-4 sm:py-5 md:py-6 bg-white relative z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt={logo.alt}
              className="h-8 sm:h-9 md:h-10"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 md:gap-8 text-primary text-sm font-medium">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="text-primary cursor-pointer hover:text-primary-dark transition-colors"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <button className="hidden lg:block text-xs sm:text-sm bg-primary text-white px-4 sm:px-5 py-2 rounded-full hover:bg-bt-hover transition-colors">
            {ctaButton.text}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="block lg:hidden text-gray-700 text-2xl sm:text-3xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <IoClose /> : <RxHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 w-64 sm:w-80 h-full bg-white shadow-lg p-6 flex flex-col gap-4 sm:gap-6 animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-800 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <button
              className="flex items-center justify-center text-xs sm:text-sm bg-primary text-white px-4 sm:px-5 py-2 rounded-full hover:bg-bt-hover transition-colors mt-2"
              onClick={() => setOpen(false)}
            >
              {ctaButton.text}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
