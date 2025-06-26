import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Banner() {
  return (
    <div className="my-10 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="text-center mySwiper "
      >
        <SwiperSlide className="mb-10 rounded-3xl">
          <div
            className="h-[500px] hero rounded-3xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/5gP71d0j/images.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay rounded-3xl"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  WellCome to <span className="text-red-300">Coffee House</span>
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="mb-10 rounded-3xl">
          <div
            className="h-[500px] hero rounded-3xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/DP1PjYtV/download.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay rounded-3xl"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  WellCome to <span className="text-red-300">Coffee House</span>
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="mb-10 rounded-3xl">
          <div
            className="h-[500px] hero rounded-3xl"
            style={{
              backgroundImage: "url(https://i.ibb.co/bj0c28g1/download.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay rounded-3xl"></div>
            <div className="text-center hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  WellCome to <span className="text-red-300">Coffee House</span>
                </h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
