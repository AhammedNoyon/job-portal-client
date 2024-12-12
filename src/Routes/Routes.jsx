import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/rootLayout/RootLayout";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <h3>Error Page</h3>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;