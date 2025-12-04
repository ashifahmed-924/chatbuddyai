import { FaStar } from "react-icons/fa";
import testimonialsConfig from "../config/testimonials.json";
import commonConfig from "../config/common.json";
import google from "../assets/google.png";
import google2 from "../assets/google_2.png";
import DP1 from "../assets/DP1.png";
import DP2 from "../assets/DP2.png";
import DP3 from "../assets/DP3.png";
import DP4 from "../assets/DP4.png";
import DP5 from "../assets/DP5.png";
import DP6 from "../assets/DP6.png";

export default function Testimonials() {
  const { title, ratings, testimonials } = testimonialsConfig;
  const starCount = commonConfig.starRating.value;
  const starColor = commonConfig.starRating.color;

  const imageMap = {
    "../assets/google.png": google,
    "../assets/google_2.png": google2,
    "../assets/DP1.png": DP1,
    "../assets/DP2.png": DP2,
    "../assets/DP3.png": DP3,
    "../assets/DP4.png": DP4,
    "../assets/DP5.png": DP5,
    "../assets/DP6.png": DP6,
  };

  const StarIcon = () => <FaStar className="inline-block" color={starColor} />;

  return (
    <section className="w-full bg-white mt-[-80px] sm:mt-[-90px] md:mt-[-105px]">
      <div className="mx-auto max-w-desktop px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
          {title.text}{" "}
          <span className="text-primary">{title.highlight}</span>
        </h2>

        {/* Rating badges */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {ratings.map((rating, index) => (
            <div key={index} className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow ring-1 ring-black/5 grid place-items-center flex-shrink-0">
                <img
                  src={imageMap[rating.icon]}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                  alt={rating.source}
                />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-gray-900 flex items-center gap-1 sm:gap-2">
                  {rating.rating}{" "}
                  <span className="inline-flex items-center gap-0.5">
                    {Array.from({ length: starCount }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </span>
                </p>
                <p className="text-gray-500">{rating.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="max-w-6xl mx-auto grid gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 sm:mt-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 sm:p-6 bg-customBg shadow-sm hover:shadow-md transition w-full max-w-[384px] mx-auto sm:mx-0 min-h-[179px]"
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                <img
                  src={imageMap[t.image]}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm sm:text-[16px] leading-tight text-gray-900">
                    {t.name}
                  </h4>
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-500 text-sm sm:text-base mb-3">
                {Array.from({ length: starCount }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Text */}
              <p className="text-secondary text-sm sm:text-[15px] leading-relaxed">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
