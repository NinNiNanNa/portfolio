import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
/* CSS import */
import style from "../../styles/Contact.module.css";
import { useRef } from "react";

interface IForm {
  name: string;
  email: string;
  title: string;
  message: string;
}

function EmailForm() {
  const form = useRef<HTMLFormElement>(null);
  const SERVICE_ID = `${process.env.REACT_APP_SERVICE_ID}`;
  const TEMPLATE_ID = `${process.env.REACT_APP_TEMPLATE_ID}`;
  const API_PUBLIC_KEY = `${process.env.REACT_APP_API_PUBLIC_KEY}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const sendEmail = (data: IForm) => {
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, {
        publicKey: API_PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log("이메일 보내기 성공: ", result.text);
          alert("이메일을 보냈습니다.");
          reset();
        },
        (error) => {
          console.error("이메일 보내기 실패: ", error.text);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
        <div className={style.form_wrap}>
          <div className={style.form_item}>
            <div className={style.input_wrap}>
              <label>이름 *</label>
              <input
                {...register("name", {
                  required: "이 입력란을 작성해주세요!",
                })}
                type="text"
                name="name"
              />
              <span>{errors.name?.message}</span>
            </div>
            <div className={style.input_wrap}>
              <label>이메일 *</label>
              <input
                {...register("email", {
                  required: "이 입력란을 작성해주세요!",
                  pattern: {
                    value:
                      /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
                    message: "이메일 형식을 다시 확인해주세요.",
                  },
                })}
                type="text"
                name="email"
              />
              <span>{errors.email?.message}</span>
            </div>
            <div className={style.input_wrap}>
              <label>제목 *</label>
              <input
                {...register("title", {
                  required: "이 입력란을 작성해주세요!",
                })}
                type="text"
                name="title"
              />
              <span>{errors.title?.message}</span>
            </div>
          </div>
          <div className={style.form_item}>
            <div className={style.input_wrap}>
              <label>메시지 *</label>
              <textarea
                {...register("message", {
                  required: "이 입력란을 작성해주세요!",
                })}
                name="message"
              />
              <span>{errors.message?.message}</span>
            </div>
          </div>
        </div>
        <button className={style.sendBtn}>Send Email</button>
      </form>
    </>
  );
}

export default EmailForm;
