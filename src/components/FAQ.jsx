import React, { useState } from "react";

import { Plus, Minus } from "react-feather";

const faqs = [
  {
    q: "Can I try ChatBuddy AI for free?",
    a: "Yes! We offer a 7-day free trial for all new users.",
  },
  {
    q: "What platforms does ChatBuddy AI support?",
    a: "ChatBuddy AI integrates with websites, social media, and major messaging apps.",
  },
  {
    q: "Can I customize the AI assistant to match my brand?",
    a: "Absolutely, you can personalize colors, tone, and behavior.",
  },
  {
    q: "How secure is my data with ChatBuddy AI?",
    a: "We use industry-standard encryption and never share your data.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full py-20">
      <div className="w-full max-w-6xl lg:max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto px-10 lg:px-20 xl:px-24 2xl:px-32 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
        
        <div className="flex flex-col text-left justify-center md:text-left h-full">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold max-w-[12rem] lg:max-w-[14rem] xl:max-w-[16rem] 2xl:max-w-[18rem]">
            Frequently <span className="text-primary text-2xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl">asked questions</span>
          </h2>
          <p className="text-sm lg:text-base xl:text-lg text-secondary mt-6 max-w-[26rem] lg:max-w-[28rem] xl:max-w-[32rem] 2xl:max-w-[36rem]">
            For any unanswered questions, reach out to our support team via contact us page or email. We'll respond with-in a day to assist you.
          </p>
        </div>
   
        <div className="space-y-5 lg:space-y-6 xl:space-y-7 2xl:space-y-8">
          <div className="bg-primary text-white rounded-lg p-4 lg:p-5 xl:p-6 2xl:p-8">
            <h3 className="font-semibold text-sm lg:text-base xl:text-lg 2xl:text-xl">What is ChatBuddy AI, and how does it work?</h3>
            <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg mt-4">ChatBuddy AI is an all-in-one AI-powered assistant designed to automate conversations, provide instant responses, and enhance productivity. It integrates with various platforms like websites, social media, and messaging apps to streamline customer support and task management.</p>
            
          </div>
          <div className="space-y-2 lg:space-y-3 xl:space-y-4">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border rounded-lg px-4 py-3 lg:px-5 lg:py-4 xl:px-6 xl:py-5 2xl:px-8 2xl:py-6 cursor-pointer hover:bg-gray-50 transition"
                onClick={() => toggle(i)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold text-black">{item.q}</p>
                  {openIndex === i ? (
                    <Minus size={18} className="text-gray-700 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
                  ) : (
                    <Plus size={18} className="text-gray-700 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
                  )}
                </div>
                {openIndex === i && (
                  <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg text-gray-600 mt-2 leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

