import style from "../styles/Footer.module.css";
import BellIcon from "./icons/BellIcon";
import CircleCloseIcon from "./icons/CircleCloseIcon";
import ExclamationIcon from "./icons/ExclamationIcon";
import PrettierIcon from "./icons/PrettierIcon";
import ReactIcon from "./icons/ReactIcon";
import RemoteIcon from "./icons/RemoteIcon";
import SourceControlIcon from "./icons/SourceControlIcon";

function Footer() {
  return (
    <>
      <footer>
        <div className={style.btn_wrap}>
          <div className={style.remote_icon_wrap}>
            <RemoteIcon />
          </div>
          <a
            className={style.icon_wrap}
            href="https://github.com/NinNiNanNa"
            target="_blank"
          >
            <SourceControlIcon /> main
          </a>
          <div className={style.icon_wrap}>
            <CircleCloseIcon />
            &nbsp;0&nbsp;
            <ExclamationIcon />
            &nbsp;0
          </div>
        </div>
        <div className={style.btn_wrap}>
          <div className={style.icon_wrap}>
            © 2024 Kim So Jin - Powered by React.js
          </div>
          <div className={style.icon_wrap}>
            <PrettierIcon />
            &nbsp;Prettier
          </div>
          <div className={style.icon_wrap}>
            <BellIcon />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
