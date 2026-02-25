import { useRef } from "react";
import watchingMovies from "../../../store/beranda/watchingMovies";
import Star from "../../../assets/images/beranda/icon/star.svg";
import rightArrow from "../../../assets/images/beranda/icon/right-arrow.svg";
import leftArrow from "../../../assets/images/beranda/icon/left-arrow.svg";

const Watching = () => {
  const { movies } = watchingMovies();
  const sliderRef = useRef(null);

  // Lebar 1 card (mobile full width)
  const cardWidth = 320;

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative p-2 text-white w-full overflow-hidden">
      <div className="p-4">
        <h3 className="font-bold text-[20px] md:text-[32px] mt-5 md:mt-0 mb-4">
          Melanjutkan Tonton Film
        </h3>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="relative flex gap-3 md:gap-8 mb-4 w-full
                     overflow-x-auto overflow-y-hidden scrollbar-hide
                     scroll-smooth snap-x snap-mandatory"
        >
          {movies.map((movie, index) => (
            <div
              key={index}
              className="relative shrink-0 w-full md:w-auto snap-start"
            >
              {/* TITLE */}
              <h6 className="absolute bottom-3 left-4 text-[14px] md:text-[18px] z-10">
                {movie.title}
              </h6>

              {/* IMAGE */}
              <div className="w-full md:w-[302px]">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full rounded-lg object-cover"
                />
              </div>

              {/* RATING */}
              <img
                src={Star}
                alt="rating"
                className="absolute bottom-3 right-14 z-10"
              />
              <p className="absolute bottom-3 right-4 z-10">
                {movie.rating}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL BUTTON */}
      <div className="absolute flex justify-between items-center w-full top-[10rem] md:top-[9rem] px-2 pointer-events-none">
        <button
          onClick={scrollLeft}
          className="bg-black/60 p-2 md:p-3 rounded-full hover:bg-black transition pointer-events-auto"
        >
          <img
            src={leftArrow}
            alt="left"
            className="w-5 md:w-7"
          />
        </button>

        <button
          onClick={scrollRight}
          className="bg-black/60 p-2 md:p-3 rounded-full hover:bg-black transition pointer-events-auto"
        >
          <img
            src={rightArrow}
            alt="right"
            className="w-5 md:w-7"
          />
        </button>
      </div>
    </section>
  );
};

export default Watching;