import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startPayment = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Call your Node.js backend endpoint
      const response = await axios.post('http://localhost:5000/api/start-payment');
      
      const { redirectUrl } = response.data;
      
      // Redirect the user
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        setError('No redirect URL received from the backend.');
      }

    } catch (err) {
      setError('An error occurred. Check the console for details.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>PhonePe Payment Gateway</h1>
      <p>Click the button below to start the payment process.</p>
      
      <button 
        onClick={startPayment} 
        disabled={isLoading}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        {isLoading ? 'Loading...' : 'Pay Now'}
      </button>

      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}

export default App;