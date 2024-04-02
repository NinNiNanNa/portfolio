import style from "../styles/Header.module.css";
import VScodeIcon from "./icons/VScodeIcon";
import WindowCloseIcon from "./icons/WindowCloseIcon";
import WindowMaximizeIcon from "./icons/WindowMaximizeIcon";
import WindowMinimizeIcon from "./icons/WindowMinimizeIcon";

function Header() {
  return (
    <>
      <header>
        <div className={style.left_btn_wrap}>
          <VScodeIcon className={style.icon} />
          <ul className={style.menu_items}>
            <li className={style.menu_item}>File</li>
            <li className={style.menu_item}>Edit</li>
            <li className={style.menu_item}>Selection</li>
            <li className={style.menu_item}>View</li>
            <li className={style.menu_item}>Go</li>
            <li className={style.menu_item}>Run</li>
            <li className={style.menu_item}>Terminal</li>
            <li className={style.menu_item}>Help</li>
          </ul>
        </div>
        <div className={style.right_btn_wrap}>
          <div className={style.window_icon}>
            <WindowMinimizeIcon />
          </div>
          <div className={style.window_icon}>
            <WindowMaximizeIcon />
          </div>
          <div className={style.window_icon}>
            <WindowCloseIcon />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
