import { ISkill } from "../../services/about";
/* CSS import */
import style from "../../styles/About.module.css";

interface IProps {
  data: ISkill[];
  title: string;
}

function Skills({ data, title }: IProps) {
  return (
    <>
      <h3 className={style.skill_title}>{title}</h3>
      <div className={style.skill_container}>
        <ul className={style.skill_wrap}>
          {data.map((item, idx) => (
            <li key={idx} className={style.skill_item}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${item.icon}`}
                alt={item.name}
              />
              <div>
                <h3>{item.name}</h3>
                <p>{item.explain}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Skills;
