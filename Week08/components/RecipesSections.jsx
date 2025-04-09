import React from "react";
import ItalianStyleTomato from "../public/img/Italian-style tomato.png";
import Spageti from '../public/img/Vegetable and shrimp spaghetti.png';
import Lotus from '../public/img/Lotus delight salad.png';
import Snake from '../public/img/Snack cakes.png';
import ItalianStyleTomato1 from "../public/img/Salad with cabbage.png";
import Spageti1 from '../public/img/Bean, shrimp, and potato salad.png';
import Lotus1 from '../public/img/Sunny-side up fried eggs.png';
import Snake1 from '../public/img/Lotus delight salad_01.png';
import Avacador from "../public/img/avacador_salad.png";
import LT from '../public/img/lotus_delight_salad.png';
import Salad from '../public/img/salad_with_cabbage_and_shrimp.png';
import FiveColor from '../public/img/Lotus delight salad_01.png';

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
    }
  ];
  const recipesLast = [
    {
      title: "Stuffed sticky rice ball",
      time: "34 minutes",
      author: "Jennifer King",
      description: "A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
      image: Avacador
    },
    {
      title: "Lotte Art",
      time: "19 minutes",
      author: "Sarah Hill",
      description: "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
      image: Salad
    },
    {
      title: "Strawberry smoothie",
      time: "40 minutes",
      author: "Matthew Martinez",
      description: "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
      image: FiveColor  
    },
    {
      title: "Butter fried noodles",
      time: "16 minutes",
      author: "Julia Lopez",
      description: "Savory noodles cooked in butter for a delicious and satisfying meal...",
      image: LT
    }
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
      <section>
        <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Editor's pick</h1>
        <p className="text-gray-600 italic">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipesLast.map((recipe, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gray-200">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{recipe.time}</span>
              </div>
              <p className="font-medium text-gray-700 mb-3">{recipe.author}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {recipe.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>
    </div>
  );
}

export default RecipesSection;