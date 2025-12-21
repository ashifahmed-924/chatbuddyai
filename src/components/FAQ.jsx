import React, { useState } from "react";
import { Plus, Minus } from "react-feather";
import faqConfig from "../content/faq.json";

export default function FAQ() {
  const { title, description, faqs } = faqConfig;
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    // If clicking the same question that's open, close it
    // Otherwise, open the clicked question (and close any previously open one)
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-4 lg:py-5">
      <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 lg:px-20 xl:px-24 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
        
        <div className="flex flex-col text-left justify-center md:text-left h-full">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold max-w-[12rem] lg:max-w-[14rem] xl:max-w-[16rem] 2xl:max-w-[18rem]">
            {title.text} <span className="text-primary text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl">{title.highlight}</span>
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-secondary mt-6 max-w-[26rem] lg:max-w-[28rem] xl:max-w-[32rem] 2xl:max-w-[36rem]">
            {description}
          </p>
        </div>
   
        <div className="space-y-2 lg:space-y-3 xl:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden transition-all duration-200 ${
                  isOpen 
                    ? "bg-primary text-white" 
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div
                  className="px-4 py-3 lg:px-5 lg:py-4 xl:px-6 xl:py-5 2xl:px-8 2xl:py-6 cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <div className="flex justify-between items-start gap-4">
                    <p className={`text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold flex-1 ${
                      isOpen ? "text-white" : "text-black"
                    }`}>
                      {item.q}
                    </p>
                    <div className="flex-shrink-0 mt-1">
                      {isOpen ? (
                        <Minus 
                          size={18} 
                          className="text-white lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" 
                        />
                      ) : (
                        <Plus 
                          size={18} 
                          className="text-gray-700 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" 
                        />
                      )}
                    </div>
                  </div>
                </div>
                {isOpen && (
                  <div className="px-4 pb-3 lg:px-5 lg:pb-4 xl:px-6 xl:pb-5 2xl:px-8 2xl:pb-6 pt-0">
                    <div className="pt-3 border-t border-white/30">
                      <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg text-white leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

