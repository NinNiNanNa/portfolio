import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";
/* CSS import */
import style from "../../styles/SideBarIcon.module.css";

interface IProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
  title: string;
  target?: string;
}

function IconItem({ Icon, path, title, target }: IProps) {
  const location = useLocation();
  return (
    <>
      <Link
        to={path}
        target={target}
        className={`${style.icon_wrap} ${
          location.pathname === path && style.active
        }`}
        data-tooltip-id="tooltip"
        data-tooltip-content={title}
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
        <Icon className={style.icon} />
      </Link>
    </>
  );
}

export default IconItem;
