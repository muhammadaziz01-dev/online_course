import request from "../config";
import { CoursesRequest } from "@interface";

export const courses: CoursesRequest = {
  getCourses: () => request.get("/courses", ),
  postCourses: (data) => request.post("/courses", data),
  deleteCourses: (id) => request.delete(`/courses/${id}`),
  updateCourses: (data) => request.put(`/courses/${data?._id}`, data),
};