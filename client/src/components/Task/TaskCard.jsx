import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/tasks";
import { AiOutlineDelete } from "react-icons/ai";

const TaskCard = ({ task }) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });
  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 flex justify-between mt-2">
      <h1 className="mt-2">{task.title}</h1>
      <button
        className="bg-red-500 px-3 py-2"
        onClick={() => {
          deleteTask({
            variables: {
              id: task._id,
            },
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
