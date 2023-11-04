import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_PROJECT } from "../graphql/projects";
import TaskList from "../components/Task/TaskList";
import { TaskForm } from "../components/Task/TaskForm";

const ProjectDetails = () => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
    skip: !params.id,
  });

  if (loading) return <p>Loading....</p>;

  if (error) return <p>There is an error</p>;

  console.log(data.project.task);

  return (
    <div className="">
      <Link to="/projects">
        <button className="bg-zinc-500 px-3 py-2">Back to home</button>
      </Link>
      <div className="bg-zinc-900 mb-2 p-10 flex justify-center ">
        <div>
          <h1 className="text-2xl">{data.project.name}</h1>
          <p>{data.project.description}</p>
        </div>
      </div>

      <button className="bg-red-500 px-3 py-2">Delete</button>
      <TaskForm />
      <TaskList tasks={data.project.task} />
    </div>
  );
};

export default ProjectDetails;
