import { useState } from "react";
import { Link } from "react-router-dom";
import { IGetResult } from "../../services/projects";
/* react-icons import */
import NotionIcon from "../icons/NotionIcon";
import GithubIcon from "../icons/GithubIcon";
import LinkIcon from "../icons/LinkIcon";
import GDriveIcon from "../icons/GDriveIcon";
import DetailIcon from "../icons/DetailIcon";
/* CSS import */
import style from "../../styles/Projects.module.css";

const categories = [
  {
    category: "all",
  },
  {
    category: "🙍‍♀️ personal",
  },
  {
    category: "🏢 company",
  },
  {
    category: "common",
  },
  {
    category: "👩‍👩‍👧 team",
  },
];

interface IProps {
  projectData?: IGetResult;
}

function ProjectItem({ projectData }: IProps) {
  const [active, setActive] = useState("all");
  const [data, setData] = useState(projectData?.projects);
  const activeCategory = (btn: string) => {
    setActive(btn);
    if (btn === "all") {
      setData(projectData?.projects);
      return;
    }
    const filteredData = projectData?.projects.filter(
      (item) => item.type === btn
    );
    setData(filteredData);
  };
  return (
    <>
      <ul className={style.category_wrap}>
        {categories.map((item, idx) => (
          <li
            key={idx}
            className={active === item.category ? style.active : ""}
            onClick={() => activeCategory(item.category)}
          >
            {item.category}
          </li>
        ))}
      </ul>
      <div className={style.items_wrap}>
        {data?.map((item, idx) => (
          <div key={idx} className={style.item_wrap}>
            <div className={style.thumnaile}>
              <img src={item.img} alt={item.name} />
              <div className={style.button_wrap}>
                {item.source_code && (
                  <Link to={item.source_code} target="_blank">
                    <GithubIcon />
                  </Link>
                )}
                {item.detail_notion && (
                  <Link to={item.detail_notion} target="_blank">
                    <NotionIcon />
                  </Link>
                )}
                {item.detail_url && (
                  <Link to={item.detail_url} target="_blank">
                    <DetailIcon />
                  </Link>
                )}
                {item.drive_url && (
                  <Link to={item.drive_url} target="_blank">
                    <GDriveIcon />
                  </Link>
                )}
                {item.distribute && (
                  <Link to={item.distribute} target="_blank">
                    <LinkIcon />
                  </Link>
                )}
              </div>
            </div>
            <div className={style.content}>
              <div className={style.title_wrap}>
                <h3>{item.name}</h3>
                <h4>{item.created_year}</h4>
              </div>
              <p>{item.description}</p>
              {item.tags.map((tag, idx) => (
                <span key={idx}>#{tag} </span>
              ))}
            </div>
            <div className={style.project_type}>{item.type}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectItem;
