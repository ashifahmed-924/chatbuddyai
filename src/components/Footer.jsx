import React from "react";
import OnlyLogo from "../assets/onlylogo.png";
import { FaXTwitter, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import footerConfig from "../content/footer.json";

// Map JSON string -> actual React Icon component
const iconMap = {
  FaXTwitter,
  FaTiktok,
  FaYoutube,
  RiInstagramFill,
  IoLogoFacebook,
  FaLinkedin,
};

export default function Footer() {
  const { logo, brandName, newsletter, copyright, socialLinks } = footerConfig;
  const year = new Date().getFullYear();
  const resolvedCopyright = copyright.replace("{year}", String(year));

  return (
    <footer className="bg-black py-8 sm:py-10 px-4 md:px-8 lg:px-20">
      {/* Main Content */}
      <div className="max-w-[60rem] mx-auto lg:mx-0 pb-8 sm:pb-10 px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-start">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 mb-8 md:mb-0 mr-auto md:mr-0">
            <img
              src={OnlyLogo}
              alt={logo.alt}
              className="h-10 sm:h-12"
            />
            <span className="text-white text-lg sm:text-xl font-semibold font-urbanist">
              {brandName}
            </span>
          </div>

          {/* Newsletter Section */}
          <div className="w-full max-w-xs text-right ml-auto md:ml-0 md:w-auto md:max-w-none">
            <p className="text-white text-lg sm:text-xl md:text-sm mb-4 ml-auto max-w-[16rem] md:max-w-[14rem] text-right">
              {newsletter.title} {newsletter.subtitle}
            </p>

            {/* Email Input Form */}
            <div className="relative flex items-center w-full max-w-xs mx-auto md:w-[14rem] md:mx-0">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="w-full py-2 pl-4 pr-24 rounded-full text-sm focus:outline-none"
              />
              <button className="absolute right-[0.3rem] py-1.5 px-4 bg-primary text-white text-xs font-medium rounded-full hover:bg-primary-dark transition">
                {newsletter.button}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[60rem] mx-auto lg:mx-0 pt-4 border-t border-customGray flex flex-col items-start md:flex-row md:justify-between md:items-center px-4 sm:px-6">
        {/* Copyright */}
        <p className="text-secondary text-xs pt-1 order-1 md:order-1 mb-3 md:mb-0">
          {resolvedCopyright}
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 pt-1 order-2 md:order-2 mb-4 md:mb-0 text-white/80">
          {socialLinks.map((social, index) => {
            const Icon = iconMap[social.icon];
            if (!Icon) return null; // Guard if JSON key doesn't match
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.name}
                className="hover:text-white transition cursor-pointer"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
