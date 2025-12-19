# 🍕 FoodieExpress - Online Food Delivery System

A modern, production-ready single-page application for online food delivery built with **React + Vite**, **Tailwind CSS**, and **localStorage** for data persistence. No backend required!

## 🚀 Features

### 🛍️ User Experience
- **Guest Browsing**: Browse restaurants and menus without login
- **Mock Authentication**: Simple name + address login (no real auth required)
- **Admin Mode**: Toggle between user and admin views
- **Responsive Design**: Mobile-first, works on all devices

### 🍽️ Restaurant & Menu
- **Restaurant Cards**: Images, ratings, cuisine filters, delivery info
- **Real-time Search**: Search restaurants and food items instantly
- **Menu Categories**: Organized menu with veg/non-veg badges
- **Restaurant Status**: Open/closed logic with visual indicators
- **Offers & Promotions**: Display restaurant offers and deals

### 🛒 Shopping Cart
- **Smart Cart Management**: Add/remove items with quantity controls
- **Live Price Calculation**: Subtotal, tax (5%), delivery fee, discounts
- **Promo Code System**: Apply discount codes with validation
- **Cart Persistence**: Cart saved in localStorage
- **Animated Updates**: Smooth cart animations and feedback

### 📦 Order Management
- **Seamless Checkout**: Customer details, payment method selection
- **Order Confirmation**: Detailed order summary and confirmation
- **Real-time Tracking**: Live order status with progress timeline
- **Status Progression**: Order Placed → Preparing → Out for Delivery → Delivered

### 👨💼 Admin Dashboard
- **Analytics Overview**: Revenue, orders, average order value stats
- **Order Management**: View all orders with status and details
- **Real-time Data**: Live updates from localStorage

## 🛠️ Tech Stack

- **Frontend**: React 18 (Functional Components + Hooks)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Data Storage**: localStorage (no backend needed)
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Navbar.jsx       # Navigation with search, cart, user menu
│   ├── RestaurantCard.jsx # Restaurant display card
│   ├── FoodItemCard.jsx # Menu item with add/remove controls
│   ├── CartDrawer.jsx   # Sliding cart with checkout
│   └── LoginModal.jsx   # Mock authentication modal
├── pages/               # Main application pages
│   ├── HomePage.jsx     # Restaurant listing with filters
│   ├── RestaurantPage.jsx # Restaurant menu and details
│   ├── CheckoutPage.jsx # Order checkout and payment
│   ├── OrderTrackingPage.jsx # Real-time order tracking
│   └── AdminDashboard.jsx # Admin panel with analytics
├── hooks/               # Custom React hooks
│   └── useCart.js       # Cart state management
├── utils/               # Utility functions
│   └── priceCalculator.js # Order pricing and promo logic
├── data/                # Mock data and constants
│   └── mockData.js      # Sample restaurants, menus, promos
├── App.jsx              # Main app component with routing
├── main.jsx             # React app entry point
└── index.css            # Global styles and Tailwind imports
```

## 🏃♂️ Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation & Setup

1. **Navigate to project directory**
   ```bash
   cd "Online Food Delivery"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically open

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎯 How It Works

### 🛒 Cart & Pricing Logic
1. **Add Items**: Click "Add" on any menu item
2. **Quantity Control**: Use +/- buttons to adjust quantities
3. **Price Calculation**: 
   - Subtotal = Sum of (item price × quantity)
   - Tax = 5% of subtotal
   - Delivery Fee = Restaurant-specific fee
   - Discount = Applied promo code discount
   - **Total = Subtotal + Tax + Delivery Fee - Discount**

### 🎫 Promo Code System
- **WELCOME50**: ₹50 off on orders above ₹200
- **SAVE100**: ₹100 off on orders above ₹500  

### 📱 Order Flow
1. **Browse** → Select restaurant → Add items to cart
2. **Cart** → Review items → Apply promo → Proceed to checkout
3. **Checkout** → Enter details → Select payment → Place order
4. **Tracking** → Real-time status updates → Order completion

### 👨💼 Admin Features
- **Toggle Admin Mode**: Click the Admin/User button in navbar
- **Dashboard**: View analytics, revenue, order stats
- **Order Management**: View all orders and details

## 💾 Data Storage

All data is stored in **localStorage**:
- `cart`: Shopping cart items
- `user`: User profile (name, address)
- `orders`: Order history with status
- `adminMode`: Admin mode toggle

## 🎨 Customization

### Colors & Theming
Edit `tailwind.config.js` to customize colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your brand colors */ }
    }
  }
}
```

### Mock Data
Modify `src/data/mockData.js` to:
- Add more restaurants and menu items
- Change promo codes and discounts
- Update restaurant images and details

## 🚀 Production Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to any static hosting:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

## 📝 Demo Data

The app comes with sample data:
- **2 Restaurants**: Pizza Palace, Burger Junction
- **3+ Menu Items**: Various cuisines with images
- **2 Promo Codes**: Different discount types
- **Mock Orders**: For testing order history

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React + Vite + Tailwind CSS**

*This is a demo application for educational purposes. No real payments are processed.*