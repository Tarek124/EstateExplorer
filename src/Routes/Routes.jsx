import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import NotFoundPage from "../component/NotFoundPage/NotFoundPage";
import Register from "../component/Registation/Register";
import Login from "../component/Registation/Login";
import UpdateUserProfile from "../component/UpdateUserProfile/UpdateUserProfile";
import Contact from "../component/Contact/Contact";
import EstateCardDetails from "../component/EstateCardDetails/EstateCardDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import VirtualTourSection from "../component/VirtualTourSection/VirtualTourSection";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/updateprofile", element: <UpdateUserProfile /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/VirtualTour",
        element: (
          <PrivateRoutes>
            <VirtualTourSection />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <EstateCardDetails />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
