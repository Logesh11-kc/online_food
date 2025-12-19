import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { useCart } from '../hooks/useCart';

const CheckoutPage = ({ orderSummary, appliedPromo, onBack, onOrderPlace, user }) => {
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isPlacing, setIsPlacing] = useState(false);

  const handlePlaceOrder = async () => {
    if (!user) {
      alert('Please login first');
      return;
    }

    setIsPlacing(true);
    
    setTimeout(() => {
      const order = {
        id: Date.now(),
        items: cart,
        summary: orderSummary,
        promoCode: appliedPromo,
        paymentMethod,
        user,
        timestamp: new Date().toISOString(),
        status: 'Order Placed'
      };

      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.unshift(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      
      clearCart();
      onOrderPlace(order);
      setIsPlacing(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to cart</span>
      </button>

      <h1 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h1>

      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <span className="font-medium">₹{item.price * item.quantity}</span>
              </div>
            ))}
            
            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{orderSummary.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>₹{orderSummary.tax}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Delivery Fee</span>
                <span>₹{orderSummary.deliveryFee}</span>
              </div>
              {orderSummary.discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount</span>
                  <span>-₹{orderSummary.discount}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span>
                <span>₹{orderSummary.total}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary-600"
              />
              <Banknote className="w-5 h-5 text-gray-500" />
              <span>Cash on Delivery</span>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary-600"
              />
              <Smartphone className="w-5 h-5 text-gray-500" />
              <span>UPI (Mock)</span>
            </label>
            
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="text-primary-600"
              />
              <CreditCard className="w-5 h-5 text-gray-500" />
              <span>Credit/Debit Card (Mock)</span>
            </label>
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          disabled={isPlacing}
          className={`w-full py-4 rounded-lg font-semibold text-lg ${
            isPlacing
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
        >
          {isPlacing ? 'Placing Order...' : `Place Order - ₹${orderSummary.total}`}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;