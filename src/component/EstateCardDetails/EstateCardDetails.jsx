import { useContext } from "react";
import { MyContext } from "../../AppContext/AppContext";
import { useParams } from "react-router-dom";
import "animate.css";
import { Helmet } from "react-helmet";

const EstateCardDetails = () => {
  const { homeData } = useContext(MyContext);
  const { id } = useParams();

  const data = homeData?.filter((item) => item.id == id);
  const newData = data[0];
  return (
    <div className="animate__animated animate__backInLeft  card w-full my-4 shadow-xl image-full ">
  <Helmet>
    <title>Estate Details</title>
  </Helmet>
      <figure>
        <img src={newData?.image} />
      </figure>
      <div className="card-body glass ">
        <div className="flex gap-4 md:flex-row flex-col">
          <img
            className="w-full rounded md:w-1/2 shadow"
            src={newData.image}
            alt=""
          />

          <div>
            <p className="text-sm mb-1 leading-4 font-medium text-white">
              {newData.segment_name.toUpperCase()}
            </p>
            <h1 className="mt-1 shadow-md text-2xl btn btn-ghost glass font-semibold  text-white md:text-4xl ">
              {newData.estate_title}
            </h1>
            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-white flex items-center">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  aria-hidden="true"
                  className="mr-1 stroke-current dark:stroke-[#76e9d6]"
                >
                  <path
                    d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  {newData.rating}{" "}
                  <span className="text-white font-normal">
                    ({newData.total_ratings})
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
                  className="mx-3 text-slate-300"
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
                  className="mr-1 text-[#76e9d6]"
                  aria-hidden="true"
                >
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                {newData.location}
              </dd>
            </dl>
            <h1 className="mt-1 text-xl  font-semibold  text-white md:text-3xl ">
              {newData.price}
            </h1>
            <div>
              <h1 className="mt-2 text-xl  font-semibold   text-slate-200  ">
                Facilities
              </h1>
              <ul>
                {newData.facilities?.map((item, index) => (
                  <li key={index} className="ml-1">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-1 text-xl  font-semibold ">
                Area - {newData.area}
              </p>
            </div>
          </div>
        </div>
        <div className="my-4 md:pr-20 text-slate-100">
          <div>
            <span className="font-semibold">Description :</span>{" "}
            {newData.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCardDetails;
