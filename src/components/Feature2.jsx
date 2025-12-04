import feature2Config from "../config/feature2.json";
import SignUp from "../assets/SignUp.png";
import SignUp2 from "../assets/SignUp_2.png";
import HeroImage from "../assets/Hero_image.png";

function StepPill({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-primary text-white font-normal text-xs w-[70px] sm:w-[80px] h-[26px] sm:h-[28px]">
      {children}
    </span>
  );
}

export default function Feature2() {
  const { title, steps } = feature2Config;
  const imageMap = {
    "../assets/SignUp.png": SignUp,
    "../assets/SignUp_2.png": SignUp2,
    "../assets/Hero_image.png": HeroImage,
  };

  return (
    <section className="w-full bg-white mt-8 sm:mt-12 md:mt-16 lg:mt-2">
      <div className="mx-auto max-w-desktop px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="mx-auto w-full max-w-[1200px]">
          {/* Heading */}
          <header className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold tracking-tight text-gray-900">
              {title.line1.before}{" "}
              <span className="text-primary">{title.line1.highlight}</span>{" "}
              {title.line1.after}
              <br />
              {title.line2}
            </h2>
          </header>

          {/* Steps Grid */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {/* Step 1 */}
            <article className="rounded-[24px] bg-backgroundbox border border-backboxbackground shadow-sm p-4 sm:p-6 md:p-8">
              <div className="flex items-start justify-between">
                <StepPill>Step {steps[0].step}</StepPill>
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold font-urbanist text-gray-900">
                {steps[0].title}
              </h3>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
                {steps[0].description}
              </p>

              <img
                src={imageMap[steps[0].image.src]}
                alt={steps[0].image.alt}
                className="w-full h-auto mt-4 sm:mt-6 rounded-xl drop-shadow"
                loading="lazy"
              />
            </article>

            {/* Step 2 */}
            <article className="rounded-[24px] bg-backgroundbox border border-backboxbackground shadow-sm p-4 sm:p-6 md:p-8">
              <div className="flex items-start justify-between">
                <StepPill>Step {steps[1].step}</StepPill>
              </div>

              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold font-urbanist text-gray-900">
                {steps[1].title}
              </h3>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
                {steps[1].description}
              </p>

              <div className="mt-4 sm:mt-6 rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 p-2 sm:p-3 md:p-4">
                <img
                  src={imageMap[steps[1].image.src]}
                  alt={steps[1].image.alt}
                  className="w-full h-auto rounded-xl drop-shadow"
                  loading="lazy"
                />
              </div>
            </article>

            {/* Step 3 - Full Width */}
            <article className="lg:col-span-2 rounded-[24px] bg-backgroundbox border border-backboxbackground shadow-sm p-4 sm:p-6 md:p-8">
              <div className="flex items-start justify-between">
                <StepPill>Step {steps[2].step}</StepPill>
              </div>

              <div className="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
                {/* Content – moved down */}
                <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-16">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-semibold font-urbanist text-gray-900">
                    {steps[2].title}
                  </h3>

                  <p className="mt-2 sm:mt-4 lg:mt-16 text-sm sm:text-base text-gray-600">
                    {steps[2].description}
                  </p>

                  <button
                  type="button"
                  className="inline-flex items-center justify-center w-full sm:w-[202px] px-4 sm:px-5 py-2 sm:py-3 
                  mt-14 sm:mt-16 lg:mt-20
                  rounded-full bg-primary text-white text-xs sm:text-sm font-medium shadow-blueSoft hover:bg-primary/90 transition"
                >
                  {steps[2].ctaButton.text}
                </button>

                </div>

                {/* Image */}
                <div className="rounded-2xl shadow-sm p-2 sm:p-3 md:p-4 mt-4 lg:mt-0">
                  <img
                    src={imageMap[steps[2].image.src]}
                    alt={steps[2].image.alt}
                    className="w-full h-auto rounded-xl drop-shadow"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
