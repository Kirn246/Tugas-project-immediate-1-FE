import { create } from "zustand";
import littleMermaid from "../../assets/images/beranda/content/the-little-mermaid-vertical.png";
import dutyAfterSchool from "../../assets/images/beranda/content/Duty-After-School-vertical.png";
import bigHero6 from "../../assets/images/beranda/content/big-hero-vertical.png";
import allOfUsAreDead from "../../assets/images/beranda/content/all-of-us-are-dead-vertical.png";
import Missing from "../../assets/images/beranda/content/Missing-vertical.png";

const newRelease = create(() => ({
  movies: [
    {
      poster: littleMermaid,
      status: "",
      trending: "Top 10",
    },

    {
      poster: dutyAfterSchool,
      status: "Episode Baru",
      trending: "",
    },

    {
      poster: bigHero6,
      status: "",
      trending: "Top 10",
    },

    {
      poster: allOfUsAreDead,
      status: "Episode Baru",
      trending: "",
    },

    {
      poster: Missing,
      status: "",
      trending: "",
    },
  ],
}));

export default newRelease;
