import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Custom404() {
    return (
      <>
        <HeroSection header={'Error Page'}  title={'error'}  />
        <div className="flex flex-col items-center justify-center h-[50vh] bg-white">
        {/* 404 Code */}
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
  
        {/* Error Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Oops! Look like something going wrong
        </h2>
  
        {/* Page Description */}
        <p className="text-gray-500 mb-6 text-center">
          Page cannot be found! We'll have it figured out in no time.<br />
          Meanwhile, check out these fresh ideas:
        </p>
  
        {/* Go to Home Button */}
        <a
          href="/"
          className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Go to home
        </a>
      </div>
      <Footer/>
      </>
     
    );
  }
  