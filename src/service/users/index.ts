import request from "../config";
import { UsersRequest } from "@interface";

export const users: UsersRequest = {
  getUsers: () => request.get(`/user`, ),
  deleteUsers: (id) => request.delete(`/user/${id}`),
};