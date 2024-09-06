import "./Sidebar.css";
import home from "../../assets/home.png";
import game from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import technology from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import CategoryLink from "../CategoryLink/CategoryLink";
import SubscribedChannel from "../SubscribedChannel/SubscribedChannel";
import { useRecoilValue } from "recoil";
import { sidebarAtom } from "../../atoms/sidebarAtom";

export default function Sidebar() {
  const sidebar = useRecoilValue(sidebarAtom);

  return (
    <aside className={`sidebar ${sidebar ? "" : "close"}`}>
      <div className="categories-links">
        <CategoryLink image={home} name={"Home"} />
        <CategoryLink image={game} name={"Gaming"} />
        <CategoryLink image={automobiles} name={"Automobiles"} />
        <CategoryLink image={sports} name={"Sports"} />
        <CategoryLink image={entertainment} name={"Entertainment"} />
        <CategoryLink image={technology} name={"Technology"} />
        <CategoryLink image={music} name={"Music"} />
        <CategoryLink image={blogs} name={"Blogs"} />
        <CategoryLink image={news} name={"News"} />
      </div>
      <div className="border"></div>
      <div className="subscribed-channels-list">
        <h5 className="subscribed-heading">Subscribed</h5>
        <SubscribedChannel image={jack} name={"PewDiePie"} />
        <SubscribedChannel image={simon} name={"MrBeast"} />
        <SubscribedChannel image={tom} name={"Justin Bieber"} />
        <SubscribedChannel image={megan} name={"5-Minute Crafts"} />
        <SubscribedChannel image={cameron} name={"Nas Daily"} />
      </div>
    </aside>
  );
}
