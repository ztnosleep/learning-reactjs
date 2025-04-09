import React from "react";
import ItalianStyleTomato from "../public/img/Italian-style tomato.png";
import Spageti from '../public/img/Vegetable and shrimp spaghetti.png';
import Lotus from '../public/img/Lotus delight salad.png';
import Snake from '../public/img/Snack cakes.png';
import ItalianStyleTomato1 from "../public/img/Salad with cabbage.png";
import Spageti1 from '../public/img/Bean, shrimp, and potato salad.png';
import Lotus1 from '../public/img/Sunny-side up fried eggs.png';
import Snake1 from '../public/img/Lotus delight salad_01.png';
function RecipesSection() {
  const recipes = [
    {
      title: "Italian-style tomato salad",
      time: "14 minutes",
      image: ItalianStyleTomato,
    },
    {
      title: "Spaghetti with vegetables and shrimp",
      time: "15 minutes",
      image: Spageti,
    },
    {
      title: "Lotus delight salad",
      time: "20 minutes",
      image: Lotus,
    },
    {
      title: "Snack cakes",
      time: "21 minutes",
      image: Snake,
    },
  ];

  const videoRecipes = [
    {
      title: "Salad with cabbage and shrimp",
      time: "32 minutes",
      image: ItalianStyleTomato1,
    },
    {
      title: "Salad of cove beans, shrimp and potatoes",
      time: "20 minutes",
      image: Spageti1,
    },
    {
      title: "Sunny-side up fried egg",
      time: "15 minutes",
      image: Lotus1,
    },
    {
      title: "Lotus delight salad",
      time: "20 minutes",
      image: Snake1,
    },
  ];

  return (
    <div className="">
      {/* This Summer Recipes Section */}
      <section className="py-12">
        <h2 className="text-center text-3xl font-bold text-pink-600">
          This Summer Recipes
        </h2>
        <p className="text-center text-gray-600 mt-2">
          We have all your Independence Day sweets covered.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
          {recipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {recipe.title}
                </h3>
                <p className="text-sm text-pink-600 mt-2">{recipe.time}</p>
                <button className="mt-4 px-3 py-1 text-sm font-medium text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50">
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipes With Videos Section */}
      <section className="py-12 bg-white">
        <h2 className="text-center text-3xl font-bold text-pink-600">
          Recipes With Videos
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Cooking Up Culinary Creations with Step-by-Step Videos
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
          {videoRecipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {recipe.title}
                </h3>
                <p className="text-sm text-pink-600 mt-2">{recipe.time}</p>
                <button className="mt-4 px-3 py-1 text-sm font-medium text-pink-600 border border-pink-600 rounded-md hover:bg-pink-50">
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RecipesSection;