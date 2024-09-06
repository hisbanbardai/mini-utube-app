import "./HamburgerIcon.css";
import menu from "../../assets/menu.png";
import { useSetRecoilState } from "recoil";
import { sidebarAtom } from "../../atoms/sidebarAtom";

export default function HamburgerIcon() {
  const setSidebar = useSetRecoilState(sidebarAtom);

  return (
    <img
      className="menu-image"
      src={menu}
      alt=""
      onClick={() => setSidebar((prev) => !prev)}
    />
  );
}
