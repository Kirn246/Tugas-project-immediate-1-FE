import { create } from "zustand";
import Suzume from "../../assets/images/beranda/content/suzume-vertical.png";
import jurasicWorld from "../../assets/images/beranda/content/jurasic-world-vertical.png";
import Sonic from "../../assets/images/beranda/content/sonic-2-vertical.png";
import allOfUsAreDead from "../../assets/images/beranda/content/all-of-us-are-dead-vertical.png";
import bigHero6 from "../../assets/images/beranda/content/big-hero-vertical.png";

const topRating = create(() => ({
  movies: [
    {
      poster: Suzume,
      status: "Episode Baru",
    },

    {
      poster: jurasicWorld,
      status: "",
    },

    {
      poster: Sonic,
      status: "",
    },

    {
      poster: allOfUsAreDead,
      status: "",
    },

    {
      poster: bigHero6,
      status: "",
    },
  ],
}));

export default topRating;
