import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);
  console.log(jobs);
  // applicationDeadline
  // category
  // company
  // company_logo
  // description
  // hr_email;

  // hr_name;

  // jobType;

  // location;

  // requirements;

  // responsibilities;

  // salaryRange;

  // status;

  // title;

  // _id;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {jobs.slice(0, 8).map((job) => (
        <div
          key={job._id}
          className="border rounded-lg shadow-md p-4 max-w-sm bg-white"
        >
          {/* Header */}
          <div className="flex items-center mb-3">
            <div className="p-2 border-2 rounded-md">
              {/* Replace with your logo */}
              <img
                src={job?.company_logo}
                alt="company logo"
                className="w-10 h-10"
              />
            </div>
            <div className="ml-3">
              <h3 className="font-bold text-lg text-gray-800">
                {job?.company}
              </h3>
              <p className="text-gray-500 text-sm flex items-center">
                <FaMapMarkerAlt className="mr-1 text-gray-400" />
                {job?.location}
              </p>
            </div>
            <div className="ml-auto text-green-500 text-xl">⚡</div>
          </div>

          {/* Job Title */}
          <h4 className="font-semibold ">{job?.title}</h4>
          <p className="text-gray-500 text-sm flex items-center mb-3">
            <FaRegClock className="mr-1 text-gray-400" />
            {job?.jobType}
          </p>

          {/* Description */}
          <p className="text-gray-500 text-sm mb-4">{job?.description}</p>

          {/* Tags */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {job?.requirements.map((skill, index) => (
              <span
                key={index}
                className="border text-gray-600 px-2 py-1 rounded text-xs text-center"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Price and Button */}
          <div className="flex justify-between items-center">
            <p className="font-bold text-gray-500">
              ${job?.salaryRange?.min} - {job?.salaryRange?.max}
              <span className="text-gray-400 text-sm font-normal">
                / {job?.salaryRange?.currency}
              </span>
            </p>
            <button className="bg-primaryColor font-bold text-sm px-4 py-2 rounded">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
