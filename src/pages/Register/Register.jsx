import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import signUpAnimation from "../../assets/lottie/signUp.json";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { signUpUser, signInWithGoogle, manageUserProfile, verifyEmail } =
    useContext(AuthContext);
  //handleRegister
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);
    /////validation
    ////password
    if (password.length < 6) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must 6 characters",
        showConfirmButton: true,
      });
    }
    const uppercase = /(?=.*[A-Z])/;
    const lowercase = /(?=.*[a-z])/;
    const digit = /(?=.*\d)/;
    const special = /(?=.*[@$!%*?&])/;
    if (!uppercase.test(password)) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must one uppercase",
        showConfirmButton: true,
      });
    }
    if (!lowercase.test(password)) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must one lowercase",
        showConfirmButton: true,
      });
    }
    if (!digit.test(password)) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must one digit",
        showConfirmButton: true,
      });
    }
    if (!special.test(password)) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must one special characters",
        showConfirmButton: true,
      });
    }
    ////sign up to fb
    signUpUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          //update profile
          manageUserProfile(name, photo)
            .then(() => {
              // console.log("profile updated successfully");
            })
            .catch((error) => {
              // console.log(error.message);
            });

          //verify email
          verifyEmail()
            .then(() => {
              Swal.fire({
                position: "center",
                icon: "warning",
                title: "Email verification send.Please check your email.",
                showConfirmButton: false,
                timer: 2500,
              });
            })
            .catch((error) => {
              console.log(error.message);
            });

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign up successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/login");
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
  //sign up with google
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        if (user) {
          //verify email
          verifyEmail()
            .then(() => {
              Swal.fire({
                position: "center",
                icon: "warning",
                title: "Email verification has been send.Please Check.",
                showConfirmButton: false,
                timer: 2500,
              });
            })
            .catch((error) => {
              // console.log(error.message);
            });

          Swal.fire({
            position: "center",
            icon: "success",
            title: "user sign up successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
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
  return (
    <div className=" w-11/12 md:w-5/6 mx-auto flex flex-col lg:flex-row-reverse items-center justify-center my-10 md:my-20 gap-5">
      <div className="md:w-[400px] lg:w-[600px]">
        <Lottie animationData={signUpAnimation}></Lottie>
      </div>
      <div className="w-full max-w-md">
        <h2 className="text-center text-lg text-primaryColor font-semibold">
          Welcome back!
        </h2>
        <h1 className="text-center text-2xl font-bold text-gray-800 mt-2">
          Member Sing Up
        </h1>
        <p className="text-center text-sm text-gray-500 mb-4">
          Access to all features. No credit card required.
        </p>

        {/* Sign in with Google */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 border border-gray-300  py-4 text-sm font-medium text-gray-600 hover:bg-gray-100 mb-4"
        >
          <FcGoogle size={20} />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center justify-between">
          <span className="border-b w-full"></span>
          <span className="px-3 text-sm text-gray-500">Or</span>
          <span className="border-b w-full"></span>
        </div>

        {/* Login form */}
        <form onSubmit={handleRegister} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              required
              name="name"
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300  px-4 py-4 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              required
              name="photo"
              type="text"
              id="photo"
              placeholder="Enter your photo url"
              className="w-full border border-gray-300  px-4 py-4 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address *
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

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-primaryColor text-white py-4  text-sm font-medium "
          >
            Sign Up
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
