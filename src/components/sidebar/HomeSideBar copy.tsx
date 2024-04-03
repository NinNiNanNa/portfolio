import { useState } from "react";
import style from "../../styles/SideBar.module.css";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import FolderNodeIcon from "../icons/FolderNodeIcon";
import FolderPublicIcon from "../icons/FolderPublicIcon";
import MoreIcon from "../icons/MoreIcon";
import MenuItem from "./MenuItem";
import PathItem from "./PathItem";

function HomeSideBar() {
  const [open, setOpen] = useState(false);
  const toggleClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className={style.sidebar_wrap}>
        <div>
          <div className={style.sidebar_header}>
            <h6>EXPLORER</h6>
            <MoreIcon className={style.icon_arrow} />
          </div>
          <div className={style.sidebar_main}>
            <MenuItem
              onClick={toggleClick}
              Arrow={open ? ArrowDownIcon : ArrowRightIcon}
              title="PORTFOLIO"
            />
            {open && (
              <div className={style.content}>
                <PathItem
                  Arrow={ArrowDownIcon}
                  Icon={FolderNodeIcon}
                  title="node_modules"
                />
                <PathItem Icon={FolderPublicIcon} title="" />
              </div>
            )}
          </div>
        </div>
        <div>
          <MenuItem Arrow={ArrowRightIcon} title="OUTLINE" />
          <MenuItem Arrow={ArrowRightIcon} title="TIMELINE" />
        </div>
      </div>
    </>
  );
}

export default HomeSideBar;
