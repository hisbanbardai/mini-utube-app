import "./SearchBar.css";
import search from "../../assets/search.png";

export default function SearchBar() {
  return (
    <>
      <input className="search-input" type="text" placeholder="Search" />
      <img className="search-image" src={search} alt="" />
    </>
  );
}
