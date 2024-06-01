import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Routes() {
  const publicRoutes = [
    { path: "/", element: <h1>Home page</h1> },
    { path: "/login", element: <h1>Login page</h1> },
  ];
  const privatRoutes = [
    { path: "/profile", element: <h1>User page</h1> },
    { path: "/contacts", element: <h1>Contacts page</h1> },
  ];

  const router = createBrowserRouter([...publicRoutes, ...privatRoutes]);

  return <RouterProvider router={router} />;
}
