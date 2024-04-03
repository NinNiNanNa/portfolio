import { Route, Routes } from "react-router-dom";
import FixedSideMenu from "./FixedSideMenu";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import SideBar from "./SideBar";

function Main() {
  return (
    <>
      <main>
        <FixedSideMenu />
        <SideBar />
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
