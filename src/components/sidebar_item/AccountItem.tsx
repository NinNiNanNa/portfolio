/* CSS import */
import style from "../../styles/AccountItem.module.css";

function AccountItem() {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.profile_wrap}>
          <div className={style.image_wrap}>
            <img
              src={`${process.env.PUBLIC_URL}/images/memogi02.png`}
              alt="profile"
            />
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
            <li>CERTIFICATE</li>
            <li>
              -<span>2018 . 04 GTQ(포토샵) 1급</span>
            </li>
            <li>
              -<span>2017 . 11 운전면허 2종</span>
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
