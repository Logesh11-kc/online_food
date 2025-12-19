import { promoCodes } from '../data/mockData';

export const calculateTotal = (cart, deliveryFee = 49, promoCode = null) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.05);
  let discount = 0;

  if (promoCode) {
    const promo = promoCodes.find(p => p.code === promoCode);
    if (promo && subtotal >= promo.minOrder) {
      discount = promo.discount;
    }
  }

  const total = subtotal + tax + deliveryFee - discount;
  return { subtotal, tax, deliveryFee, discount, total: Math.max(0, total) };
};

export const validatePromo = (code, amount) => {
  const promo = promoCodes.find(p => p.code === code);
  if (!promo) return { valid: false, message: 'Invalid promo code' };
  if (amount < promo.minOrder) return { valid: false, message: `Minimum order ₹${promo.minOrder} required` };
  return { valid: true, promo };
};