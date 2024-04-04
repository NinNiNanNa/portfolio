import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import SideBarText from "./SideBarText";
/* icon import */
import SideBarIcon from "./SideBarIcon";
/* CSS import */
import style from "../styles/Main.module.css";
import TopBar from "./TopBar";

function Main() {
  return (
    <>
      <main>
        <SideBarIcon />
        <SideBarText />
        <div className={style.content_wrap}>
          <TopBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default Main;
