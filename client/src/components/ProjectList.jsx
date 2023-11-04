import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects";
import ProjectCards from "./ProjectCards";

const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error requiring data</p>;
  return (
    <div className="overflow-y-auto h-96 w-full px-5">
      {data.projects.map((project) => (
        <ProjectCards key={project._id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
