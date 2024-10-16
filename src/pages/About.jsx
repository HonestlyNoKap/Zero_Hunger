import React from 'react';
import { Link } from 'react-router-dom'; 

const About = () => {
  return (
    <div>
      {/* Navbar Component */}
      <nav className="bg-green-600 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-lg">ZeroHunger</div>
        <div>
          <Link to="/" className="text-white mx-2 hover:underline hover:text-green-300 transition duration-200">Home</Link>
          <Link to="/Donate" className="text-white mx-2 hover:underline hover:text-green-300 transition duration-200">Donate</Link>
          <Link to="/About" className="text-white mx-2 hover:underline hover:text-green-300 transition duration-200">About</Link>
          <Link to="/Contact" className="text-white mx-2 hover:underline hover:text-green-300 transition duration-200">Contact</Link>
          <Link to="/Login" className="text-white mx-2 hover:bg-green-500 transition duration-200 rounded-full px-4 py-2">Log in</Link>
          <Link to="/Signup" className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-200 transition duration-200">Sign up</Link>
        </div>
      </nav>

      {/* About Section */}
      <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg mt-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-neutral-950">About ZeroHunger</h1>
        <div className="flex justify-center items-center w-full">
          <img 
            src="/image-5.jpg" 
            alt="About ZeroHunger"
            className="w-1/2 h-auto rounded-lg object-cover mb-4"
          />
          <div className="w-1/2 p-4">
            <p className="mb-4 text-lg leading-relaxed">
              ZeroHunger is not just a platform; it's a movement. We believe in a world where no food goes to waste and where everyone has access to nutritious meals. 
              Our platform connects food donors with those in need, creating a seamless process that benefits both parties.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Our journey began with a simple idea: to reduce food wastage by facilitating the donation process. As we grew, we recognized the immense impact 
              we could have on local communities. With the support of volunteers, businesses, and passionate individuals, we aim to create a sustainable 
              model for food donation that can be replicated worldwide.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              At ZeroHunger, we focus on three key pillars: awareness, action, and advocacy. We educate the community about the implications of food waste, 
              empower donors to take action, and advocate for policies that promote food donation and reduce waste.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Join us as we strive to create a world where food is shared, hunger is diminished, and every person has the opportunity to thrive. 
              Together, we can make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;