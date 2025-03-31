import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./src/app/header";
import { Body } from "./src/app/body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
const MainAPP = () => {
  return (
    <div className="mainapp">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainAPP />,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
