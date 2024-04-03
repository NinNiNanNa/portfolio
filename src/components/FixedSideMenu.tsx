import React from "react";
import style from "../styles/FixedSideMenu.module.css";
import AccountIcon from "./icons/AccountIcon";
import ContactIcon from "./icons/ContactIcon";
import DocumentsIcon from "./icons/DocumentsIcon";
import ExtensionsIcon from "./icons/ExtensionsIcon";
import SettingIcon from "./icons/SettingIcon";
import SourceControlIcon from "./icons/SourceControlIcon";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

interface MenuItem {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
  title: string;
}

const topItems: MenuItem[] = [
  { Icon: DocumentsIcon, path: "/", title: "Home" },
  { Icon: ExtensionsIcon, path: "/projects", title: "Projects" },
  { Icon: ContactIcon, path: "/contact", title: "Contact" },
];

function FixedSideMenu() {
  return (
    <>
      <aside>
        <div>
          {topItems.map(({ Icon, path, title }, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? `${style.icon_wrap} ${style.active}`
                  : `${style.icon_wrap}`
              }
              data-tooltip-id="tooltip"
              data-tooltip-content={title}
            >
              <Tooltip id="tooltip" />
              <Icon className={style.icon} />
            </NavLink>
          ))}
          <Link
            to="https://github.com/NinNiNanNa"
            target="_blank"
            className={style.icon_wrap}
            data-tooltip-id="tooltip"
            data-tooltip-content="GitHub"
          >
            <Tooltip id="tooltip" />
            <SourceControlIcon className={style.icon} />
          </Link>
        </div>
        <div>
          <Link
            to="/about"
            className={style.icon_wrap}
            data-tooltip-id="tooltip"
            data-tooltip-content="About"
          >
            <Tooltip id="tooltip" />
            <AccountIcon className={style.icon} />
          </Link>
          <div
            className={style.icon_wrap}
            data-tooltip-id="tooltip"
            data-tooltip-content="Setting"
          >
            <Tooltip id="tooltip" border="1px solid #ccc" />
            <SettingIcon className={style.icon} />
          </div>
        </div>
      </aside>
    </>
  );
}

export default FixedSideMenu;
