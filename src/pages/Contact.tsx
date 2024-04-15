import ContactItem from "../components/content_item/ContactItem";
/* CSS import */
import style from "../styles/Contact.module.css";

function Contact() {
  return (
    <>
      <div className={style.wrap}>
        <h1 className={style.title}>📞 Contact with me! 📞</h1>
        <div className={style.selector}>.socials {"{"}</div>
        <div className={style.declarationBlock}>
          <ContactItem prop="email" value="kimsojin3011@gmail.com" />
          <ContactItem prop="notion" value="준비중" path="" />
          <ContactItem
            prop="github"
            value="NinNiNanNa"
            path="https://github.com/NinNiNanNa"
          />
          <ContactItem prop="kakaoTalk" value="wlswls3011" />
          <ContactItem prop="tel" value="010-9043-8348" />
        </div>
        <div className={style.selector}>{"}"}</div>
      </div>
    </>
  );
}

export default Contact;
