import { Helmet } from "react-helmet";
import "animate.css";
import { useContext } from "react";
import { MyContext } from "../../AppContext/AppContext";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const VirtualTourSection = () => {
  const { homeData } = useContext(MyContext);
  return (
    <section className="flex lg:flex-row flex-col justify-center  lg:items-center p-4 gap-4 my-4">
      <Helmet>
        <title>Virtual Tour </title>
      </Helmet>

      <div className="animate__fadeInLeft animate__animated">
        <h3 className="max-w-lg text-2xl md:text-5xl font-semibold leading-relaxed text-gray-800">
          Virtual Tour Listings
        </h3>
        <p className="max-w-xl text-xl md:text-3xl font-semibold  text-blue-600/100">
          Explore our collection of properties that offer immersive virtual
          tours. Each listing includes a thumbnail image, property details, and
          a link to start the virtual tour.
        </p>
        <p className="font-semibold text-slate-500 my-3 underline">
          Scoll up on picture
        </p>
      </div>

      <div className="h-96 carousel carousel-vertical rounded-box animate__fadeInRight animate__animated">
        {homeData.map((item, inx) => {
          return (
            <div key={inx} className="carousel-item h-full relative w-full">
              <div className=" pl-4 pr-8 py-4 absolute max-w-lg text-3xl font-semibold leading-normal">
                <FaArrowAltCircleUp className="text-slate-200 mb-5" />
                <div className="glass  rounded relative p-3 bg-slate-400">
                  <h1 className="mt-1 text-lg font-semibold text-white md:text-2xl ">
                    {item.estate_title}
                  </h1>
                  <p className="text-sm leading-4 font-medium text-white">
                    {item.status.toUpperCase()}
                  </p>
                </div>

                <div className="glass p-2 rounded  bg-slate-400 text-sm leading-6 col-start-1 sm:col-span-2 mt-4 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                  <h1 className="text-lg font-semibold md:text-2xl text-white">
                    {item.price}
                  </h1>
                </div>
                <dl className="glass bg-slate-400 p-2 rounded mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                  <dt className="sr-only">Reviews</dt>
                  <dd className="text-indigo-600 flex items-center dark:text-indigo-100">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      aria-hidden="true"
                      className="mr-1 stroke-current dark:stroke-indigo-100"
                    >
                      <path
                        d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      {item.rating}{" "}
                      <span className="text-slate-100 font-normal">
                        ({item.total_ratings})
                      </span>
                    </span>
                  </dd>
                  <dt className="sr-only">Location</dt>
                  <dd className="flex items-center">
                    <svg
                      width="2"
                      height="2"
                      aria-hidden="true"
                      fill="currentColor"
                      className="mx-3 text-slate-100"
                    >
                      <circle cx="1" cy="1" r="1" />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 text-slate-100 "
                      aria-hidden="true"
                    >
                      <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                      <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                    </svg>
                    <p className="text-white font-semibold ">
                      {" "}
                      {item.location}
                    </p>
                  </dd>
                </dl>
                <div className="col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2  lg:col-start-1 lg:row-start-3 lg:row-end-4">
                  <NavLink
                    to={`/details/${item.id}/`}
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-700 transition text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg "
                  >
                    {item.view_property_button}
                  </NavLink>
                </div>
                <FaArrowAltCircleDown className="text-slate-200 mt-5" />
              </div>
              <img className="w-full" src={item.image} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VirtualTourSection;
