import { create } from "zustand";
import theTomorrowWar from "../../assets/images/beranda/content/the-tomorrow-war-vertical.png";
import Quantumania from "../../assets/images/beranda/content/Ant-Man-and-the-Wasp-Quantumania-vertical.png";
import guardiansOfTheGalaxy from "../../assets/images/beranda/content/Guardian-Of-The-Galaxy-vertical.png";
import aManCalledOtto from "../../assets/images/beranda/content/a-man-called-otto-vertical.png";
import littleMermaid from "../../assets/images/beranda/content/the-little-mermaid-vertical.png";

const trendingMovies = create(() => ({
  movies: [
    {
      poster: theTomorrowWar,
      trending: "Top 10",
    },

    {
      poster: Quantumania,
      trending: "Top 10",
    },

    {
      poster: guardiansOfTheGalaxy,
      trending: "Top 10",
    },

    {
      poster: aManCalledOtto,
      trending: "Top 10",
    },

    {
      poster: littleMermaid,
      trending: "Top 10",
    },
  ],
}));

export default trendingMovies;
