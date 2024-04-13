import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import NotFoundPage from "../component/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    element: <App />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
