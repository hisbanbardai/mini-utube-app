import Feed from "../../components/Feed/Feed";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
    </div>
  );
}
