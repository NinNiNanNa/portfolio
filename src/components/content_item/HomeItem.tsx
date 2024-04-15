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
        <div className={style.icon_title_wrap}>
          <h3 className={style.icon_title}>{title}</h3>
        </div>
        <div className={style.icon_content_wrap}>
          <div className={style.icon_wrap}>
            <MenuIcon className={style.icon} />
          </div>
          {ThemeIcon ? (
            <>
              <div className={style.plus}>+</div>
              <div className={style.icon_wrap}>
                <ThemeIcon className={style.icon} />
                <span className={style.file}>{fileName}</span>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default HomeItem;
