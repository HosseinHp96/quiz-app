import { RouteObject } from "react-router-dom";
import * as Pages from "../pages";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <Pages.Quizzes />,
  },
  {
    path: "/create",
    element: <Pages.CreateQuiz />,
  },
];

export default Routes;
