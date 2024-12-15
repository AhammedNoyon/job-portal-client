import { FaBusinessTime } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import team1 from "../../assets/banner/team1.jpg";
import team2 from "../../assets/banner/team2.jpg";
import { motion } from "motion/react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="hero w-11/12 md:w-3/4 mx-auto">
      <div className="hero-content items-center lg:items-start flex-col lg:flex-row-reverse">
        <div className="flex-1 relative mb-10 md:mb-20 lg:mb-0">
          <motion.img
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team1}
            className="max-w-80 md:max-w-sm rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-8 border-b-8 border-primaryColor"
          />
          <motion.img
            animate={{ x: [200, 220, 200] }}
            transition={{ duration: 10, repeat: Infinity }}
            src={team2}
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px]  border-l-8 border-b-8 border-primaryColor shadow-2xl absolute top-40 hidden md:block"
          />
        </div>
        <div className="">
          <h1
            data-aos="fade-up"
            className="text-2xl md:text-5xl font-bold w-full md:w-3/5"
          >
            The Easiest Way to Get Your
            <motion.span
              className="text-3xl"
              animate={{ color: ["#33ff33", "#fffa33", "#ff9b33"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Typewriter
                words={[" New Job!"]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.span>
          </h1>
          <p
            data-aos="fade-up"
            className="py-6 w-full md:w-3/5 text-justify md:text-start"
          >
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-xl py-3 px-5 w-11/12 md:w-fit text-center md:text-start">
            <select className="select   max-w-xs">
              <option disabled selected>
                <FaBusinessTime /> Normal
              </option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            <select className="select   max-w-xs">
              <option disabled selected>
                <FaBusinessTime /> Location
              </option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            <label className="input  flex items-center gap-2 max-w-xs">
              <input type="text" className="grow " placeholder="Search" />
              <button className="btn bg-primaryColor ">Search</button>
            </label>
          </div>
          <div className="flex flex-col md:flex-row gap-2 mt-10">
            <h5>Popular Searches: </h5>
            <div className="grid grid-cols-3 md:flex gap-2 underline text-gray-500">
              <Link> Designer</Link>
              <Link>Web,</Link>
              <Link>IOS,</Link>
              <Link>Developer,</Link>
              <Link>PHP,</Link>
              <Link>Senior,</Link>
              <Link>Engineer,</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
