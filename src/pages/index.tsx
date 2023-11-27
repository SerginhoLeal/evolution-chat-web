import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";

import Login from './login';
import Chat from './chat';

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
          return redirect("/chat");
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
          return redirect("/chat");
        }
        return null;
      }
    },
    {
      element: <Chat />,
      path: '/chat',
      loader: () => {
        if (!data) {
          return redirect("/login");
        }
        return null;
      }
    },
    {
      element: <Chat />,
      path: '/chat/:chat_id',
      loader: () => {
        if (!data) {
          return redirect("/login");
        }
        return null;
      }
    }
  ]);

  return <RouterProvider router={router} />;
}
