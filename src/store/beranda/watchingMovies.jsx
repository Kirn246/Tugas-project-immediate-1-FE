import { create } from "zustand";
import dontLookUp from "../../assets/images/beranda/content/don't-look-up-horizontal.png";
import allofusaredead from "../../assets/images/beranda/content/all-of-us are-dead-horizontal.png";
import blueLock from "../../assets/images/beranda/content/blue-lock-horizontal.png";
import aManCalledOtto from "../../assets/images/beranda/content/a-man-called-otto-horizontal.png";

const watchingMovies = create(() => ({
  movies: [
    {
      title: "Don't Look Up",
      poster: dontLookUp,
      rating: "4.5/5",
    },

    {
      title: "All of Us Are Dead",
      poster: allofusaredead,
      rating: "4.2/5",
    },

    {
      title: "Blue Lock",
      poster: blueLock,
      rating: "4.6/5",
    },

    {
      title: "A Man Called Otto",
      poster: aManCalledOtto,
      rating: "4.6/5",
    },
  ],
}));

export default watchingMovies;
