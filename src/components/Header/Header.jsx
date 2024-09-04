import "./Header.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import NavIcons from "../NavIcons/NavIcons";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <HamburgerIcon />
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
