import { React, useState, useRef } from "react";
import Silverkurtafront from "../../assets/Images/pdp/silverkurtafront.png";
import Silverkurtaside from "../../assets/Images/pdp/silverkurtaside.png";
import kurta9 from "../../assets/Images/pdp/kurta9.webp";
import kurta10 from "../../assets/Images/pdp/kurta10.webp";
import productvideo from "../../assets/videos/productvideo.mp4";

const Silverkurta = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-7 sm:py-14 overflow-hidden space-y-20 lg:space-y-44">
        <div className="grid grid-cols-1 gap-10 lg:gap-0 md:grid-cols-2  bg-[#FAFAFA] ">
          <div className=" space-y-3 py-10 px-10 xl:px-20 flex flex-col justify-center ">
            <h1 className="font-nexabold text-base ">
              MAXIMISE THE USE OF TEXTILE
            </h1>
            <div className="   space-y-3 max-w-2xl">
              <h1 className="font-nexaReg text-[35px]  leading-none">
                Summer Collection
              </h1>

              <p className="font-roboto font-light text-xl ">
                Discover the handcrafted amalgamation of tradition art and
                age-old craftmanship with tendy styles and silhouettes. Discover
                the handcrafted amalgamation of tradition art and age-old
                craftmanship with tendy styles and silhouettes.
              </p>
            </div>
          </div>
          <div>
            <img
              src={kurta9}
              alt=""
              className="object-cover size-[400px] md:size-[500px] lg:size-[675px] object-top"
            />
          </div>
        </div>

        <div className=" grid grid-cols-1 gap-10 lg:gap-0 md:grid-cols-2  bg-[#FAFAFA]  ">
          <div className="space-y-3 flex flex-col justify-center  py-10 px-10 xl:px-20 order-first lg:order-last">
            <h1 className="font-nexabold text-base ">
              MAXIMISE THE USE OF TEXTILE
            </h1>
            <div className=" space-y-3 max-w-2xl">
              <h1 className="font-nexaReg text-[35px]  leading-none">
                Summer Collection
              </h1>

              <p className="font-light font-roboto text-xl ">
                Discover the handcrafted amalgamation of tradition art and
                age-old craftmanship with tendy styles and silhouettes. Discover
                the handcrafted amalgamation of tradition art and age-old
                craftmanship with tendy styles and silhouettes.
              </p>
            </div>
          </div>

          <div className="order-first">
            <img
              src={kurta10}
              alt=""
              className="object-cover size-[400px] md:size-[500px] lg:size-[675px] object-top"
            />
          </div>
        </div>
      </div>
      <div className="relative ">
        <video
          ref={videoRef}
          src={productvideo}
          autoPlay={true}
          muted
          controls={false}
          loop
          className=" h-full w-full object-cover"
        ></video>

        {/* Play/Pause Button */}
        <button
          className="absolute bottom-20 right-4 z-50 bg-black text-white px-4 py-2 rounded shadow-lg"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          )}
        </button>
      </div>
      {/* <img src={whitekurtapdp} alt="" className="w-full" /> */}
    </div>
  );
};

export default Silverkurta;
