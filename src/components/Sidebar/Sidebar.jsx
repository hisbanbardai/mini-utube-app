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

const categories = [
  {
    id: 0,
    name: "Home",
    image: home,
  },
  {
    id: 20,
    name: "Gaming",
    image: game,
  },
  {
    id: 2,
    name: "Automobiles",
    image: automobiles,
  },
  {
    id: 17,
    name: "Sports",
    image: sports,
  },
  {
    id: 24,
    name: "Entertainment",
    image: entertainment,
  },
  {
    id: 28,
    name: "Technology",
    image: technology,
  },
  {
    id: 10,
    name: "Music",
    image: music,
  },
  {
    id: 22,
    name: "Blogs",
    image: blogs,
  },
  {
    id: 25,
    name: "News",
    image: news,
  },
];

export default function Sidebar() {
  const sidebar = useRecoilValue(sidebarAtom);

  return (
    <aside className={`sidebar ${sidebar ? "" : "close"}`}>
      <div className="categories-links">
        {categories.map(({ id, image, name }) => (
          <CategoryLink key={id} image={image} name={name} id={id} />
        ))}
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
