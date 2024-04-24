/* CSS import */
import style from "../styles/Loading.module.css";

function Loading() {
  return (
    <>
      <div className={style.loading_wrap}>
        <span className={style.words}>L</span>
        <span className={style.words}>O</span>
        <span className={style.words}>A</span>
        <span className={style.words}>D</span>
        <span className={style.words}>I</span>
        <span className={style.words}>N</span>
        <span className={style.words}>G</span>
      </div>
    </>
  );
}

export default Loading;
