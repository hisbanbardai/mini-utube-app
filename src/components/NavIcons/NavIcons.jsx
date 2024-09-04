import "./NavIcons.css";
import upload from "../../assets/upload.png";
import more from "../../assets/more.png";
import notification from "../../assets/notification.png";
import jack from "../../assets/jack.png";

export default function NavIcons() {
  return (
    <>
      <img src={upload} className="upload-image" alt="" />
      <img src={more} className="more-image" alt="" />
      <img src={notification} className="notification-image" alt="" />
      <img src={jack} className="jack-image" alt="" />
    </>
  );
}
