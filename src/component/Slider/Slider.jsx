import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useContext } from "react";
import { MyContext } from "../../AppContext/AppContext";

export default function Slider() {
  const { homeData, loading } = useContext(MyContext);

  return (
    <>
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {homeData?.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="md:h-[500px] overflow-hidden h-[200px] sm:h-[300px] flex items-center">
                <img className="w-full" src={data.image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
