import { FcGoogle } from "react-icons/fc";
import loginAnimation from "../../assets/lottie/login.json";
import Lottie from "lottie-react";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, forgetPassword, signInWithGoogle } =
    useContext(AuthContext);
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    if (!terms) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Please accept our terms and conditions",
        showConfirmButton: true,
        timer: 1500,
      });
    }
    signInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          return Swal.fire({
            position: "center",
            icon: "error",
            title: "Please verify your email",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "user sign in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please Enter A Valid Info",
          showConfirmButton: true,
          timer: 1500,
        });
      });
  };
  //google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "user sign in successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Please Enter A Valid Info",
          showConfirmButton: true,
          timer: 1500,
        });
      });
  };
  //forget password
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    // console.log(email);
    if (!email) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Enter your email",
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      forgetPassword(email).then(() => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Please check your email",
          showConfirmButton: true,
          timer: 1500,
        });
      });
    }
  };
  return (
    <div className=" w-11/12 md:w-5/6 mx-auto flex flex-col md:flex-row-reverse items-center justify-center my-10 md:my-20 ">
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
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300  py-4 text-sm font-medium text-gray-600 hover:bg-gray-100 mb-4"
        >
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
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address *
            </label>
            <input
              ref={emailRef}
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
              <input name="terms" type="checkbox" className="mr-2 rounded" />
              term & conditions
            </label>
            <button onClick={handleForgetPassword}>
              <a href="#" className="text-sm text-orange-300 hover:underline">
                Forgot Password
              </a>
            </button>
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
          <Link to="/register" className="text-orange-300 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
