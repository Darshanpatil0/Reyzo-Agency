import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

// import required modules
import { EffectCards, Navigation } from 'swiper/modules';

export default function App() {
  const videoRefs = useRef([]); // Ref array to store video elements
  const swiperRef = useRef(null); // Ref for the Swiper instance
  const [currentDescription, setCurrentDescription] = useState(''); // State to store current description

  const ProjectDara = [
    { 
      src: "./Project/semple1.mp4", 
      type: 'video',
      description: 'A first video it is edit showing our creative editing style.'
    },
    { 
      src: "./Project/sample2.mp4", 
      type: 'video',
      description: 'An first video edit with smooth transitions and great flow.'
    },
    { 
      src: "./Project/project1.jpg", 
      type: 'image',
      description: 'A YouTube thumbnail designed to grab attention quickly.'
    },
    {
      src: "./Project/logo.jpeg",
      type: 'image',
      description: 'A bold logo designed for strong brand identity.',
      style: { paddingLeft: '80px', paddingRight: '80px' } // Adjust padding here
    },
    {
      src: "./Project/logo2.jpg",
      type: 'image',
      description: 'A creative logo concept that stands out.',
      style: { paddingLeft: '80px', paddingRight: '80px' } // Adjust padding here
    },
    
    { 
      src: "./Project/logo1.webp", 
      type: 'image',
      description: 'A clean and modern logo with a professional touch.'
    },
    { 
      src: "./Project/banner1.png", 
      type: 'image',
      description: 'An engaging banner designed for maximum visibility.'
    },
    { 
      src: "./Project/banner2.png", 
      type: 'image',
      description: 'A vibrant banner to boost online presence.'
    },
  ];
  
  // Function to handle stopping the previous video and updating the description
  const handleSlideChange = () => {
    if (swiperRef.current) {
      const previousIndex = swiperRef.current.previousIndex;
      const currentIndex = swiperRef.current.activeIndex;

      // Pause all videos (if any)
      videoRefs.current.forEach((video, index) => {
        if (video && ProjectDara[index].type === 'video') {
          video.pause();
          video.currentTime = 0; // Reset to start
        }
      });

      // Optionally: Auto play the current video if it's a video
      if (videoRefs.current[currentIndex] && ProjectDara[currentIndex].type === 'video') {
        videoRefs.current[currentIndex].play();
      }

      // Update the current description
      setCurrentDescription(ProjectDara[currentIndex].description);
    }
  };

  // Automatically handle the first slide after the component mounts
  useEffect(() => {
    if (swiperRef.current) {
      // Ensure that the first slide's description is set and the video plays if it's a video
      setCurrentDescription(ProjectDara[0].description);
      if (ProjectDara[0].type === 'video' && videoRefs.current[0]) {
        videoRefs.current[0].play();
      }
    }
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <>
      <div className="mane h-screen w-full bg-zinc-700 relative" id='Project'>

        {/* Blur effect only for desktop */}
        <div className="blur-overlay absolute top-[10%] left-[16%] w-[400px] h-[400px] bg-gradient-to-r from-orange-500 to-yellow-500 opacity-40 rounded-full filter blur-3xl hidden md:block"></div>
        <div className="blur-overlay absolute top-[40%] left-[56%] w-[400px] h-[400px] bg-gradient-to-r from-orange-500 to-yellow-500 opacity-40 rounded-full filter blur-3xl hidden md:block"></div>

        <div className="text4 video-text h-[10%] text-3xl md:text-5xl font-semibold gap-5 md:gap-20 pt-10 md:pt-14 w-full flex items-center justify-center flex-col md:flex-row">
          <i>
            <p className="animate-fade-in">EXPLORE OUR</p>
          </i>
          <i>
            <span className="animate-fade-in animation-delay-1">Project</span>
          </i>
          <i>
            <p className="animate-fade-in animation-delay-2">TO SHARE YOU</p>
          </i>
        </div>

        <div className="contener h-full w-full flex items-center justify-center">
          <div className="div h-[88vh] w-full md:w-[87%] rounded-2xl bg-[#27272a6e] flex items-center justify-center mb-11">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Navigation]} // Include the Navigation module
              className="mySwiper projectvideo2 w-full h-[220px] md:w-[700px] md:h-[420px]"
              navigation={true} // Enable navigation buttons
              allowTouchMove={false} // Disable swiping/dragging
              loop={false}
              onSlideChange={handleSlideChange} // Handle slide change
              onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
            >
              {ProjectDara.map((project, index) => (
                <SwiperSlide key={index} className='flex cursor-default projectvideo items-center justify-center rounded-xl bg-zinc-900 p-6'>
                  {project.type === 'video' ? (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)} // Store each video element in the ref array
                      className='Project rounded-xl w-full h-full cursor-pointer'
                      controls
                      unmuted
                      src={project.src}
                    ></video>
                  ) : (
                    <img
                    src={project.src}
                    alt={`Project ${index + 1}`}
                    className="rounded-xl w-full h-full"
                    style={project.style} // Apply the padding style
                  />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Description at the bottom */}
        <div className="description bg-zinc-800   md:w-[87%] px-2 py-5 md:px-0 text-center ml-[6rem] -mt-[8rem]">
          <p className="text-white text-lg md:text-xl font-medium leading-6 justify-center">
            {currentDescription}
          </p>
        </div>
      </div>
    </>
  );
}
