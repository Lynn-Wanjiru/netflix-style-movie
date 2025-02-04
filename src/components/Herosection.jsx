import React, { useState } from "react";
import mufasa from "../assets/video/Mufasa.mp4";
import mufasaCover from "../assets/images/mufasacover.jpg";
import { FaInfoCircle, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import top10Icon from "../assets/images/top10Icon.jpg";

const Herosection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!isVideoPlaying && (
        <img
          src={mufasaCover}
          alt="Mufasa Cover"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {isVideoPlaying && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={mufasa}
          autoPlay
          muted={isMuted}
          onEnded={handleVideoEnd}
        />
      )}
      {/*overlay*/}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black-90"></div>
      {/*content*/}
      {!isVideoPlaying && (
        <div className="absolute top-20 left-10 md:top-32 md:left-16 text-white z-10 space-y-4">
          {/*movie title*/}
          <h1 className="text-5xl md:text-7xl font-bold ">Mufasa</h1>
          <p className="text-2xl font-serif font-bold md:text-2xl ">
            THE LION KING
          </p>

          {/*top 10 icon and text*/}
          <div className="flex items-center space-x-2">
            <img
              src={top10Icon}
              alt="Top 10 icon"
              className="w-8 h-8 object-contain"
            />
            <p>#1 in Movies Today</p>
          </div>

          {/*Movie description */}
          <p className="text-sm md:text-lg max-w-md md:text-left">
            Witness the untold story of Mufasa's rise to become the King of the
            Pride Rock. A tale of strength, resilience, and legacy.
          </p>
          {/*Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="flex items-center bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition">
              <FaPlay className="mr-2" />
              play
            </button>
            <button className="flex items-center bg-gray-600 py-2 px-6 rounded hover:bg-gray-600 transition">
              <FaInfoCircle className="mr-2" />
              More Info
            </button>
          </div>
        </div>
      )}

      {/*Mute/Unmute Button*/}
      <div className="absolute bottom-5 right-10 z-20 ">
        <button
          onClick={toggleMute}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          {isMuted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15}/>}
        </button>
      </div>
    </div>
  );
};
export default Herosection;
