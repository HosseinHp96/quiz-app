import { Navigate, RouteObject } from "react-router-dom";
import * as Pages from "../pages";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/quizzes" />,
  },
  {
    path: "quizzes",
    element: <Pages.Quizzes />,
  },
  {
    path: "quizzes/create",
    element: <Pages.CreateQuiz />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Routes;
