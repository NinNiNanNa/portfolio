import { NavLink } from "react-router-dom";
import style from "../../styles/SideBar.module.css";

interface IProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  path?: string;
  Arrow?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  depth?: boolean;
  deepDepth?: boolean;
}

function PathItem({
  onClick,
  path,
  Arrow,
  Icon,
  title,
  depth,
  deepDepth,
}: IProps) {
  return (
    <>
      {path ? (
        <NavLink
          to={path ? path : ""}
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : `${style.link}`
          }
        >
          <div
            onClick={onClick}
            className={`${style.content_wrap} ${depth ? style.depth : ""} ${
              deepDepth ? style.deep_depth : ""
            }`}
          >
            {Arrow ? <Arrow className={style.icon} /> : null}
            <Icon
              className={
                Arrow ? style.icon : `${style.icon} ${style.icon_arrow_none}`
              }
            />
            <span className={style.name}>{title}</span>
          </div>
        </NavLink>
      ) : (
        <div
          onClick={onClick}
          className={`${style.content_wrap} ${depth ? style.depth : ""} ${
            deepDepth ? style.deep_depth : ""
          }`}
        >
          {Arrow ? <Arrow className={style.icon} /> : null}
          <Icon
            className={
              Arrow ? style.icon : `${style.icon} ${style.icon_arrow_none}`
            }
          />
          <span className={style.name}>{title}</span>
        </div>
      )}
    </>
  );
}

export default PathItem;
