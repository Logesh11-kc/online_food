import React from 'react';
import { Plus, Minus, Leaf, Award } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const FoodItemCard = ({ item }) => {
  const { cart, addToCart, updateQuantity } = useCart();
  const cartItem = cart.find(c => c.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="card p-4 flex space-x-4">
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-2">
          {item.isVeg && <Leaf className="w-4 h-4 text-green-600" />}
          {item.isBestseller && (
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-orange-500 font-medium">Bestseller</span>
            </div>
          )}
        </div>
        
        <h3 className="font-semibold text-lg text-gray-900 mb-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{item.description}</p>
        <p className="font-semibold text-lg text-gray-900">₹{item.price}</p>
      </div>
      
      <div className="flex flex-col items-center space-y-3">
        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
        
        {quantity === 0 ? (
          <button onClick={() => addToCart(item)} className="btn-primary text-sm px-4 py-2">
            <Plus className="w-4 h-4 mr-1" />
            Add
          </button>
        ) : (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => updateQuantity(item.id, quantity - 1)}
              className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-semibold text-lg min-w-[2rem] text-center">{quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, quantity + 1)}
              className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItemCard;