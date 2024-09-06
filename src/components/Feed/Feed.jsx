import Card from "../Card/Card";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { useRecoilValue } from "recoil";
import { sidebarAtom } from "../../atoms/sidebarAtom";

export default function Feed() {
  const sidebar = useRecoilValue(sidebarAtom);

  return (
    <div className={`feed-container ${sidebar ? "" : "large"}`}>
      <Card image={thumbnail1} />
      <Card image={thumbnail2} />
      <Card image={thumbnail3} />
      <Card image={thumbnail4} />
      <Card image={thumbnail5} />
      <Card image={thumbnail6} />
      <Card image={thumbnail7} />
      <Card image={thumbnail8} />
      <Card image={thumbnail1} />
      <Card image={thumbnail2} />
      <Card image={thumbnail3} />
      <Card image={thumbnail4} />
      <Card image={thumbnail5} />
      <Card image={thumbnail6} />
      <Card image={thumbnail7} />
      <Card image={thumbnail8} />
    </div>
  );
}
