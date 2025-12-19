import React, { useState } from 'react';
import { X, User, MapPin } from 'lucide-react';

const LoginModal = ({ isOpen, onClose, onLogin, user }) => {
  const [name, setName] = useState(user?.name || '');
  const [address, setAddress] = useState(user?.address || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && address.trim()) {
      const userData = { name: name.trim(), address: address.trim() };
      localStorage.setItem('user', JSON.stringify(userData));
      onLogin(userData);
      onClose();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    onLogin(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{user ? 'Profile' : 'Login'}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <User className="w-4 h-4 inline mr-1" />
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <MapPin className="w-4 h-4 inline mr-1" />
                Delivery Address
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your delivery address"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>

            <div className="flex space-x-3">
              <button type="submit" className="flex-1 btn-primary py-2">
                {user ? 'Update Profile' : 'Login'}
              </button>
              {user && (
                <button type="button" onClick={handleLogout} className="flex-1 btn-secondary py-2">
                  Logout
                </button>
              )}
            </div>
          </form>

          {!user && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <strong>Demo Mode:</strong> No real authentication required. Just enter any name and address.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;