import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Quiz from "./components/quiz/quiz.tsx";
import App from "./App.tsx";
import ErrorPage from "./components/errorPage/errorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/html",
        element: <Quiz subject="HTML" />,
      },
      {
        path: "/css",
        element: <Quiz subject="CSS" />,
      },
      {
        path: "/javascript",
        element: <Quiz subject="JavaScript" />,
      },
      {
        path: "/accessibility",
        element: <Quiz subject="Accessibility" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
