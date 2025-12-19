import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      saveCart(cart.map(c => c.id === item.id ? {...c, quantity: c.quantity + 1} : c));
    } else {
      saveCart([...cart, {...item, quantity: 1}]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      saveCart(cart.filter(c => c.id !== id));
    } else {
      saveCart(cart.map(c => c.id === id ? {...c, quantity} : c));
    }
  };

  const clearCart = () => saveCart([]);

  const getTotal = () => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const getCount = () => cart.reduce((sum, item) => sum + item.quantity, 0);

  return { cart, addToCart, updateQuantity, clearCart, getTotal, getCount };
};