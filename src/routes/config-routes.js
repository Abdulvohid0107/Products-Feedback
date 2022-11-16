import { useRoutes } from "react-router-dom";
import { NotFound, FeedBacksPage, CommentsPage, AddPage, EditPage } from "../pages";

const routes = [
  {
    path: "/",
    element: <FeedBacksPage />,
  },
  {
    path: "add",
    element: <AddPage ></AddPage>
  },
  {
    path: "/comments-page/:id", // bu yerga ID yozilganligini sababi, biza <JustComment/>'ni shu ID orqali ovolamiz
    children: [
      {
        path: "",
        element: <CommentsPage />,
      },
      {
        path: "edit",
        element: <EditPage />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
];

export const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
