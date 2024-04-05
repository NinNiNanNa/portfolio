/* CSS import */
import style from "../../styles/Home.module.css";

interface IProps {
  MenuIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  ThemeIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  fileName?: string;
}

function HomeItem({ MenuIcon, title, ThemeIcon, fileName }: IProps) {
  return (
    <>
      <div className={style.list_item}>
        <h3>{title}</h3>
        <div className={style.icon_wrap}>
          <MenuIcon className={style.icon} />
        </div>
        {ThemeIcon ? (
          <>
            <div className={style.rest}>,</div>
            <div className={style.icon_wrap}>
              <ThemeIcon className={style.icon} />
              <span>{fileName}</span>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default HomeItem;
