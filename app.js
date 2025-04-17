import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./src/app/header";
import { Body } from "./src/app/body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestrauntMenu from "./src/components/RestrauntMenuCard";
import Cart from "./src/components/CartPage/Cart";
import { Provider } from "react-redux";
import appStore from "./src/store/appStore";

const MainAPP = () => {
  return ( 

    //add context prvider
    <Provider store={appStore}>
      <div className="mainapp">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const About = lazy(() => import("./src/components/About"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainAPP />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>LOADING LAZY....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restraunt/:resId",
        element: <RestrauntMenu />,
      },
      ,
      {
        path:"/cart",
        element: <Cart/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
