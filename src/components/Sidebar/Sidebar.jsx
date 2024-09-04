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

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="categories-links">
        <div className="category-link">
          <img src={home} alt="" />
          <span>Home</span>
        </div>
        <div className="category-link">
          <img src={game} alt="" />
          <span>Gaming</span>
        </div>
        <div className="category-link">
          <img src={automobiles} alt="" />
          <span>Automobiles</span>
        </div>
        <div className="category-link">
          <img src={sports} alt="" />
          <span>Sports</span>
        </div>
        <div className="category-link">
          <img src={entertainment} alt="" />
          <span>Entertainment</span>
        </div>
        <div className="category-link">
          <img src={technology} alt="" />
          <span>Technology</span>
        </div>
        <div className="category-link">
          <img src={music} alt="" />
          <span>Music</span>
        </div>
        <div className="category-link">
          <img src={blogs} alt="" />
          <span>Blogs</span>
        </div>
        <div className="category-link">
          <img src={news} alt="" />
          <span>New</span>
        </div>
      </div>
      <div className="subscribed-channels-list">
        <h5 className="subscribed-heading"></h5>
        <div className="subscribed-channel">
          <img src={jack} alt="" />
          <span>PewDiePie</span>
        </div>
        <div className="subscribed-channel">
          <img src={simon} alt="" />
          <span>MrBeast</span>
        </div>
      </div>
    </aside>
  );
}
