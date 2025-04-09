import React from 'react';
import Chefify from '../public/img/white_chefify.png' 
function Footer() {
  return (
    <footer className="bg-[#1E1E24] text-white py-12 px-16 sm:px-6 lg:px-8 h-full">
      <div className="w-full px-70 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black px-4 py-2 rounded-l-md focus:outline-none flex-grow"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md">Send</button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <div className="flex items-center justify-center mb-4">
          <img src={Chefify} alt="Chefify Logo" className="h-8 mr-2" /> {/* Replace with your logo path */}
          <span className="font-semibold text-lg"></span>
        </div>
        <p className="text-xs">
          2023 Chefify Company | <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Privacy Policy</a>
        </p>
      </div>
        </div>

        <div className='mx-20 w-[550px] px-50'>
          <h3 className="text-lg font-semibold mb-4 ">Learn More</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:underline">Our Cooks</a></li>
            <li><a href="#" className="text-sm hover:underline">See Our Features</a></li>
            <li><a href="#" className="text-sm hover:underline">FAQ</a></li>
          </ul>
          <div>
          <h3 className="text-lg font-semibold mb-4 mt-8">Shop</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:underline">Gift Subscription</a></li>
            <li><a href="#" className="text-sm hover:underline">Send Us Feedback</a></li>
          </ul>
        </div>
        </div>

        

        <div className='mx-20 w-[500px] px-40'>
          <h3 className="text-lg font-semibold mb-4">Recipes</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm hover:underline">What To Cook This Week</a></li>
            <li><a href="#" className="text-sm hover:underline">Pasta</a></li>
            <li><a href="#" className="text-sm hover:underline">Dinner</a></li>
            <li><a href="#" className="text-sm hover:underline">Healthy</a></li>
            <li><a href="#" className="text-sm hover:underline">Vegetarian</a></li>
            <li><a href="#" className="text-sm hover:underline">Vegan</a></li>
            <li><a href="#" className="text-sm hover:underline">Christmas</a></li>
          </ul>
        </div>
      </div>

      
    </footer>
  );
}

export default Footer;