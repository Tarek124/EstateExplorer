import { useContext } from "react";
import Navbar from "./Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { MyContext } from "./AppContext/AppContext";
import Footer from "./component/Footer/Footer";

export default function App() {
  const { loading } = useContext(MyContext);
  return loading ? (
    <div className="flex justify-center mt-[40vh]">
      <span className="loading loading-lg loading-spinner text-success"></span>
    </div>
  ) : (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
