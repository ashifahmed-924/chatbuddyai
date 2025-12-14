import { MdOutlineBusinessCenter } from "react-icons/md";
import { RiCustomerService2Line, RiShoppingCartLine, RiHospitalLine, RiHealthBookLine, RiCodeAiFill } from "react-icons/ri";

const iconMap = {
  MdOutlineBusinessCenter,
  RiCustomerService2Line,
  RiShoppingCartLine,
  RiHospitalLine,
  RiHealthBookLine,
  RiCodeAiFill,
};

// Benefits component data
const benefitsConfig = {
  title: {
    text: "Who Can",
    highlight: "Benefit?",
    highlightColor: "primary"
  },
  items: [
    {
      icon: "MdOutlineBusinessCenter",
      title: "Business Owners",
      description: "Automate customer interactions & boost efficiency."
    },
    {
      icon: "RiCustomerService2Line",
      title: "Customer Support Teams",
      description: "Provide instant, AI-driven responses."
    },
    {
      icon: "RiShoppingCartLine",
      title: "E-commerce Brands",
      description: "Drive sales with AI-powered shopping assistance."
    },
    {
      icon: "RiHospitalLine",
      title: "Healthcare Providers",
      description: "AI for appointment scheduling & patient inquiries."
    },
    {
      icon: "RiHealthBookLine",
      title: "Educators & Coaches",
      description: "AI tutors & virtual assistants for students."
    },
    {
      icon: "RiCodeAiFill",
      title: "Intelligent code advisor",
      description: "Provides code optimization suggestions based on project context."
    }
  ]
};

export default function Benifits() {
  const { title, items } = benefitsConfig;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-desktop px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-2">
        <div className="mx-auto w-full max-w-[867px] flex flex-col items-center text-center gap-6 sm:gap-8 md:gap-10">
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
            {title.text}{" "}
            <span className="text-primary">{title.highlight}</span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full">
            {items.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-2 sm:px-4"
                >
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 mb-3 sm:mb-4">
                    <Icon size={28} color="#4078BF" className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary mt-2 max-w-[240px]">
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
