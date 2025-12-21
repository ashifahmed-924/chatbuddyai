import React from 'react'
import right from '../assets/right.png'
import left from '../assets/left.png'
import ctaConfig from '../content/cta.json'

const CTA = () => {
    const { title, description, ctaButton, images } = ctaConfig;
    const imageMap = {
        "/assets/right.png": right,
        "/assets/left.png": left,
    };

    return (
        <section className='w-full max-w-[60rem] lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-5 lg:p-8 xl:p-10 2xl:p-12 pb-8'>
            <div className='bg-primary rounded-3xl p-6 lg:pt-20 pt-14 pb-10 flex flex-col items-center relative'>
                   <img src={imageMap[images.right]} className="absolute bottom-0 right-0 w-40 lg:w-48 xl:w-56 2xl:w-64"
                         /> 
                    <img src={imageMap[images.left]} className='absolute bottom-0 left-0 w-40 lg:w-48 xl:w-56 2xl:w-64 hidden sm:block' />

                <h2 className='text-3xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold max-w-[22rem] lg:max-w-[24rem] xl:max-w-[28rem] 2xl:max-w-[32rem] text-center text-white mx-auto'>{title}</h2>
                <p className='text-sm lg:text-base xl:text-lg text-white mt-4 max-w-[30rem] lg:max-w-[32rem] xl:max-w-[36rem] 2xl:max-w-[40rem] text-center mx-auto mb-5'>{description}</p>
                 <button className="px-10 py-2 lg:px-12 lg:py-3 xl:px-14 xl:py-3 2xl:px-16 2xl:py-4 bg-white text-primary rounded-full font-medium hover:opacity-90 transition z-[0] shadow-blueSoft text-sm lg:text-base xl:text-lg">
                    {ctaButton.text}
                 </button>
            </div>
        </section>
    )
}

export default CTA;

