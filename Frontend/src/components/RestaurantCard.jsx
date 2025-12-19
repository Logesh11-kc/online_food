import React from 'react';
import { Star, Clock, Truck } from 'lucide-react';

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div className="card p-0 cursor-pointer overflow-hidden" onClick={() => onClick(restaurant)}>
      <div className="relative">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
        {!restaurant.isOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-semibold">Currently Closed</span>
          </div>
        )}
        {restaurant.offers && restaurant.offers.length > 0 && (
          <div className="absolute bottom-2 left-2">
            <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded">
              {restaurant.offers[0]}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900">{restaurant.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{restaurant.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Truck className="w-4 h-4" />
            <span>₹{restaurant.deliveryFee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;