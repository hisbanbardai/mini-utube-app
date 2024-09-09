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
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { sidebarAtom } from "../../atoms/sidebarAtom";
import { categoryIdAtom } from "../../atoms/categoryIdAtom";
import { categoryBasedVideosAtomFamily } from "../../atoms/categoryBasedVideosAtomFamily";

export default function Feed() {
  const sidebar = useRecoilValue(sidebarAtom);
  const categoryId = useRecoilValue(categoryIdAtom);
  const data = useRecoilValueLoadable(
    categoryBasedVideosAtomFamily(categoryId)
  );

  return (
    data.state === "hasValue" && (
      <div className={`feed-container ${sidebar ? "" : "large"}`}>
        {data.contents.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    )
  );
}
