import { useState } from "react";
import style from "../styles/SideBarText.module.css";
import MoreIcon from "./icons/MoreIcon";
import ArrowDownIcon from "./icons/ArrowDownIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import FolderNodeIcon from "./icons/FolderNodeIcon";
import FolderPublicIcon from "./icons/FolderPublicIcon";
import FolderSrcOpenIcon from "./icons/FolderSrcOpenIcon";
import FolderComponentsOpenIcon from "./icons/FolderComponentsOpenIcon";
import FolderComponentsIcon from "./icons/FolderComponentsIcon";
import ReactIcon from "./icons/ReactIcon";
import NodejsIcon from "./icons/NodejsIcon";
import GitIcon from "./icons/GitIcon";
import ReadmeIcon from "./icons/ReadmeIcon";
import TsconfigIcon from "./icons/TsconfigIcon";

import MenuItem from "./sidebar_item/MenuItem";
import PathItem from "./sidebar_item/PathItem";

function SideBarText() {
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
                  path="/projects"
                  Icon={ReactIcon}
                  title="제목제목3"
                  deepDepth={true}
                />
                <PathItem
                  path="/contact"
                  Icon={ReactIcon}
                  title="제목제목4"
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

export default SideBarText;
