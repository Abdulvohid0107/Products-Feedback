import { useRoutes } from "react-router-dom";
import { NotFound, FeedBacksPage, CommentsPage, AddPage, EditPage, Login } from "../pages";

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
      {
        path: "login",
        element: <Login/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  },
  {
    path: "login",
    element: <Login/>
  }
];

export const Routes = () => {
  const elements = useRoutes(routes);
  return elements;
};
