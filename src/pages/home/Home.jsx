import Banner from "../../components/Banner/Banner";
import CategorySlide from "../../components/categorySlide/CategorySlide";
import Jobs from "../../components/jobs/Jobs";

const Home = () => {
  return (
    <>
      <div className="mt-10 mb-10 md:mb-20">
        <Banner></Banner>
      </div>
      <div className="w-11/12 md:w-3/4 mx-auto">
        <CategorySlide></CategorySlide>
      </div>
      <div className="w-11/12 md:w-3/4 mx-auto my-10">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-4xl font-bold">Jobs of the day</h3>
          <p className="text-gray-500 mt-3">
            Search and connect with the right candidates faste
          </p>
        </div>
        <Jobs></Jobs>
      </div>
    </>
  );
};

export default Home;
