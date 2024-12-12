import { FcGoogle } from "react-icons/fc";
import loginAnimation from "../../assets/lottie/login.json";
import Lottie from "lottie-react";

const Login = () => {
  return (
    <div className=" w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row-reverse items-center justify-center my-10">
      <Lottie animationData={loginAnimation}></Lottie>
      <div className="w-full max-w-md">
        <h2 className="text-center text-lg text-primaryColor font-semibold">
          Welcome back!
        </h2>
        <h1 className="text-center text-2xl font-bold text-gray-800 mt-2">
          Member Login
        </h1>
        <p className="text-center text-sm text-gray-500 mb-4">
          Access to all features. No credit card required.
        </p>

        {/* Sign in with Google */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300  py-4 text-sm font-medium text-gray-600 hover:bg-gray-100 mb-4">
          <FcGoogle size={20} />
          Sign In with Google
        </button>

        {/* Divider */}
        <div className="flex items-center justify-between">
          <span className="border-b w-full"></span>
          <span className="px-3 text-sm text-gray-500">Or</span>
          <span className="border-b w-full"></span>
        </div>

        {/* Login form */}
        <form className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username or Email address *
            </label>
            <input
              required
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300  px-4 py-4 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password *
            </label>
            <input
              required
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300  px-4 py-4 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2 rounded" />
              Remember me
            </label>
            <a href="#" className="text-sm text-orange-300 hover:underline">
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-primaryColor text-white py-4  text-sm font-medium "
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-orange-300 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
