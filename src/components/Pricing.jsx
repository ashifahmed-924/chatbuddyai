import { Check, ChevronLeft, ChevronRight } from "react-feather";

import { useState, useEffect } from "react";

export default function Pricing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  const plans = [
    {
      title: "Starter",
      price: "Free",
      description: "Perfect for individuals getting started.",
      bgClass: "bg-pricing-bg-2",
      textClass: "text-black",
      lineColor: "border-gray-200",
      features: [
        "Basic AI chatbot functionality",
        "50 chatbot interactions",
        "Limited integrations (Website & Messenger)",
        "Pre-set chatbot templates",
        "Basic analytics dashboard",
        "Standard response speed",
        "Community support",
        "1 AI bot instance",
      ],
    },
    {
      title: "Business",
      price: "$25",
      description: "For professionals and growing teams.",
      bgClass: "bg-pricing-bg",
      textClass: "text-white",
      lineColor: "border-white",
      recommended: true,
      features: [
        "Unlimited chatbot interactions",
        "Omni-channel support",
        "AI-powered lead generation & automation",
        "Team collaboration & multi-agent support",
        "Priority AI response speed",
        "API access for custom integrations",
        "Dedicated account manager",
        "10 AI bot instances",
      ],
    },
    {
      title: "Enterprise",
      price: "$45",
      description: "For large organizations with advanced needs.",
      bgClass: "bg-pricing-bg-2",
      textClass: "text-black",
      lineColor: "border-gray-200",
      features: [
        "Unlimited chatbot interactions",
        "Omni-channel support",
        "AI-powered lead generation & automation",
        "Team collaboration & multi-agent support",
        "Priority AI response speed",
        "API access for custom integrations",
        "Dedicated account manager",
        "10 AI bot instances",
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const mobileLandscape = width >= 640 && width < 768 && height < width;

      setIsDesktop(width >= 1024);
      setIsMobileLandscape(mobileLandscape);

      if (width >= 1024) setSlidesToShow(plans.length);
      else if (width >= 768 || mobileLandscape) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + slidesToShow) % plans.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - slidesToShow + plans.length) % plans.length
    );
  };

  const visibleSlides = isDesktop
    ? plans
    : Array.from({ length: slidesToShow }, (_, i) =>
        plans[(currentSlide + i) % plans.length]
      );

  return (
    <section className="w-full py-20 bg-white" id="pricing">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[22rem] mx-auto pb-2">
          Flexible <span className="text-primary">Pricing</span> for Every Need!
        </h2>

        <p className="text-secondary text-sm mt-2">
          Choose the perfect plan for your needs—no hidden fees, just powerful AI
          at your fingertips!
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-16 relative max-w-6xl mx-auto flex items-center">
        {!isDesktop && (
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
          >
            <ChevronLeft />
          </button>
        )}

        <div
          className={`w-full px-4 gap-6 ${
            isDesktop
              ? "grid grid-cols-3"
              : "flex overflow-hidden justify-center"
          }`}
        >
          {visibleSlides.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col
                ${plan.bgClass} ${plan.textClass}
                ${
                  !isDesktop
                    ? slidesToShow === 2
                      ? "min-w-[45%]"
                      : "min-w-[85%]"
                    : ""
                }
              `}
              style={plan.recommended ? {
                background: "linear-gradient(207deg, #374151 -26.7%, #121928 113.45%)"
              } : {}}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold underline">
                  {plan.title}
                </h3>
                {plan.recommended && (
                  <span className="text-xs bg-primary px-3 py-1 rounded-full text-white">
                    Recommended
                  </span>
                )}
              </div>

              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold">
                  {plan.price === "Free" ? "Free" : plan.price}
                </span>
                {plan.price !== "Free" && (
                  <span className="text-gray-400">/month</span>
                )}
              </div>

              <div className={`w-full mt-2 border-b-2 border-dotted ${plan.lineColor}`} />

              <p className="text-sm mt-3">{plan.description}</p>

              <ul className="mt-5 space-y-2 text-xs">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2">
                    <Check size={16} className="text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-auto py-2 bg-primary text-white rounded-full font-medium hover:opacity-90 transition">
                Try 7-Days Free Trial
              </button>
            </div>
          ))}
        </div>

        {!isDesktop && (
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2 z-10"
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </section>
  );
}
