import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiCustomerService2Line, RiShoppingCartLine, RiHospitalLine, RiHealthBookLine, RiCodeAiFill } from "react-icons/ri";
import benefitsConfig from "../content/benefits.json";

const iconMap = {
  MdOutlineBusinessCenter,
  RiCustomerService2Line,
  RiShoppingCartLine,
  RiHospitalLine,
  RiHealthBookLine,
  RiCodeAiFill,
};

export default function Benifits() {
  const { title, items } = benefitsConfig;

  return (
    <section className="w-full bg-white mb-8 sm:mb-12 lg:mb-16">
      <div className="mx-auto max-w-desktop px-4 sm:px-6 lg:px-8 pt-2 pb-8 sm:pt-3 sm:pb-12 lg:pt-0 lg:pb-2">
        <div className="mx-auto w-full max-w-[867px] flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10 lg:gap-6">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-900">
            {title.text}{" "}
            <span className="text-primary">{title.highlight}</span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-6 w-full">
            {items.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-2 sm:px-4 lg:px-2"
                >
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 rounded-xl bg-primary/10 mb-3 sm:mb-4 lg:mb-3">
                    <Icon size={28} color="#4078BF" className="sm:w-8 sm:h-8 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-base font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-xs text-secondary mt-2 max-w-[240px] lg:max-w-[180px] lg:leading-tight lg:line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
