import { Tooltip } from "react-tooltip";
/* icon import */
import SearchIcon from "./icons/SearchIcon";
import VScodeIcon from "./icons/VScodeIcon";
import WindowCloseIcon from "./icons/WindowCloseIcon";
import WindowMaximizeIcon from "./icons/WindowMaximizeIcon";
import WindowMinimizeIcon from "./icons/WindowMinimizeIcon";
/* CSS import */
import style from "../styles/Header.module.css";

function Header() {
  return (
    <>
      <header className={style.header_wrap}>
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
        <div className={style.center_title_wrap}>
          <div
            className={style.title_wrap}
            data-tooltip-id="tooltip"
            data-tooltip-content="Visual Studio Code 스타일의 포트폴리오 입니다! 🙋"
          >
            <Tooltip
              id="tooltip"
              style={{
                backgroundColor: "var(--toolTip-bg)",
                color: "var(--text-01)",
                boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.1)",
              }}
              border="1px solid var(--toolTip-border)"
            />
            <SearchIcon className={style.icon_search} />
            portfolio
          </div>
        </div>
        <div className={style.right_btn_wrap}>
          <div className={style.icon_window_wrap}>
            <WindowMinimizeIcon className={style.icon_window} />
          </div>
          <div className={style.icon_window_wrap}>
            <WindowMaximizeIcon className={style.icon_window} />
          </div>
          <div className={style.icon_window_wrap}>
            <WindowCloseIcon className={style.icon_window} />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
