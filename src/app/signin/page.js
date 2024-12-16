import { FaUser, FaEnvelope, FaLock, FaGoogle, FaApple } from "react-icons/fa";
import HeroSection from "../../components/HeroSection"
import Footer from "../../components/Footer";

export default function Signup() {
  return (
    <>
    <HeroSection header={"sign in page"} title={'sign in'} />

    <div className="flex items-center justify-center min-h-screen ">
      {/* Sign Up Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 ">Sign In</h2>

        {/* Input Fields */}
        <form className="space-y-6 relative">
          

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
            <input
              id="email"
              type="email"
              className="w-full pl-10 border border-gray-300 rounded-sm p-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
            <input
              id="password"
              type="password"
              className="w-full pl-10 border border-gray-300 rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Password"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="text-yellow-500 focus:ring-yellow-500 rounded"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember me?
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-200"
          >
            Sign In
          </button>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
              Forgot password?
            </a>
          </div>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="  border p-1 ">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100">
            <FaGoogle className="w-5 h-5 mr-2 text-red-500" />
            <span>Sign up with Google</span>
          </button>

          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100">
            <FaApple className="w-5 h-5 mr-2 text-gray-900" />
            <span>Sign up with Apple</span>
          </button>
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}
