import { useState } from "react";
import faqConfig from "../config/faq.json";

// ✅ Correct image imports
import leftImg from "../assets/left.png";
import rightImg from "../assets/right.png";

export default function FAQCTA() {
  const { title, description, faqs, cta  } = faqConfig;
  const [open, setOpen] = useState(0);

  // ✅ Map JSON paths to imported image files
  const imageMap = {
    "../assets/left.png": leftImg,
    "../assets/right.png": rightImg,
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-desktop px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="mx-auto w-full max-w-[1308px] flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-[129px]">
          {/* ================= FAQ Section ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Left content */}
            <div className="max-w-full lg:max-w-[540px] lg:mt-40">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                {title.text}{" "}
                <span className="text-primary">{title.highlight}</span>
                <br />
                {title.subtext}
              </h2>

              {/* Description – mobile */}
              <p className="mt-4 sm:mt-6 lg:mt-12 text-sm sm:text-base text-gray-500 leading-6 sm:leading-7 lg:hidden">
                {description.mobile.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              {/* Description – desktop */}
              <p className="mt-4 sm:mt-6 lg:mt-12 text-sm sm:text-base text-gray-500 leading-6 sm:leading-7 hidden lg:block">
                {description.desktop.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            {/* Right side: Accordion */}
            <div className="flex flex-col gap-3 sm:gap-4">
              {faqs.map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-xl border transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white border-transparent shadow"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : idx)}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-sm sm:text-base pr-2">
                        {item.question}
                      </span>
                      <span
                        className={`ml-4 inline-flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center flex-shrink-0 text-xl sm:text-2xl md:text-3xl font-normal ${
                          isOpen ? "text-white" : "text-gray-600"
                        }`}
                      >
                        {isOpen ? "—" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-3 sm:pb-4 -mt-2">
                        <p
                          className={`text-sm sm:text-base ${
                            isOpen ? "text-white/90" : "text-gray-600"
                          }`}
                        >
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= CTA Section ================= */}
          <section className="max-w-[75rem]  mx-auto p-5 pb-8 w-full">
            <div className="bg-primary rounded-3xl p-6 pt-20 pb-10 flex flex-col items-center relative overflow-hidden">
              {/* Decorative images */}
              <img
                src={imageMap[cta.backgroundImages.right]}
                alt="Right background shape"
                className="absolute bottom-0 right-0 w-60"
              />
              <img
                src={imageMap[cta.backgroundImages.left]}
                alt="Left background shape"
                className="absolute bottom-0 left-0 w-60 hidden sm:block"
              />

              {/* CTA Content */}
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-2xl font-semibold max-w-[22rem] text-center text-white mx-auto">
                {cta.title}
              </h2>
              <p className="text-sm text-white mt-4 max-w-[30rem] text-center mx-auto mb-5">
                {cta.description}
              </p>
              <button
                type="button"
                className="px-10 py-2 bg-white text-primary rounded-full font-medium hover:opacity-90 transition z-[0] shadow-blueSoft"
                onClick={() => (window.location.href = cta.button.href)}
              >
                {cta.button.text}
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
