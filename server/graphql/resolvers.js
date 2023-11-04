import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolver = {
  Query: {
    hello: () => "Hellow World",
    projects: async () => {
      return await Project.find();
    },
    project: async (_, { _id }) => {
      return await Project.findById(_id);
    },

    tasks: async () => {
      return await Task.find();
    },
    task: async (_, { _id }) => {
      return await Task.findById(_id);
    },
  },

  Mutation: {
    createProject: async (_, args) => {
      const { name, description } = args;
      const project = new Project({
        name,
        description,
      });
      const savedProject = await project.save();
      return savedProject;
    },
    createTask: async (_, args) => {
      const { title, projectId } = args;
      const checkProject = await Project.findById(projectId);
      if (!checkProject) throw new Error("Project not found");

      const task = new Task({
        title,
        projectId,
      });
      return await task.save();
    },
    deleteProject: async (_, { _id }) => {
      const deletedProject = await Project.findByIdAndDelete(_id);
      if (!deletedProject) throw new Error("Project not found ");

      await Task.deleteMany({ projectId: deletedProject._id });

      return deletedProject;
    },
    deleteTask: async (_, { _id }) => {
      const deletedTask = Task.findByIdAndDelete(_id);
      if (!deletedTask) throw new Error("Task  not found ");

      return deletedTask;
    },
    updateProject: async (_, args) => {
      const { _id, ...updateData } = args;
      const updateProject = Project.findByIdAndUpdate(_id, updateData, {
        new: true,
      });
      if (!updateProject) throw new Error("Project  not found ");

      return updateProject;
    },
    updateTask: async (_, args) => {
      const { _id, ...updateData } = args;
      const updateTask = Task.findByIdAndUpdate(_id, updateData, {
        new: true,
      });
      if (!updateTask) throw new Error("Task  not found ");

      return updateTask;
    },
  },
  Project: {
    task: async (parent) => {
      return await Task.find({ projectId: parent._id });
    },
  },
  Task: {
    project: async (parent) => {
      return await Project.findById(parent.projectId);
    },
  },
};
