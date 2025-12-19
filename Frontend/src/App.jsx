import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import LoginModal from './components/LoginModal';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [user, setUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [orderSummary, setOrderSummary] = useState(null);
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const adminMode = localStorage.getItem('adminMode') === 'true';
    setIsAdmin(adminMode);
  }, []);

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentPage('restaurant');
  };

  const handleBackToHome = () => {
    setSelectedRestaurant(null);
    setCurrentPage('home');
    setCurrentOrder(null);
  };

  const handleCheckout = (summary, promo) => {
    if (!user) {
      setIsLoginOpen(true);
      return;
    }
    setOrderSummary(summary);
    setAppliedPromo(promo);
    setCurrentPage('checkout');
    setIsCartOpen(false);
  };

  const handleOrderPlace = (order) => {
    setCurrentOrder(order);
    setCurrentPage('tracking');
    setOrderSummary(null);
    setAppliedPromo(null);
  };

  const handleAdminToggle = () => {
    const newAdminMode = !isAdmin;
    setIsAdmin(newAdminMode);
    localStorage.setItem('adminMode', newAdminMode.toString());
    setCurrentPage('home');
  };

  const renderCurrentPage = () => {
    try {
      if (isAdmin && currentPage === 'home') {
        return <AdminDashboard />;
      }

      switch (currentPage) {
        case 'restaurant':
          return <RestaurantPage restaurant={selectedRestaurant} onBack={handleBackToHome} />;
        case 'checkout':
          return (
            <CheckoutPage
              orderSummary={orderSummary}
              appliedPromo={appliedPromo}
              onBack={() => { setCurrentPage('home'); setIsCartOpen(true); }}
              onOrderPlace={handleOrderPlace}
              user={user}
            />
          );
        case 'tracking':
          return <OrderTrackingPage order={currentOrder} onBack={handleBackToHome} />;
        default:
          return <HomePage onRestaurantSelect={handleRestaurantSelect} searchQuery={searchQuery} />;
      }
    } catch (error) {
      console.error('Page render error:', error);
      return (
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
          <button onClick={() => window.location.reload()} className="btn-primary">
            Reload Page
          </button>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onCartOpen={() => setIsCartOpen(true)}
        onLoginOpen={() => setIsLoginOpen(true)}
        user={user}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        isAdmin={isAdmin}
        onAdminToggle={handleAdminToggle}
      />

      <main className="pb-16 min-h-screen">
        {renderCurrentPage()}
      </main>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={setUser}
        user={user}
      />

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">FoodieExpress</h3>
            <p className="text-gray-600 text-sm">Delicious food delivered fast. Demo app built with React + Vite.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;