import { useQuery } from "react-query";
import { IGetResult, getProjects } from "../services/projects";
/* CSS import */
import style from "../styles/Projects.module.css";

function Projects() {
  const { data, isLoading } = useQuery<IGetResult>({
    queryKey: ["projects"],
    queryFn: () => getProjects(),
  });
  console.log(data);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={style.wrap}>
          <h1>💻 It's my works! 💻</h1>
          {data?.projects.map((item, idx) => (
            <div key={idx}>{item.name}</div>
          ))}
        </div>
      )}
    </>
  );
}

export default Projects;
