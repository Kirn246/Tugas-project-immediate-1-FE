import { useRef } from "react";
import newRelease from "../../../store/beranda/newRelease";
import rightArrow from "../../../assets/images/beranda/icon/right-arrow.svg";
import leftArrow from "../../../assets/images/beranda/icon/left-arrow.svg";

const Realese = () => {
  const { movies } = newRelease();
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="relative p-2 text-white overflow-hidden">
      <div className="p-4">
        <h3 className="font-bold text-[20px] md:text-[32px] mt-5 md:mt-10 mb-4">
          Rilis Baru
        </h3>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="relative flex gap-5 md:gap-8 mb-4 w-full overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
        >
          {movies.map((movie, index) => (
            <div key={index} className="relative shrink-0">
              <div className="w-[95px] md:w-[234px]">
                <img
                  src={movie.poster}
                  alt="image"
                  className="rounded-lg"
                />
              </div>

              {movie.status && (
                <div className="absolute bg-info w-[44px] md:w-[104px] h-[14px] md:h-[28px] rounded-[12px] md:rounded-[24px] top-2 md:top-4 left-2 md:left-4 flex justify-center items-center">
                  <p className="text-[6px] md:text-[14px]">
                    {movie.status}
                  </p>
                </div>
              )}

              {movie.trending && (
                <div className="absolute bg-error w-[15px] md:w-[31px] h-[22px] md:h-[48px] rounded-tr-[2px] md:rounded-tr-[4px] rounded-bl-[2px] md:rounded-bl-[4px] top-0 right-1 md:right-3 flex justify-center items-center text-center">
                  <p className="text-[6px] md:text-[14px]">
                    {movie.trending}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CAROUSEL BUTTON - MOBILE & DESKTOP */}
      <div className="absolute flex justify-between items-center w-full top-[10rem] md:top-[18rem] px-2 pointer-events-none">
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

export default Realese;