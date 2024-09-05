import "./CategoryLink.css";

export default function CategoryLink({ image, name }) {
  return (
    <div className="category-link">
      <img src={image} alt="" />
      <span>{name}</span>
    </div>
  );
}
