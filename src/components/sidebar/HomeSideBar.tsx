import { useState } from "react";
import style from "../../styles/SideBar.module.css";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import FolderComponentsIcon from "../icons/FolderComponentsIcon";
import FolderNodeIcon from "../icons/FolderNodeIcon";
import FolderPublicIcon from "../icons/FolderPublicIcon";
import GitIcon from "../icons/GitIcon";
import MoreIcon from "../icons/MoreIcon";
import NodejsIcon from "../icons/NodejsIcon";
import ReactIcon from "../icons/ReactIcon";
import ReadmeIcon from "../icons/ReadmeIcon";
import TsconfigIcon from "../icons/TsconfigIcon";
import MenuItem from "./MenuItem";
import PathItem from "./PathItem";
import FolderComponentsOpenIcon from "../icons/FolderComponentsOpenIcon";
import FolderSrcOpenIcon from "../icons/FolderSrcOpenIcon";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
            <MoreIcon className={style.icon_more} />
          </div>
          <MenuItem Arrow={ArrowDownIcon} title="PORTFOLIO" />
          <div className={style.sidebar_content}>
            <PathItem
              Arrow={ArrowRightIcon}
              Icon={FolderNodeIcon}
              title="node_modules"
              depth={false}
            />
            <PathItem
              Arrow={ArrowRightIcon}
              Icon={FolderPublicIcon}
              title="public"
              depth={false}
            />
            <PathItem
              Arrow={ArrowDownIcon}
              Icon={FolderSrcOpenIcon}
              title="src"
              depth={false}
            />
            <PathItem
              onClick={toggleClick}
              path="/"
              Arrow={open ? ArrowDownIcon : ArrowRightIcon}
              Icon={open ? FolderComponentsOpenIcon : FolderComponentsIcon}
              title={open ? "components" : "components(Click!!)"}
              depth={true}
            />
            {open && (
              <>
                <PathItem
                  path="/about"
                  Icon={ReactIcon}
                  title="제목제목"
                  deepDepth={true}
                />
                <PathItem
                  path="/skills"
                  Icon={ReactIcon}
                  title="제목제목2"
                  deepDepth={true}
                />
              </>
            )}
            <PathItem Icon={ReactIcon} title="App.tsx" depth={true} />
            <PathItem Icon={ReactIcon} title="index.tsx" depth={true} />
            <PathItem Icon={GitIcon} title=".gitignore" depth={false} />
            <PathItem
              Icon={NodejsIcon}
              title="package-lock.json"
              depth={false}
            />
            <PathItem Icon={NodejsIcon} title="package.json" depth={false} />
            <PathItem Icon={ReadmeIcon} title="README.md" depth={false} />
            <PathItem Icon={TsconfigIcon} title="tsconfig.json" depth={false} />
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
