import { IList } from "../../services/about";
/* CSS import */
import style from "../../styles/About.module.css";

interface IProps {
  data: IList[];
  icon: string;
}

function Experience({ data, icon }: IProps) {
  return (
    <>
      <ul>
        {data.map((item, idx) => (
          <li key={idx} className={style.experience_item}>
            <span className={style.icon}>{icon}</span>
            <span className={style.period}>{item.period}</span>
            <h3 className={style.name}>
              {item.name} {item.position && <span>- {item.position}</span>}
            </h3>
            {item.explain && <p>{item.explain}</p>}
            {item.fullname && <p>- {item.fullname}</p>}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Experience;
