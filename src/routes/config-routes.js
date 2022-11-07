import "../.";
import { useRoutes } from "react-router-dom";
import { FeedBacksPage } from "../pages/feedbacks/feedbacks-page";
import { CommentsPage } from "../pages/comments/comments-page";
import { AddPage } from "../pages/add-page/add-page";

const routes = [
  {
    path: "/",
    element: <FeedBacksPage />,
  },
  {
    path: "add",
    element: <AddPage></AddPage>
  },
  {
    path: "/comments-page/:id", // bu yerga ID yozilganligini sababi, biza <JustComment/>'ni shu ID orqali ovolamiz
    children: [
      {
        path: "",
        element: <CommentsPage />,
      }
    ]
  },
];

export const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
