import "./Header.css";
import HambugerIcon from "../HamburgerIcon/HamburgerIcon";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import NavIcons from "../NavIcons/NavIcons";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <HambugerIcon />
        <Logo />
      </div>
      <div className="header-middle">
        <SearchBar />
      </div>
      <div className="header-right">
        <NavIcons />
      </div>
    </header>
  );
}
