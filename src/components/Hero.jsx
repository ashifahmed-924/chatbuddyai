import { FaStar } from "react-icons/fa";
import heroConfig from "../config/hero.json";
import commonConfig from "../config/common.json";
import google from "../assets/google.png";
import google2 from "../assets/google_2.png";
import HeroImage from "../assets/Hero_image.png";

const Hero = () => {
  const { title, description, ctaButton, ratings, heroImage } = heroConfig;
  const starCount = commonConfig.starRating.value;
  const starColor = commonConfig.starRating.color;

  const imageMap = {
    "../assets/google.png": google,
    "../assets/google_2.png": google2,
    "../assets/Hero_image.png": HeroImage,
  };

  const StarIcon = () => (
    <FaStar className="inline-block" color={starColor} />
  );

  return (
    <section className="w-full pt-12 sm:pt-16 md:pt-20 pb-6 sm:pb-8 md:pb-10 bg-gradient-to-b from-white via-gradient to-gradient-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold max-w-[32rem] mx-auto -mt-2 sm:-mt-3 md:-mt-5">
          {title.text}{" "}
          <span className="text-primary">{title.highlight}</span>
        </h1>

        {/* Description */}
        <p className="text-xs sm:text-sm text-secondary mt-3 sm:mt-4 max-w-[43rem] mx-auto px-2">
          {description}
        </p>

        {/* CTA Button */}
        <button className="mt-2 sm:mt-3 md:mt-[10px] text-xs sm:text-sm bg-primary text-white px-4 sm:px-5 py-2 rounded-full hover:bg-bt-hover transition-colors">
          {ctaButton.text}
        </button>

        {/* Ratings */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10">
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

        {/* Hero Image */}
        <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center px-2">
          <img
            src={imageMap[heroImage.src]}
            alt={heroImage.alt}
            className="w-full max-w-4xl rounded-lg sm:rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
