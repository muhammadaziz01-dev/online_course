import request from "../config";
import { LessonsRequest } from "@interface";

export const lessons: LessonsRequest = {
  getLessons: (id) => request.get(`/lessons?id=${id}`, ),
  postLessons: (data) => request.post("/lessons", data),
  deleteLessons: (id) => request.delete(`/lessons/${id}`),
  updateLessons: (data) => request.put(`/lessons/${data?._id}`, data),
};