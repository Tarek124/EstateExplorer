import Estate from "../Estate/Estate";
import { Helmet } from "react-helmet";
import Slider from "../Slider/Slider";
import { useContext } from "react";
import { MyContext } from "../../AppContext/AppContext";
import { ClimbingBoxLoader } from "react-spinners";

export default function Home() {
  const { loading } = useContext(MyContext);

  return loading ? (
    <div className="flex justify-center h-[80vh] items-center">
      <ClimbingBoxLoader
        color="#4F46E5"
        cssOverride={{}}
        loading
        size={20}
        speedMultiplier={1}
      />
    </div>
  ) : (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <Estate />
    </>
  );
}
