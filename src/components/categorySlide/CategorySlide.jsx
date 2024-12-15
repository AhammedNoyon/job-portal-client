// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./categorySlide.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const CategorySlide = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-2xl md:text-4xl font-bold">Browse by category</h3>
        <p className="text-gray-500 mt-3">
          Find the job that’s perfect for you. about 800+ new jobs everyday
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {jobs.map((job) => (
          <SwiperSlide key={job._id}>
            <div className=" flex gap-4 items-center bg-base-100  p-5 h-40 border-2 rounded-xl ">
              <figure>
                <img className="w-10 h-10" src={job?.company_logo} alt="jobs" />
              </figure>
              <div className="">
                <h2 className="text-xl font-bold">{job?.title}</h2>
                <p className="text-gray-500">*** jobs available</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlide;
