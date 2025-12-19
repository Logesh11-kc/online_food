// Backup food images
const foodImages = {
  pizza: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300",
  burger: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300",
  indian: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300",
  sushi: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300",
  taco: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300",
  dessert: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300"
};

export const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    rating: 4.5,
    deliveryTime: "25-30 min",
    cuisine: "Italian",
    isOpen: true,
    deliveryFee: 49,
    offers: ["50% off up to ₹100"],
    menu: [
      { id: 101, name: "Margherita Pizza", price: 299, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300", category: "Pizza", isVeg: true, isBestseller: true, description: "Fresh tomatoes, mozzarella cheese, basil" },
      { id: 102, name: "Pepperoni Pizza", price: 399, image: "https://img.freepik.com/premium-photo/photo-pepperoni-pizza-generated-by-ai_911060-18180.jpg" },
      { id: 103, name: "Veggie Supreme", price: 349, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300", category: "Pizza", isVeg: true, description: "Bell peppers, mushrooms, onions, olives" },
      { id: 104, name: "BBQ Chicken", price: 449, image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300", category: "Pizza", isVeg: false, isBestseller: true, description: "BBQ sauce, chicken, red onions" },
      { id: 105, name: "Garlic Bread", price: 149, image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=300", category: "Sides", isVeg: true, description: "Crispy bread with garlic butter" },
      { id: 106, name: "Caesar Salad", price: 199, image: "https://images.unsplash.com/photo-1512852939750-1305098529bf?w=300", category: "Salads", isVeg: true, description: "Fresh lettuce, parmesan, croutons" }
    ]
  },
  {
    id: 2,
    name: "Burger Junction",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    rating: 4.2,
    deliveryTime: "20-25 min",
    cuisine: "American",
    isOpen: true,
    deliveryFee: 39,
    offers: ["Buy 1 Get 1 Free"],
    menu: [
      { id: 201, name: "Classic Burger", price: 199, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300", category: "Burgers", isVeg: false, isBestseller: true, description: "Beef patty, lettuce, tomato, cheese" },
      { id: 202, name: "Veggie Burger", price: 179, image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300", category: "Burgers", isVeg: true, description: "Plant-based patty, lettuce, tomato" },
      { id: 203, name: "Chicken Deluxe", price: 249, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300", category: "Burgers", isVeg: false, isBestseller: true, description: "Grilled chicken, bacon, cheese" },
      { id: 204, name: "Fish Burger", price: 229, image: "https://static.vecteezy.com/system/resources/previews/038/973/270/large_2x/ai-generated-fishburger-in-a-brioche-bun-with-cheese-fresh-cucumber-tartar-sauce-ai-generated-photo.jpg", category: "Burgers", isVeg: false, description: "Crispy fish fillet, tartar sauce" },
      { id: 205, name: "French Fries", price: 99, image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=300", category: "Sides", isVeg: true, description: "Crispy golden fries" },
      { id: 206, name: "Onion Rings", price: 119, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300", category: "Sides", isVeg: true, description: "Crispy battered onion rings" },
      { id: 207, name: "Chocolate Shake", price: 149, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=300", category: "Beverages", isVeg: true, description: "Rich chocolate milkshake" }
    ]
  },
  {
    id: 3,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
    rating: 4.7,
    deliveryTime: "30-35 min",
    cuisine: "Indian",
    isOpen: true,
    deliveryFee: 29,
    offers: ["20% off on orders above ₹500"],
    menu: [
      { id: 301, name: "Butter Chicken", price: 349, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300", category: "Main Course", isVeg: false, isBestseller: true, description: "Creamy tomato curry with tender chicken" },
      { id: 302, name: "Paneer Tikka Masala", price: 299, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300", category: "Main Course", isVeg: true, isBestseller: true, description: "Grilled paneer in rich tomato gravy" },
      { id: 303, name: "Biryani", price: 279, image: "https://static.vecteezy.com/system/resources/previews/033/339/121/non_2x/ai-generative-a-of-biryani-photo.jpeg", category: "Rice", isVeg: false, isBestseller: true, description: "Fragrant basmati rice with spiced meat" },
      { id: 304, name: "Dal Tadka", price: 199, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300", category: "Main Course", isVeg: true, description: "Yellow lentils with aromatic spices" },
      { id: 305, name: "Naan Bread", price: 49, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300", category: "Bread", isVeg: true, description: "Soft Indian flatbread" },
      { id: 306, name: "Mango Lassi", price: 89, image: "https://img.freepik.com/premium-photo/classic-mango-lassi-tall-glass_1169880-113388.jpg", category: "Beverages", isVeg: true, description: "Sweet mango yogurt drink" }
    ]
  },
  {
    id: 4,
    name: "Sushi Zen",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
    rating: 4.6,
    deliveryTime: "35-40 min",
    cuisine: "Japanese",
    isOpen: true,
    deliveryFee: 59,
    offers: ["Free miso soup with orders above ₹800"],
    menu: [
      { id: 401, name: "California Roll", price: 399, image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300", category: "Sushi", isVeg: false, isBestseller: true, description: "Crab, avocado, cucumber" },
      { id: 402, name: "Salmon Sashimi", price: 549, image: "https://tse4.mm.bing.net/th/id/OIP.FbuZEkaFdY2fWuRCBzpwCgHaEp?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3", category: "Sashimi", isVeg: false, description: "Fresh salmon slices" },
      { id: 403, name: "Vegetable Tempura", price: 299, image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300", category: "Tempura", isVeg: true, description: "Crispy battered vegetables" },
      { id: 404, name: "Chicken Teriyaki", price: 449, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300", category: "Main Course", isVeg: false, isBestseller: true, description: "Grilled chicken with teriyaki sauce" },
      { id: 405, name: "Miso Soup", price: 149, image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300", category: "Soup", isVeg: true, description: "Traditional soybean soup" },
      { id: 406, name: "Green Tea", price: 79, image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300", category: "Beverages", isVeg: true, description: "Premium Japanese green tea" }
    ]
  },
  {
    id: 5,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400",
    rating: 4.3,
    deliveryTime: "25-30 min",
    cuisine: "Mexican",
    isOpen: true,
    deliveryFee: 45,
    offers: ["Free nachos with combo meals"],
    menu: [
      { id: 501, name: "Chicken Tacos", price: 249, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300", category: "Tacos", isVeg: false, isBestseller: true, description: "Grilled chicken with salsa" },
      { id: 502, name: "Beef Burrito", price: 299, image: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?w=300", category: "Burritos", isVeg: false, description: "Seasoned beef with rice and beans" },
      { id: 503, name: "Veggie Quesadilla", price: 199, image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=300", category: "Quesadillas", isVeg: true, description: "Cheese and vegetables in tortilla" },
      { id: 504, name: "Guacamole & Chips", price: 149, image: "https://images.unsplash.com/photo-1541544181051-e46607bc22a4?w=300", category: "Appetizers", isVeg: true, description: "Fresh avocado dip with tortilla chips" },
      { id: 505, name: "Churros", price: 129, image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=300", category: "Desserts", isVeg: true, description: "Cinnamon sugar pastry" }
    ]
  },
  {
    id: 6,
    name: "Pasta Corner",
    image: "https://cf0316.s3.amazonaws.com/cookificom/dishes/12356/a98c1b.jpg",
    rating: 4.4,
    deliveryTime: "20-25 min",
    cuisine: "Italian",
    isOpen: true,
    deliveryFee: 35,
    offers: ["Free garlic bread with pasta"],
    menu: [
      { id: 601, name: "Spaghetti Carbonara", price: 329, image: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=300", category: "Pasta", isVeg: false, isBestseller: true, description: "Creamy pasta with bacon and eggs" },
      { id: 602, name: "Penne Arrabbiata", price: 279, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300", category: "Pasta", isVeg: true, description: "Spicy tomato sauce pasta" },
      { id: 603, name: "Lasagna", price: 399, image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=300", category: "Pasta", isVeg: false, isBestseller: true, description: "Layered pasta with meat sauce" },
      { id: 604, name: "Mushroom Risotto", price: 349, image: "https://static.vecteezy.com/system/resources/previews/026/511/454/non_2x/mushroom-risotto-ai-generated-photo.jpg", category: "Rice", isVeg: true, description: "Creamy rice with mushrooms" }
    ]
  },
  {
    id: 7,
    name: "Dessert Paradise",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400",
    rating: 4.8,
    deliveryTime: "15-20 min",
    cuisine: "Desserts",
    isOpen: true,
    deliveryFee: 25,
    offers: ["Buy 2 Get 1 Free on cakes"],
    menu: [
      { id: 701, name: "Chocolate Cake", price: 299, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300", category: "Cakes", isVeg: true, isBestseller: true, description: "Rich chocolate layer cake" },
      { id: 702, name: "Cheesecake", price: 249, image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300", category: "Cakes", isVeg: true, description: "Creamy New York style cheesecake" },
      { id: 703, name: "Ice Cream Sundae", price: 179, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300", category: "Ice Cream", isVeg: true, description: "Vanilla ice cream with toppings" },
      { id: 704, name: "Tiramisu", price: 229, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300", category: "Desserts", isVeg: true, isBestseller: true, description: "Italian coffee-flavored dessert" }
    ]
  },
  {
    id: 8,
    name: "Healthy Bites",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    rating: 4.5,
    deliveryTime: "20-25 min",
    cuisine: "Healthy",
    isOpen: true,
    deliveryFee: 39,
    offers: ["Free smoothie with salad bowls"],
    menu: [
      { id: 801, name: "Quinoa Bowl", price: 299, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300", category: "Bowls", isVeg: true, isBestseller: true, description: "Quinoa with fresh vegetables" },
      { id: 802, name: "Grilled Chicken Salad", price: 249, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300", category: "Salads", isVeg: false, description: "Mixed greens with grilled chicken" },
      { id: 803, name: "Avocado Toast", price: 199, image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300", category: "Toast", isVeg: true, description: "Multigrain bread with avocado" },
      { id: 804, name: "Green Smoothie", price: 149, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300", category: "Beverages", isVeg: true, description: "Spinach, apple, and banana smoothie" }
    ]
  }
];

export const promoCodes = [
  { code: "WELCOME50", discount: 50, minOrder: 200 },
  { code: "SAVE100", discount: 100, minOrder: 500 },
  { code: "FIRST25", discount: 25, minOrder: 150 },
  { code: "WEEKEND20", discount: 20, minOrder: 300 },
  { code: "FREEDEL", discount: 0, minOrder: 299, freeDelivery: true }
];