import ContactItem from "../components/contact/ContactItem";
import EmailForm from "../components/contact/EmailForm";
/* CSS import */
import style from "../styles/Contact.module.css";

function Contact() {
  return (
    <>
      <div className={style.wrap}>
        <div className={style.title_wrap}>
          <h1>📞 Contact with me! 📞</h1>
        </div>
        <div className={style.selector}>.socials {"{"}</div>
        <div className={style.declarationBlock}>
          <ContactItem prop="email" value="ninninanna3011@gmail.com" />
          <ContactItem
            prop="notion"
            value="ninninanna notion"
            path="https://ninninanna.notion.site/Welcome-sojin-s-portfolio-7458436b38054d0bb786faa3c197db36"
          />
          <ContactItem
            prop="github"
            value="NinNiNanNa"
            path="https://github.com/NinNiNanNa"
          />
          <ContactItem prop="kakaoTalk" value="wlswls3011" />
          <ContactItem prop="tel" value="010-9043-8348" />
        </div>
        <div className={style.selector}>{"}"}</div>
        <div className={style.emailForm}>
          <div className={style.title_wrap}>
            <h1>Send me an Email 📨</h1>
            <p>메일을 보내주시면, 평일 기준 3일 이내에 답장 드릴게요!😁</p>
          </div>
          <EmailForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
