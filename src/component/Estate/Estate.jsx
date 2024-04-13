import { useContext } from "react";
import { MyContext } from "../../AppContext/AppContext";
import EstateCard from "../EstateCard/EstateCard";

export default function Estate() {
  const { homeData } = useContext(MyContext);
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl py-4">
        Explore all things property
      </h1>
      <div className="flex flex-wrap gap-2 my-2">
        <button className="btn btn-outline rounded-full w-20">All</button>
        <button className="btn rounded-full">Buying</button>
        <button className="btn rounded-full">Renting</button>
        <button className="btn rounded-full">Selling</button>
        <button className="btn rounded-full">Reseacrching</button>
      </div>
      <div>
        {homeData.map((item) => (
          <EstateCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
