import { FaCheck } from "react-icons/fa";
import pricingConfig from "../config/pricing.json";

export default function Pricing() {
  const { title, description, annualDiscount, plans } = pricingConfig;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-desktop px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-2">
        {/* Heading container */}
        <div className="mx-auto w-full max-w-[878px] text-center mb-8 sm:mb-12 space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
            {title.text}{" "}
            <span className="text-primary">{title.highlight}</span>{" "}
            {title.subtext}
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base px-4">
            {description}
          </p>
          <div className="flex items-center justify-center gap-2 pt-2">
            <span className="text-gray-800 font-medium text-xs sm:text-sm">
              {annualDiscount.text}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        {/* Cards container */}
        <div className="mx-auto w-full max-w-[1136px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-2xl shadow-sm border ${
                plan.highlight
                  ? "bg-pricing-dark text-white border-transparent"
                  : "bg-[#F9FAFB] text-gray-900 border-gray-100"
              } p-6 sm:p-8 w-full h-full`}
            >
              {/* Top */}
              <div>
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-base sm:text-lg font-semibold ${
                      plan.highlight ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.title}
                  </h3>
                  {plan.highlight && plan.badge && (
                    <span className="text-xs font-semibold bg-blue-500 text-white rounded-full px-2 sm:px-3 py-1">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h2
                  className={`text-3xl sm:text-4xl font-bold mt-3 ${
                    plan.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                  {plan.period && (
                    <span
                      className={`text-sm sm:text-base font-medium ${
                        plan.highlight ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {" "}
                      {plan.period}
                    </span>
                  )}
                </h2>
                <p
                  className={`mt-2 text-xs sm:text-sm ${
                    plan.highlight ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-4 sm:mt-5 space-y-2 text-xs sm:text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <FaCheck
                        color="#00B67A"
                        size={14}
                        className="mt-1 flex-shrink-0"
                      />
                      <span
                        className={`leading-relaxed ${
                          plan.highlight ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  className={`w-full rounded-full text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-3 ${
                    plan.highlight
                      ? "bg-white text-pricing-dark hover:bg-gray-100"
                      : "bg-pricing-blue text-white hover:bg-pricing-blue-dark"
                  } transition`}
                >
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
