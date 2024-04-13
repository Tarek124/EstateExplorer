/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export default function AppContext({ children }) {
  const [homeData, setHomeData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("./fake.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setHomeData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const appData = { homeData, loading };
  return <MyContext.Provider value={appData}>{children}</MyContext.Provider>;
}
