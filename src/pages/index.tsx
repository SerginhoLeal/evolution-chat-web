import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";

import Login from './login';
import Home from './home';

import { useChat } from "../context";

// const PrivateRoute = ({ auth: { isAuthenticated }, children }) => {
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

export default function Routers(){
  const { data } = useChat();

  const router = createBrowserRouter([
    {
      path: '/',
      loader: () => {
        if (data) {
          return redirect("/home");
        } else {
          return redirect("/login");
        }
      }
    },
    {
      element: <Login />,
      path: '/login',
      loader: () => {
        if (data) {
          return redirect("/home");
        }
        return null;
      }
    },
    {
      element: <Home />,
      path: '/home',
      loader: () => {
        if (!data) {
          return redirect("/login");
        }
        return null;
      }
    },
    // {
    //   element: <Chat />,
    //   path: '/chat/:room',
    //   loader: () => {
    //     if (!data) {
    //       return redirect("/login");
    //     }
    //     return null;
    //   }
    // }
  ]);

  return <RouterProvider router={router} />;
}
