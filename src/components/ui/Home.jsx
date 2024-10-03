import React, { useState } from 'react';

function Home() {
  const [calories, setCalories] = useState('');
  const [mealPlan, setMealPlan] = useState({
    lunch: ['Vanilla Walnut Blueberry Yogurt', 'Paleo Avocado Tuna Salad (Tuna in Oil)'],
    dinner: ['Feta and Spinach Hamburger Patties', 'Lebanese Fresh Thyme Tomato Salad']
  });

  const handleGenerateMealPlan = () => {
    // Logic to generate a meal plan based on calories or preferences
  };

  return (
    <div className="container mx-auto p-6 relative">
      {/* Flex container to position image on left and text on right */}
      <div className="flex items-center justify-between mb-8">
        {/* Image on the left */}
        <div className="w-1/2 pr-6">
          <img
            src="https://assets.centralindex.com/N/45/71a8f8a4bf4470f2a9b56b3960d52503_100.jpg" // Replace this URL with your image URL
            alt="Decorative"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text content on the right */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Put your diet on autopilot</h1>
          <p className="text-gray-700 mb-4">
            Eat This Much creates personalized meal plans based on your food preferences, budget, and schedule. 
            Reach your diet and nutritional goals with our calorie calculator, meal plans, and more.
          </p>
          <p className="text-gray-700 mb-6">Create your meal plan right here in seconds.</p>

          <h2 className="text-xl font-semibold mb-4">Ready to give it a shot? Let us know your diet.</h2>

          <div className="flex justify-center mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Anything</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded mr-2">Vegetarian</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Mediterranean</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Ketogenic</button>
          </div>

          {/* Four small images above "I want to eat" */}
          <div className="flex justify-between mb-4">
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Diet 1"
              className="w-1/4 h-24 object-cover rounded"
            />
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Diet 2"
              className="w-1/4 h-24 object-cover rounded"
            />
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Diet 3"
              className="w-1/4 h-24 object-cover rounded"
            />
            <img
              src="https://via.placeholder.com/100" // Replace with your image URL
              alt="Diet 4"
              className="w-1/4 h-24 object-cover rounded"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="calories" className="block mb-2 text-gray-700">I want to eat</label>
            <input
              type="text"
              id="calories"
              placeholder="Enter how many calories you want to consume"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleGenerateMealPlan}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Generate
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-center">Today's Meal Plan</h2>

      <div className="flex justify-center items-center mb-4">
        <div className="flex items-center bg-gray-200 p-2 rounded">
          <span className="mr-2 text-blue-500 font-bold">2000 Calories</span>
        </div>
        <button className="ml-4 text-green-500">Regenerate</button>
      </div>

      <div className="meal-plan-section mb-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Lunch</h3>
          <ul>
            {mealPlan.lunch.map((item, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded mb-2">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Dinner</h3>
          <ul>
            {mealPlan.dinner.map((item, index) => (
              <li key={index} className="bg-gray-100 p-2 rounded mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
