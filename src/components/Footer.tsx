/* icon import */
import BellIcon from "./icons/BellIcon";
import CircleCloseIcon from "./icons/CircleCloseIcon";
import ExclamationIcon from "./icons/ExclamationIcon";
import PrettierIcon from "./icons/PrettierIcon";
import RemoteIcon from "./icons/RemoteIcon";
import SourceControlIcon from "./icons/SourceControlIcon";
/* CSS import */
import style from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={style.footer_wrap}>
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
          <div className={`${style.icon_wrap} ${style.delete}`}>
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
