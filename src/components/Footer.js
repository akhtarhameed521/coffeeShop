import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" text-white bg-[#0D0D0DF2] mt-[100px]">
      <div className="max-w-7xl m-auto p-10 " >
      <div className="flex flex-col lg:flex-row items-center justify-between mb-10">
        <div className="text-center md:text-left">
          <h2 className=" text-3xl font-bold mb-2">
            <span className="text-yellow-500">St</span>ill You Need Our Support?
          </h2>
          <p className="text-gray-400">
            Don’t wait, make a smart & logical quote here. It's pretty easy.
          </p>
        </div>
        <div className="  flex  mt-5 ">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-l-md bg-yellow-500 text-white focus:outline-none  "
          />
          <button className="  px-1 py-1  sm:px-6 sm:py-2 bg-white text-black rounded-r-md font-bold">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="container mx-auto px-8">
        {/* Top Section */}

        <hr className="border-gray-700" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className=" mb-4">
              Corporate clients and leisure travelers have been relying on
              Groundlink for dependable, safe, and professional chauffeured car
              service in major cities across the World.
            </p>
            <div className="flex items-center">
              <Image
                src="/hours.png"
                alt="Opening Hours"
                width={100}
                height={100}
                className="mr-4"
              />
              <div className="text-sm">
                <p className="text-yellow-500">Opening Hours</p>
                <p>Mon - Sat (8.00 - 6.00)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h3>
            <ul className="space-y-2 ">
              <li>About</li>
              <li>News</li>
              <li>Partners</li>
              <li>Team</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Help?</h3>
            <ul className="space-y-2 ">
              <li>FAQ</li>
              <li>Term & Conditions</li>
              <li>Reporting</li>
              <li>Documentation</li>
              <li>Support Policy</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Recent Post
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((post) => (
                <div key={post} className="flex items-center">
                  <Image
                    src={`/recent${post}.png`}
                    alt={`Recent Post ${post}`}
                    width={60}
                    height={60}
                    className="mr-4 rounded-md"
                  />
                  <div>
                    <p className="text-gray-400">20 Feb 2022</p>
                    <p className="text-white">Keep Your Business</p>
                  </div>
                </div>
              ))}
            </div>
          </div> 
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
