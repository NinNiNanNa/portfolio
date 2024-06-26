import { useQuery } from "react-query";
import { IGetResult, getProjects } from "../services/projects";
import Loading from "../components/Loading";
import ProjectItem from "../components/project/ProjectItem";
/* CSS import */
import style from "../styles/Projects.module.css";

function Projects() {
  const { data, isLoading } = useQuery<IGetResult>({
    queryKey: ["projects"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return getProjects();
    },
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={style.wrap}>
          <h1 className={style.title}>💻 It's my works! 💻</h1>
          <ProjectItem projectData={data} />
        </div>
      )}
    </>
  );
}

export default Projects;
