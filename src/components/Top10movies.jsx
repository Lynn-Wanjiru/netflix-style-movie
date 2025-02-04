import React, { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Import movie images
import movie1 from "../assets/images/movie1.webp";
import movie2 from "../assets/images/movie2.webp";
import movie3 from "../assets/images/movie3.webp";
import movie4 from "../assets/images/movie4.webp";
import movie5 from "../assets/images/movie5.webp";
import movie6 from "../assets/images/movie6.webp";
import movie7 from "../assets/images/movie7.webp";
import movie8 from "../assets/images/movie8.webp";
import movie9 from "../assets/images/movie9.webp";
import movie10 from "../assets/images/movie10.webp";

// Movie Data
const movies = [
  { id: 1, title: "The Mountain Between Us", image: movie1 },
  { id: 2, title: "Disaster Holiday", image: movie2 },
  { id: 3, title: "Carry-On", image: movie3 },
  { id: 4, title: "Umjolo My Beginning My End!", image: movie4 },
  { id: 5, title: "The Six Triple Eight", image: movie5 },
  { id: 6, title: "The Wolf And The Lion", image: movie6 },
  { id: 7, title: "Dampyr", image: movie7 },
  { id: 8, title: "Umjolo Day Ones", image: movie8 },
  { id: 9, title: "Jurassic World", image: movie9 },
  { id: 10, title: "Bad Boys Ride or Die", image: movie10 },
];

const Top10Movies = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative px-6 py-10 bg-black">
      {/* Section Title */}
      <h2 className="text-white font-serif text-3xl font-bold mb-6">Trending Movies Today</h2>

      {/* Scroll Arrows */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition"
        onClick={scrollLeft}
      >
        <MdChevronLeft size={30} />
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden space-x-6 scroll-smooth scrollbar-hide snap-x snap-mandatory hide-scrollbar"
      >
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className="relative min-w-[180px] md:min-w-[220px] flex flex-col items-center"
          >
            {/* Movie Poster */}
            <div className="relative">
              <img
                src={movie.image}
                alt={movie.title}
                className="rounded-lg object-cover w-full h-56 md:h-72 relative z-10"
              />
            </div>

            {/* Background Number */}
            <span className="absolute  text-white text-[180px] font-bold opacity-20 z-0 leading-none">
              {index + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 transition"
        onClick={scrollRight}
      >
        <MdChevronRight size={30} />
      </button>
    </div>
  );
};

export default Top10Movies;
