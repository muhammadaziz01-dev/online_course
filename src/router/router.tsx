import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import { Error, Home, Courses, Lesson, Auth , Certificates, Users } from "@pages";
import HomeLayout from "../layout";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Auth />} />
        <Route path="/home/*" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<Lesson />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default index;
