import React from "react";
import SignUp from "../assets/SignUp.png"
import SignUp_2 from "../assets/SignUp_2.png"
import Hero_image from "../assets/Hero_image.png"
import feature2Config from "../content/feature2.json"

const Features2 = () => {
    const { title, steps } = feature2Config;
    const imageMap = {
        "/assets/SignUp.png": SignUp,
        "/assets/SignUp_2.png": SignUp_2,
        "/assets/Hero_image.png": Hero_image,
    };

    return (
        <section className="w-full flex justify-center py-16">
            <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-2xl text-center font-semibold max-w-[22rem] mx-auto pb-6">
                    {title.text} <span className="text-primary">{title.highlight}</span> {title.suffix}
                </h2>
                <div className="px-4 sm:px-6 lg:px-12 xl:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="p-6 flex flex-col items-start rounded-3xl" style={{ backgroundColor: '#545C660A' }}>
                    <span className="text-white text-xs bg-primary px-3 py-1 rounded-full mb-3">{steps[0].stepNumber}</span>
                    <p className="text-sm font-semibold mb-6">{steps[0].title}</p>
                    <p className="text-xs text-secondary mb-6">{steps[0].description}</p>
                    <img src={imageMap[steps[0].image]} className="w-full "/>
                </div>
                    <div className="pt-5 px-6 flex flex-col items-start rounded-3xl" style={{ backgroundColor: '#545C660A' }}>
                    <span className="text-white text-xs bg-primary px-3 py-1 rounded-full mb-3">{steps[1].stepNumber}</span>
                    <p className="text-sm font-semibold mb-6">{steps[1].title}</p>
                    <p className="text-xs text-secondary mb-6">{steps[1].description}</p>
                    <img src={imageMap[steps[1].image]} className="w-full"/>
                </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 rounded-3xl" style={{ backgroundColor: '#545C660A' }}>
                <div className="p-6 lg:px-6 lg:pt-10 flex flex-col items-start">
                    <span className="text-white text-xs bg-primary px-3 py-1 rounded-full mb-3">{steps[2].stepNumber}</span>
                    <p className="text-sm font-semibold mb-6">{steps[2].title}</p>
                    <p className="text-xs text-secondary mb-3">{steps[2].description}</p>
                    <button className="mt-4 text-xs bg-primary text-white px-5 py-2 rounded-full hover:bg-bt-hover shadow-blueSoft">
                    {steps[2].ctaButton.text}
                     </button>
                </div>
                <div className="flex justify-center items-center px-4 py-8 pb-12 lg:pt-6" >
                    <img src={imageMap[steps[2].image]} className="w-full "/>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Features2;