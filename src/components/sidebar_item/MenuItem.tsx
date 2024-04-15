/* CSS import */
import style from "../../styles/SideBarText.module.css";

interface IProps {
  Arrow: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

function MenuItem({ onClick, Arrow, title }: IProps) {
  return (
    <div onClick={onClick} className={style.title_wrap}>
      <Arrow className={style.icon} />
      <h5>{title}</h5>
    </div>
  );
}

export default MenuItem;
