import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight } from "react-icons/fa";

const PROGRAMS = () => {
  const data = [
    {
      img: './img/editing.png',
      Headers: 'Video Editing',
      paragrafe:
        'Transform your raw footage into polished, engaging content with seamless cuts, smooth transitions, and expert editing techniques',
    },
    {
      img: './img/Design.png',
      Headers: 'Thumbnail Design',
      paragrafe:
        'Create eye-catching thumbnails that capture attention instantly, ensuring your content stands out across all platforms',
    },
    {
      img: './img/blunder.png',
      Headers: '3D Modeling',
      paragrafe:
        'Bring your ideas to life in 3D, from concept to fully rendered models, perfect for the any industry or projects',
    },
    {
      img: './img/VFX.png',
      className: 'VFX',
      Headers: 'CGI & VFX',
      paragrafe:
        'Add stunning computer-generated imagery and effects to elevate your video production to a cinematic level.',
    },
    {
    //  img: './img/website.png',
      Headers: 'WEBSITE CREATION',
      paragrafe:
        'Let us build a dynamic, responsive website  to your needs—perfect for showcasing your portfolio or business.',
    },
    {
    //  img: './img/logosevers.png',
      Headers: 'LOGO DESIGN (₹150)',
      paragrafe:
        'Get a personalized logo that reflects your brands identity and stands out in the market ',
    },
    {
    //  img: './img/banner.png',
      Headers: 'CUSTOM BANNERS (₹150)',
      paragrafe:
        'Design unique, professional banners for your social media that make a outstanding  impression.',
    },
    {
      // img: './img/ads.png',
    
      Headers: 'ADS',
      paragrafe:
        'Let us create effective ads that drive traffic and help your business grow.',
    },
  ];

  return (
    <div className="min-h-[70vh] programs w-full text-white bg-zinc-700" id="programs">
      {/* Section Title */}
      <div className="text48 text4 h-[10%] text-4xl md:text-5xl font-semibold gap-6 md:gap-20 pt-8 w-full flex items-center justify-center">
        <i>
          <p>EXPLORE OUR</p>
        </i>
        <i>
          <span>SERVICE</span>
        </i>
        <i> 
          <p>TO SHAPE YOU</p>
        </i>
      </div>

      {/* Program Cards */}
      <div className="card card24 p-4 max-w-full gap-4  flex mt-12  flex-wrap justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="cards2020 p-6  px-2 w-[240px]   md:w-[300px] bg-[#808080] rounded-lg shadow-lg flex flex-col items-center text-center"
          >
           
            <p className="text-xl mt-3 font-bold">{item.Headers}</p>
            <p className=" text-[18px]   mt-4 ">{item.paragrafe}</p>
            <div className="join mt-4    flex items-center gap-2">
              <Link to="Email" smooth={true} className="flex items-center gap-2 cursor-pointer">
                <p className="text-xl">Join Now</p>
                <img
                  className="h-[20px] w-[20px]   object-contain"
                  src="./img/rightArrow.png"
                  alt="Right Arrow"
                />
                
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PROGRAMS;
