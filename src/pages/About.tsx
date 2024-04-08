/* img import */
import profile from "../assets/images/profile.png";
import Skills from "../components/content_item/Skills";
/* CSS import */
import style from "../styles/About.module.css";

function About() {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.content_wrap}>
          <div className={style.img}>
            <img src={profile} alt="profile" />
          </div>
          <div className={style.content}>
            <h1>
              안녕하세요! 👩‍💻
              <br />
              원하는 기능을 구현하기 위해 고군분투하는{" "}
              <span className={style.accent1}>프론트엔드 개발자, </span>
              <span className={style.accent2}>김소진</span>입니다.
            </h1>
            <p>
              새로운 기술에 대한 열정과 학습에 대한 열망이 저의 개발 여정을
              이끌고 있습니다.
              <br />
              사용자들에게 더 나은 경험을 제공하기 위해 노력하고 있으며
              현업에서의 경험을 바탕으로 효율적이고 유지보수가 용이한 코드를
              작성하는 것을 목표로 하고 있습니다.
              <br />
              <br />
              프론트엔드 개발은 끊임없는 도전과 발전의 과정이며, 저는 이
              과정에서 끊임없이 성장하고자 합니다.
              <br />
              더불어 빠르게 변화하는 트랜드에 맞춰 발전하는 프론트엔드 개발자가
              되겠습니다. 감사합니다 🙇‍♀️
            </p>
          </div>
        </div>
        <h2>4가지 키워드로 말하는 "나"</h2>
        <div className={style.content_wrap}></div>
        <h2>💼 Career</h2>
        <div className={style.text_wrap}>
          <h4>제이엔이시스텍 (2020.11 ~ 2023.04)</h4>
          <p>
            - HILSSimulation을 활용한 DigitalTwin의 구현과 smartfactory 운용
            (정직원/연구원)
          </p>
        </div>
        <h2>🎓 Education</h2>
        <div className={style.text_wrap}>
          <h4>더조은컴퓨터아카데미 - K디지털트레이닝 (2023.05 ~ 2023.12)</h4>
          <p>
            - 클라우드(AWS)환경에서 개발하는 풀스택(프론트엔드&백엔드)
            자바(JAVA) 웹&앱
          </p>
          <h4>더조은컴퓨터아카데미 - 국가기간전략훈련 (2020.04 ~ 2020.09)</h4>
          <p>- 웹디자인(웹퍼블리셔) 프론트엔드실무자양성_A</p>
          <h4>신구대학교 - IT미디어학과 웹IT전공 (2016.03 ~ 2020.02)</h4>
        </div>
        <h2>🛠 Tech Skills</h2>
        <div className={style.text_wrap}>
          <Skills />
        </div>
      </div>
    </>
  );
}

export default About;
