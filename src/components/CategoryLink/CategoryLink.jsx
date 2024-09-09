import { useRecoilState } from "recoil";
import "./CategoryLink.css";
import { categoryIdAtom } from "../../atoms/categoryIdAtom";

export default function CategoryLink({ image, name, id }) {
  const [categoryId, setCategoryId] = useRecoilState(categoryIdAtom);

  return (
    <div
      className={`category-link ${categoryId === id ? "active" : ""}`}
      onClick={() => setCategoryId(id)}
    >
      <img src={image} alt="" />
      <span>{name}</span>
    </div>
  );
}
