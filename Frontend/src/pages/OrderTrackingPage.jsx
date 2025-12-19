import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, Clock, Truck, Package } from 'lucide-react';

const OrderTrackingPage = ({ order, onBack }) => {
  const [currentStatus, setCurrentStatus] = useState(order?.status || 'Order Placed');
  const [estimatedTime, setEstimatedTime] = useState(25);

  const orderSteps = [
    { id: 1, status: 'Order Placed', icon: CheckCircle, description: 'Your order has been confirmed' },
    { id: 2, status: 'Preparing', icon: Package, description: 'Restaurant is preparing your food' },
    { id: 3, status: 'Out for Delivery', icon: Truck, description: 'Your order is on the way' },
    { id: 4, status: 'Delivered', icon: CheckCircle, description: 'Order delivered successfully' }
  ];

  useEffect(() => {
    if (!order) return;

    const statusProgression = ['Order Placed', 'Preparing', 'Out for Delivery', 'Delivered'];
    const currentIndex = statusProgression.indexOf(currentStatus);
    
    if (currentIndex < statusProgression.length - 1) {
      const timer = setTimeout(() => {
        const nextStatus = statusProgression[currentIndex + 1];
        setCurrentStatus(nextStatus);
        
        const orders = JSON.parse(localStorage.getItem('orders') || '[]');
        const orderIndex = orders.findIndex(o => o.id === order.id);
        if (orderIndex !== -1) {
          orders[orderIndex].status = nextStatus;
          localStorage.setItem('orders', JSON.stringify(orders));
        }
        
        if (nextStatus === 'Preparing') setEstimatedTime(20);
        else if (nextStatus === 'Out for Delivery') setEstimatedTime(10);
        else if (nextStatus === 'Delivered') setEstimatedTime(0);
      }, 10000); // Progress every 10 seconds for demo

      return () => clearTimeout(timer);
    }
  }, [currentStatus, order]);

  if (!order) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center py-12">
          <Clock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Order not found</h2>
        </div>
      </div>
    );
  }

  const currentStepIndex = orderSteps.findIndex(step => step.status === currentStatus);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <button onClick={onBack} className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <div className="card p-6 mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Order #{order.id}</h1>
            <p className="text-gray-600">
              Placed on {new Date(order.timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600">₹{order.summary.total}</div>
            <div className="text-sm text-gray-600">{order.items.length} items</div>
          </div>
        </div>

        {estimatedTime > 0 && (
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-primary-600" />
              <span className="font-medium text-primary-800">
                Estimated delivery in {estimatedTime} minutes
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="card p-6 mb-6">
        <h2 className="text-lg font-semibold mb-6">Order Status</h2>
        <div className="space-y-6">
          {orderSteps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = index <= currentStepIndex;
            const isCurrent = index === currentStepIndex;
            
            return (
              <div key={step.id} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                  isCompleted ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1">
                  <h3 className={`font-medium ${isCompleted ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.status}
                  </h3>
                  <p className={`text-sm ${isCompleted ? 'text-gray-600' : 'text-gray-400'}`}>
                    {step.description}
                  </p>
                  
                  {isCurrent && estimatedTime > 0 && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full w-3/5 transition-all duration-1000" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card p-6">
        <h2 className="text-lg font-semibold mb-4">Order Items</h2>
        <div className="space-y-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <span className="font-medium">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;