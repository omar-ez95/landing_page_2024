import React from 'react';
import './App.css'; // Assuming your CSS is named App.css
import Footer from './Footer.jsx'

function App() {
  // Placeholder image URLs - replace these with actual Unsplash image URLs.
  const headerImg = 'https://via.placeholder.com/1500x1000'; // Replace with actual image URL
  const sectionImg = 'https://via.placeholder.com/800x600'; // Replace with actual image URL

  return (
    <div className="app">

      <div class="container">
        <header>
          <h1 class="brand">Inspery</h1>
        </header>
        <section class="content">
          <h2>Boost your restaurant's revenue with every bite.</h2>
          <hr class="centered-hr" />
          <p>Turn every meal into a loyalty experience - bring back 5% of your customers and grow your profits by up to 95%.</p>
        </section>
      </div>


      <div class="wrapper">
        <div class="content2">
          <h1>Join for early access rewards!</h1>
          <hr />
          <p>Welcome to Inspery, where we believe every dining experience should be rewarding. In today's competitive market, it's not just about serving delicious food; it's about creating lasting relationships. Our innovative loyalty program is designed specifically for restaurants like yours, aiming to turn occasional diners into loyal enthusiasts.</p>
          <form action="#" method="post">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
            <label for="email">E-Mail-Address</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
            <button class="secondary" >Send</button>
            {/* <i class="material-icons">send</i> */}
          </form>
        </div>
        <div class="image">
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
