import React from 'react';
// Import your images here
import backgroundImg from './backgroundImg.png';
import placeholderImg from './placeholderImg.png';

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    color: 'white',
    textShadow: '0px 0px 3px black',
    padding: '50px',
  },
  mainContent: {
    padding: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: 'auto',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
  },
  submitButton: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  },
  footer: {
    backgroundColor: '#f3f3f3',
    padding: '20px',
    textAlign: 'center',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
  },
};

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Inspery</h1>
        <p>Boost your restaurant's revenue with every bite.</p>
        <p>Turn every meal into a loyalty experience - bring back 5% of your customers and grow your profits by up to 95%.</p>
      </header>
      <main style={styles.mainContent}>
        <h2>Join for early access rewards!</h2>
        <p>Welcome to Inspery, where we believe every dining experience should be rewarding...</p>
        <form style={styles.form}>
          <input type="text" placeholder="Name" style={styles.input} />
          <input type="email" placeholder="E-Mail Address" style={styles.input} />
          <button type="submit" style={styles.submitButton}>Submit</button>
        </form>
      </main>
      <footer style={styles.footer}>
        <p>Inspery</p>
        <p>Lohmühlenstraße 65, 12435 Berlin</p>
        <p>+49 177 7008767</p>
        <p>contact@inspery.com</p>
        <ul style={styles.socialLinks}>
          {/* Add social media icons here */}
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
        </ul>
      </footer>
    </div>
  );
};

export default LandingPage;
