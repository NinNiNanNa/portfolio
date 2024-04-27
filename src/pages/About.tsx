import data from "../services/about";
import Experience from "../components/about/Experience";
/* img import */
import profile from "../assets/images/profile.png";
/* CSS import */
import style from "../styles/About.module.css";
import Skills from "../components/about/Skills";

function About() {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.content_wrap}>
          <div className={style.img_wrap}>
            <img src={profile} alt="profile" />
          </div>
          <div className={style.content}>
            <h1 className={style.intro_title}>
              안녕하세요! 👩‍💻
              <br />
              원하는 기능을 구현하기 위해 고군분투하는{" "}
              <span className={style.accent1}>프론트엔드 개발자, </span>
              <span className={style.accent2}>김소진</span>입니다.
            </h1>
            <p className={style.intro_text}>
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

        <div className={style.animation_moveTop}>
          <h2 className={style.title}>MY KEYWORD</h2>
          <ul className={style.grid_wrap}>
            <li className={style.grid_item}>
              <div>
                <span>01</span>METICULOUS
              </div>
              <p>
                사소한 일에도 대충하는 법이 없어 작은 실수 하나까지도 신경쓰며
                최상의 결과를 위해 노력합니다.
              </p>
            </li>
            <li className={style.grid_item}>
              <div>
                <span>02</span>CURIOUS
              </div>
              <p>
                호기심이 강해 새로운 것에 두려움이 없으며 내 것으로 만들기 위해
                끊임없이 노력하는 성격의 보유자입니다.
              </p>
            </li>
            <li className={style.grid_item}>
              <div>
                <span>03</span>COMMUNICATE
              </div>
              <p>
                최상의 결과물을 위해 상대방의 의견을 항상 귀담아듣고, 작은
                피드백도 놓치지 않겠습니다.
              </p>
            </li>
            <li className={style.grid_item}>
              <div>
                <span>04</span>TENACITY
              </div>
              <p>
                하는 일에 몰입하면 끝을 봐야되는 성격을 가져 힘든 일에도
                포기하지 않고 좋은 결과를 위해 노력하겠습니다.
              </p>
            </li>
          </ul>
        </div>

        <h2 className={style.title}>CAREER</h2>
        <Experience data={data.career} icon="💼" />

        <h2 className={style.title}>EDUCATION</h2>
        <Experience data={data.education} icon="🎓" />

        <h2 className={style.title}>TECH STACK</h2>
        <Skills data={data.frontendSkills} title={"!-- FRONTEND SKILL"} />
        <Skills data={data.backendSkills} title={"!-- BACKEND SKILL"} />
        <Skills data={data.usingTool} title={"!-- USING TOOL"} />
      </div>
    </>
  );
}

export default About;
