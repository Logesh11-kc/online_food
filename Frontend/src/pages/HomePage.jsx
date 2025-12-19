import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants as defaultRestaurants } from '../data/mockData';

const HomePage = ({ onRestaurantSelect, searchQuery }) => {
  const [restaurants, setRestaurants] = useState(defaultRestaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState(defaultRestaurants);
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  useEffect(() => {
    let filtered = [...restaurants];

    if (searchQuery) {
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.menu.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    if (selectedCuisine !== 'All') {
      filtered = filtered.filter(r => r.cuisine === selectedCuisine);
    }

    setFilteredRestaurants(filtered);
  }, [restaurants, searchQuery, selectedCuisine]);

  const cuisines = ['All', ...new Set(restaurants.map(r => r.cuisine))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Delicious food, delivered fast</h1>
        <p className="text-xl text-gray-600">Order from your favorite restaurants</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500"
          >
            {cuisines.map(cuisine => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>
        <div className="text-sm text-gray-600">
          {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''} found
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} onClick={onRestaurantSelect} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;