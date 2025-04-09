import React from "react";
import backgroundImage from '../public/img/Image 73.png'
import logo from '../public/img/Group 9.png'
import avatar from '../public/img/Avatar (2).png';
function RecipeOfTheDay() {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8" />
      
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="/" className="hover:text-gray-900">
            What to cook
          </a>
          <a href="/" className="hover:text-gray-900">
            Recipes
          </a>
          <a href="/" className="hover:text-gray-900">
            Ingredients
          </a>
          <a href="/" className="hover:text-gray-900">
            Occasions
          </a>
          <a href="/" className="hover:text-gray-900">
            About Us
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50">
            Login
          </button>
          <button className="px-4 py-2 text-sm text-white bg-pink-600 rounded-md hover:bg-pink-700">
            Subscribe
          </button>
        </div>
      </header>

      <main className="relative">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-360 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <div className="text-center">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-white uppercase bg-yellow-500 rounded-full">
              Recipe of the day
            </div>
            <h2 className="text-2xl font-bold text-pink-600">Salad Caprese</h2>
            <p className="mt-3 text-gray-600">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
              herbs, olive oil, and balsamic vinegar create a refreshing dish
              for lunch or appetizer.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <img
                src={avatar}
                alt="Chef"
                className="w-10 h-10 rounded-full border-2 border-pink-600"
              />
              <span className="text-gray-700">Salad Caprese</span>
            </div>
            <button className="mt-6 px-6 py-2 text-sm font-semibold text-white bg-pink-600 rounded-md hover:bg-pink-700">
              View now →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecipeOfTheDay;