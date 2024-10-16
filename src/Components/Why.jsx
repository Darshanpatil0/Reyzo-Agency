import React from 'react';

const Why = () => {
  return (
    <div className="bg-zinc-700 why flex flex-col gap-14 px-12 lg:flex-row py-14 align" id='whyus'>
      {/* Image Section */}
      <div className="left-r">
        {/* Lazy loading using the loading attribute */}
        <img 
          src="/img/image1 (1).webp"  // Directly referencing the public folder
          alt="Image 1" 
          loading="lazy" 
        />
        <img 
          src="/img/image2 (1).webp" 
          alt="Image 2" 
          loading="lazy" 
        />
        <img 
          src="/img/image3 (1).webp" 
          alt="Image 3" 
          loading="lazy" 
        />
        <img 
          src="/img/image4 (1).webp" 
          alt="Image 4" 
          loading="lazy" 
        />
      </div>

      {/* Text Section */}
      <div className="lg:h-screen right-r py-8 w-full lg:w-[50%]">
        <h3 className='font-bold text-md pb-5 text-[#F48915]'>SOME REASONS</h3>
        <h1 className='text-4xl lg:text-5xl font-bold pb-1'>
          <span className='heading'>WHY</span> CHOOSE US?
        </h1>

        <div className="flex mt-4">
          <div className="flex flex-col space-y-4">
            {['MORE THEN 1200 PROJECT MADE', '20+ TEAM MEMBER', '750+ HAPPY CLINTS', 'IN YOUR BUGECT'].map((text, index) => (
              <div key={index} className="flex items-center">
                <img 
                  className='h-[40px] object-cover mr-4' 
                  src="/img/tick.png"  // Directly referencing the public folder
                  alt="Tick" 
                  loading="lazy"  // Lazy load applied here as well
                />
                <h2 className='text-[1rem] font-bold'>{text}</h2>
              </div>
            ))}
          </div>
        </div>

        <h3 className='pt-8 pb-4 text-[#88898A] text-md font-bold'> TO HELP YOUR</h3>
        <div className="flex gap-4">
          <img className='h-[40px] w-[40px]' src="/img/youtube.png" alt="Nike" loading="lazy" />
          <img className='h-[40px] w-[40px]' src="/img/brand2.webp" alt="Adidas" loading="lazy" />
          <img className='h-[40px] w-[40px]' src="/img/brand3.webp" alt="Nike" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Why;
