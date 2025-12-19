import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Truck } from 'lucide-react';
import FoodItemCard from '../components/FoodItemCard';

const RestaurantPage = ({ restaurant, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!restaurant) return null;

  const categories = ['All', ...new Set(restaurant.menu.map(item => item.category))];
  const filteredMenu = selectedCategory === 'All' 
    ? restaurant.menu 
    : restaurant.menu.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to restaurants</span>
      </button>

      <div className="card p-6 mb-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <img src={restaurant.image} alt={restaurant.name} className="w-full md:w-48 h-48 object-cover rounded-lg" />
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
                <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Truck className="w-4 h-4" />
                    <span>₹{restaurant.deliveryFee} delivery</span>
                  </div>
                </div>
              </div>
              
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                restaurant.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {restaurant.isOpen ? 'Open' : 'Closed'}
              </div>
            </div>

            {restaurant.offers && restaurant.offers.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900">Offers</h3>
                {restaurant.offers.map((offer, index) => (
                  <div key={index} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm">
                    {offer}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredMenu.map((item) => (
          <FoodItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;