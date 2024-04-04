import { Link, useLocation } from "react-router-dom";
/* CSS import */
import style from "../../styles/TopBar.module.css";

interface IProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  CloseIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
  title: string;
}

function TopItem({ Icon, title, path, CloseIcon }: IProps) {
  const location = useLocation();
  return (
    <>
      <Link
        to={path}
        className={`${style.item_wrap} ${
          location.pathname === path && style.active
        }`}
      >
        <Icon className={style.icon_theme} />
        <h5>{title}</h5>
        <div className={style.icon_close_wrap}>
          <CloseIcon className={style.icon_close} />
        </div>
      </Link>
    </>
  );
}

export default TopItem;
