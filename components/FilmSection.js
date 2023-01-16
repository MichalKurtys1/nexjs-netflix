import style from "../components/FilmSection.module.css";
import img2 from "../public/wallpaperflare.com_wallpaper.jpg";
import Image from "next/image";
import Slider from "../components/Slider";

const FilmSection = () => {
  return (
    <div className={style.container}>
      <div className={style.opacity}></div>
      <Image src={img2} alt="Logo" className={style.image} />
      <Slider category="Fantasy" />
      <Slider category="Sci-Fi" />
      <Slider category="Komedie" />
      <Slider category="Akcji" />
    </div>
  );
};

export default FilmSection;
