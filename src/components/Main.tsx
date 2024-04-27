import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import SideBarText from "./SideBarText";
import TopBar from "./TopBar";
/* icon import */
import SideBarIcon from "./SideBarIcon";
/* CSS import */
import style from "../styles/Main.module.css";

function Main() {
  return (
    <>
      <main className={style.main_wrap}>
        <SideBarIcon />
        <SideBarText />
        <div className={style.content_wrap}>
          <TopBar />

          <div className={style.wrap}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
