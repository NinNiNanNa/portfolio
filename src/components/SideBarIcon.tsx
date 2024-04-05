import { Tooltip } from "react-tooltip";
import IconItem from "./sidebar_item/IconItem";
/* icon import */
import AccountIcon from "./icons/AccountIcon";
import ContactIcon from "./icons/ContactIcon";
import DocumentsIcon from "./icons/DocumentsIcon";
import ExtensionsIcon from "./icons/ExtensionsIcon";
import SettingIcon from "./icons/SettingIcon";
import SourceControlIcon from "./icons/SourceControlIcon";
/* CSS import */
import style from "../styles/SideBarIcon.module.css";
import InfoIcon from "./icons/InfoIcon";

function SideBarIcon() {
  return (
    <>
      <aside>
        <div>
          <IconItem Icon={DocumentsIcon} path="/" title="Home" />
          <IconItem Icon={InfoIcon} path="/about" title="About" />
          <IconItem Icon={ExtensionsIcon} path="/projects" title="Projects" />
          <IconItem Icon={ContactIcon} path="/contact" title="Contact" />
          <IconItem
            Icon={SourceControlIcon}
            path="https://github.com/NinNiNanNa"
            target="_blank"
            title="GitHub"
          />
        </div>
        <div>
          <div
            className={style.icon_wrap}
            data-tooltip-id="tooltip"
            data-tooltip-content="About"
          >
            <Tooltip id="tooltip" />
            <AccountIcon className={style.icon} />
          </div>
          <div
            className={style.icon_wrap}
            data-tooltip-id="tooltip"
            data-tooltip-content="Setting"
          >
            <Tooltip id="tooltip" border="1px solid var(--aside-text)" />
            <SettingIcon className={style.icon} />
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideBarIcon;
