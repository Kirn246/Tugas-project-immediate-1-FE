import Button from "../../atoms/Button/Button";
import ButtonXL from "../../atoms/Button/ButtonXL";
import Frame from "../../../assets/images/beranda/icon/18-only.svg";
import VolumeOFF from "../../../assets/images/beranda/icon/sound-disable.svg";

import Information from "../../../assets/images/beranda/icon/information-outline.svg";

const Hero = () => {
  return (
  <section className="relative text-white bg-hero h-[30vh] lg:h-[100vh] w-full overflow-hidden">
  <div className="hero-background mx-auto h-full">
    <div className="relative h-full flex items-end">
      <div className="p-6 w-full">
        <article className="mb-6 md:mb-10 w-full max-w-sm md:max-w-3xl">
          <h1 className="font-bold text-2xl md:text-5xl mb-5">
            Duty After School
          </h1>

          <p className="line-clamp-2 md:line-clamp-none text-xs md:text-lg text-justify md:text-left">
                Sebuah benda tak dikenal mengambil alih dunia. Dalam
                keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak
                tentara, termasuk siswa sekolah menengah. Mereka pun segera
                menjadi pejuang garis depan dalam perang.
          </p>
        </article>
<footer className="flex items-center justify-between w-full">

  
  <div className="flex items-center gap-2.5">
    <Button
      buttonColor="bg-info"
      buttonHover="hover:bg-infoHover"
      text="Mulai"
    />

    <ButtonXL
      buttonColor="bg-secondary"
      buttonHover="hover:bg-primary"
      text="Selengkapnya"
      src={Information}
    />

    <img
      src={Frame}
      alt="18+"
      className="w-[25px] md:w-[50px]"
    />
  </div>

  
  <div>
    <img
      src={VolumeOFF}
      alt="volume"
      className="w-[25px] md:w-[50px] cursor-pointer"
    />
  </div>

</footer>
      </div>
    </div>

  </div>
</section>
  );
};

export default Hero;
