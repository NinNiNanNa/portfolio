import { useSetRecoilState } from "recoil";
import { menuState, themeState } from "../../atoms";
/* CSS import */
import style from "../../styles/SettingItem.module.css";

type Theme = "dark" | "light" | "blue" | "purple";

function SettingItem() {
  const setTheme = useSetRecoilState(themeState);
  const setOpen = useSetRecoilState(menuState);

  const themeHandler = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setOpen(false);
  };
  return (
    <>
      <div className={style.wrap}>
        <ul className={style.theme_wrap}>
          <li className={style.theme_item}>
            <div className={style.text} onClick={() => themeHandler("dark")}>
              Color Theme : Dark
            </div>
          </li>
          <li className={style.theme_item}>
            <div className={style.text} onClick={() => themeHandler("light")}>
              Color Theme : Light
            </div>
          </li>
          <li className={style.theme_item}>
            <div className={style.text} onClick={() => themeHandler("blue")}>
              Color Theme : Blue
            </div>
          </li>
          <li className={style.theme_item}>
            <div className={style.text} onClick={() => themeHandler("purple")}>
              Color Theme : Purple
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SettingItem;
