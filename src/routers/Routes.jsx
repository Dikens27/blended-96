import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { Contacts } from "../components/Contacts/Contacts";

export default function Routes() {
  const publicRoutes = [
    { path: "/", element: <h1>Home page</h1> },
    { path: "/login", element: <Login /> },
  ];
  const privateRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        { path: "/profile", element: <h1>User page</h1> },
        { path: "/contacts", element: <Contacts /> },
      ],
    },
  ];

  const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);

  return <RouterProvider router={router} />;
}
