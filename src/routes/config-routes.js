import "../.";
import { useRoutes } from "react-router-dom";
import { FeedBacksPage } from "../pages/feedbacks/feedbacks-page";
import { CommentsPage } from "../pages/comments/comments-page";

const routes = [
  {
    path: "/",
    element: <FeedBacksPage />,
  },
  {
    path: "/comments-page/:id", // bu yerga ID yozilganligini sababi, biza <JustComment/>'ni shu ID orqali ovolamiz
    element: <CommentsPage />,
  },
];

export const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
