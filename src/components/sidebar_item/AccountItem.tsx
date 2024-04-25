/* img import */
import profile from "../../assets/images/profile.png";
/* CSS import */
import style from "../../styles/AccountItem.module.css";

function AccountItem() {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.profile_wrap}>
          <div className={style.image_wrap}>
            <img src={profile} alt="profile" />
          </div>
          <ul className={style.profile}>
            <li>
              NAME :<span>김소진 (Kim So Jin)</span>
            </li>
            <li>
              BIRTH :<span>1997. 03. 11</span>
            </li>
            <li>
              ADDRESS :<span>경기도 성남시</span>
            </li>
            <li>
              MBTI :<span>ISTJ</span>
            </li>
            <li>#인내심 #책임감 #신중함</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default AccountItem;
