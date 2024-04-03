import { Outlet } from "react-router-dom";
import HomeSideBar from "../components/sidebar/HomeSideBar";
import style from "../styles/Home.module.css";

function Home() {
  return (
    <div className={style.wrap}>
      <HomeSideBar />
      <Outlet />
    </div>
  );
}

export default Home;
