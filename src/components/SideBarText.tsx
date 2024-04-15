import { useState } from "react";
import MenuItem from "./sidebar_item/MenuItem";
import PathItem from "./sidebar_item/PathItem";
/* icon import */
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
import CssIcon from "./icons/CssIcon";
import FolderCssOpenIcon from "./icons/FolderCssOpenIcon";
import FolderCssIcon from "./icons/FolderCssIcon";
/* CSS import */
import style from "../styles/SideBarText.module.css";

function SideBarText() {
  const [openCom, setOpenCom] = useState(false);
  const [openStyle, setOpenStyle] = useState(false);
  const comToggle = () => {
    setOpenCom((prev) => !prev);
  };
  const styleToggle = () => {
    setOpenStyle((prev) => !prev);
  };
  return (
    <>
      <div className={style.sidebar_wrap}>
        <div>
          <div className={style.sidebar_header}>
            <h6 className={style.sidebar_title}>EXPLORER</h6>
            <MoreIcon className={style.icon_more} />
          </div>
          <MenuItem Arrow={ArrowDownIcon} title="PORTFOLIO" />
          <div>
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
              onClick={comToggle}
              Arrow={openCom ? ArrowDownIcon : ArrowRightIcon}
              Icon={openCom ? FolderComponentsOpenIcon : FolderComponentsIcon}
              title={openCom ? "components" : "Open! 👐"}
              depth={true}
            />
            {openCom && (
              <>
                <PathItem
                  path="/about"
                  Icon={ReactIcon}
                  title="About.tsx"
                  deepDepth={true}
                />
                <PathItem
                  path="/projects"
                  Icon={ReactIcon}
                  title="Projects.tsx"
                  deepDepth={true}
                />
              </>
            )}
            <PathItem
              onClick={styleToggle}
              Arrow={openStyle ? ArrowDownIcon : ArrowRightIcon}
              Icon={openStyle ? FolderCssOpenIcon : FolderCssIcon}
              title={openStyle ? "styles" : "Open! 👐"}
              depth={true}
            />
            {openStyle && (
              <>
                <PathItem
                  path="/contact"
                  Icon={CssIcon}
                  title="Contact.css"
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
