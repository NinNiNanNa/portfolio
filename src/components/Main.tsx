import { Route, Routes } from "react-router-dom";
import SideBarIcon from "./SideBarIcon";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import SideBarText from "./SideBarText";

function Main() {
  return (
    <>
      <main>
        <SideBarIcon />
        <SideBarText />
        <div>
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
