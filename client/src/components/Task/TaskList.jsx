import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  if (!tasks) return <p>No tasks available</p>;
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
