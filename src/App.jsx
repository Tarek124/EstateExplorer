import Navbar from "./Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";

export default function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
