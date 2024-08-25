import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [menuItems] = useState([
    'Pizza Margherita',
    'Pasta Carbonara',
    'Caesar Salad',
    'Grilled Mashroom',
    'Chocolate Cake'
  ]);

  useEffect(() => {
   
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to Priyanka-only veg </h1>
      </header>
      
      <main>
        <section className="order-form-container">
          <h2>Order Form</h2>
          <form id="orderForm" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer Name:</label>
            <input type="text" id="customerName" name="customerName" required placeholder="" />
            
            <label htmlFor="contactNumber">Contact Number:</label>
            <input type="tel" id="contactNumber" name="contactNumber" required placeholder="" />
            
            <label htmlFor="menuItem">Menu Item:</label>
            <select id="menuItem" name="menuItem" required>
              {menuItems.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
            
            <label htmlFor="itemQuantity">Item Quantity:</label>
            <input type="number" id="itemQuantity" name="itemQuantity" min="1" max="3" required />
            
            <label htmlFor="specialInstructions">Special Instructions:</label>
            <textarea id="specialInstructions" name="specialInstructions" rows="4" placeholder="Any special requests?"></textarea>
            
            <div className="checkbox-container">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">I agree to the <a href="terms.html" target="_blank" rel="noopener noreferrer">Terms and Conditions</a></label>
            </div>
            
            <button type="submit" id="orderNowButton">Order Now</button>
            <button type="reset" id="resetButton">Reset</button>
          </form>
        </section>
        
        <section className="image-gallery">
          <h2>Popular Dishes</h2>
          <img src="pizza.jpeg" alt="Dish 1" />
          <img src="friedRice.jpeg" alt="Dish 2" />
          <img src="platter.jpge" alt="Dish 3" />
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 Restaurant Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
