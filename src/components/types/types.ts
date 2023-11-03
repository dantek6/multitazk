export type User = {
  username: string;
  email: string;
  password: string;
};

export type ErrorData = {
  error: string | string[];
};

export type Group = {
  title: string;
};

export type getOneGroup = {
  _id: string;
  name: string;
  usersId: string[];
  tasksId: string[];
  adminId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type getOneTask = {
  _id: string;
  title: string;
  instruction: string;
  date: Date;
  groupId: string; // O puedes usar Types.ObjectId si prefieres
  adminId: string; // O puedes usar Types.ObjectId si prefieres
  lengthMin?: number;
  points?: number;
  responses: {
    userId: string;
    taskResponse: string;
  }[];
};

export type Task = {
  _id: string;
  title: string;
  instruction: string;
  date: Date;
  groupId: string;
  adminId: string;
  lengthMin?: number;
  points?: number;
  responses: Array<{
    userId: string;
    taskResponse: string;
  }>;
};