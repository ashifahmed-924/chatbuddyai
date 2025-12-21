import { useState } from "react";
import { RiImageAiLine, RiChatVoiceAiFill, RiSearchEyeLine } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import aiWriterImg from "../assets/Aiwriter.png";
import featuresConfig from "../content/feature.json";

const iconMap = {
  RiChatVoiceAiFill,
  LuPencilLine,
  CgFileDocument,
  RiSearchEyeLine,
  RiImageAiLine,
};

export default function Feature() {
  const { title, subtitle, features, featureImage } = featuresConfig;
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-desktop px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Heading - Responsive */}
        <h2 className="text-center font-urbanist font-semibold text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-snug">
          {/* Mobile version */}
          <span className="block sm:hidden">
            {title.mobile[0]}{" "}
            <span className="text-primary">{title.mobile[1]}</span>
          </span>
          <span className="block sm:hidden">{title.mobile[2]}</span>
          <span className="block sm:hidden">{title.mobile[3]}</span>

          {/* Desktop/Tablet version */}
          <span className="hidden sm:inline">
            {title.desktop.line1}{" "}
            <span className="text-primary">{title.desktop.line2}</span>{" "}
            {title.desktop.line3}
          </span>
          <br className="hidden sm:block" />
          <span className="hidden sm:inline">{title.desktop.line4}</span>
        </h2>

        {/* Feature chips */}
        <div className="w-full flex justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
          <ul
            className="
              inline-flex flex-wrap items-center justify-center
              gap-x-6 sm:gap-x-8 gap-y-3
              text-sm md:text-base

              md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-6
              md:place-items-center
              md:w-full md:max-w-[820px]
              
              lg:flex lg:flex-row lg:flex-nowrap lg:gap-x-6 lg:gap-y-0
              lg:max-w-none lg:w-auto
            "
          >
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              const isActive = hoveredIndex === index || (hoveredIndex === null && index === 0);
              const iconColor = isActive ? "#4078BF" : "#545C66";
              const textColor = isActive ? "#4078BF" : "#545C66";

              return (
                <li
                  key={feature.label}
                  className="
                    inline-flex items-center gap-2 bg-white px-3 py-1.5
                    cursor-pointer transition-colors
                    md:justify-center
                  "
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(0)}
                >
                  <Icon className="h-4 w-4 md:h-5 md:w-5" style={{ color: iconColor }} />
                  <span className="font-semibold" style={{ color: textColor }}>
                    {feature.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Subtitle */}
        <p className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center text-sm sm:text-base text-secondary px-4">
          {subtitle}
        </p>

        {/* Image Background Frame */}
        <div className="mx-auto mt-6 sm:mt-8 md:mt-10 w-full">
          <div className="mx-auto w-full max-w-[340px] sm:max-w-[360px] md:max-w-[650px] lg:max-w-[1200px] h-auto sm:h-[660px] md:h-[724px] lg:h-[724px] rounded-[25px] bg-[#dfe8f6]/90 flex items-center justify-center p-4 sm:p-6">
            <img
              src={aiWriterImg}
              alt={featureImage.alt}
              className="w-auto max-w-full h-auto max-h-[640px] drop-shadow-xl rounded-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
