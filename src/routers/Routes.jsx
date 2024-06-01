import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "../components/Login/Login";

export default function Routes() {
  const publicRoutes = [
    { path: "/", element: <h1>Home page</h1> },
    { path: "/login", element: <Login/> },
  ];
  const privatRoutes = [
    { path: "/profile", element: <h1>User page</h1> },
    { path: "/contacts", element: <h1>Contacts page</h1> },
  ];

  const router = createBrowserRouter([...publicRoutes, ...privatRoutes]);

  return <RouterProvider router={router} />;
}
