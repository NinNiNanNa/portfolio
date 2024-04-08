/* react-icons import */
import { SiFlutter } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiApachetomcat } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
/* CSS import */
import style from "../../styles/About.module.css";

function Skills() {
  return (
    <>
      <h3>!-- Develop Skills</h3>
      <ul className={style.skills_wrap}>
        <li className={`${style.skills_item} ${style.skill}`}>
          <FaReact /> REACT
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <SiReactquery /> REACT-QUERY
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <SiRecoil /> RECOIL
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <SiStyledcomponents /> STYLED-COMPONENTS
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <SiTypescript /> TYPESCRIPT
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <SiJavascript /> JAVASCRIPT
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <FaHtml5 /> HTML5
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <FaCss3 /> CSS3
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <FaJava /> JAVA
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <SiSpringboot /> SPRING BOOT
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <FaJava /> JSP
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <SiApachetomcat /> APACHE TOMCAT
        </li>
        <li className={`${style.skills_item} ${style.skill}`}>
          <SiFlutter /> FLUTTER
        </li>
      </ul>

      <h3>!-- Infra & DB</h3>
      <ul className={style.skills_wrap}>
        <li className={`${style.skills_item} ${style.infra_db}`}>
          <FaAws /> AWS
        </li>
        <li className={`${style.skills_item} ${style.infra_db}`}>
          <SiOracle /> SQL Developer
        </li>
      </ul>

      <h3>!-- Tools</h3>
      <ul className={style.skills_wrap}>
        <li className={`${style.skills_item} ${style.tool}`}>
          <FaGithub /> Git
        </li>
        <li className={`${style.skills_item} ${style.tool}`}>
          <SiVisualstudiocode /> VSCode
        </li>
        <li className={`${style.skills_item} ${style.tool}`}>
          <SiEclipseide /> Eclipse
        </li>
        <li className={`${style.skills_item} ${style.tool}`}>
          <FaFigma /> Figma
        </li>
        <li className={`${style.skills_item} ${style.tool}`}>
          <SiAdobephotoshop /> Photoshop
        </li>
        <li className={`${style.skills_item} ${style.tool}`}>
          <SiAdobeillustrator /> illustrator
        </li>
      </ul>
    </>
  );
}

export default Skills;
