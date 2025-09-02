import axios from 'axios';

function PayButton() {
  const handlePayment = async () => {
    try {
      const orderId = 'ORD' + Date.now();

    const response = await axios.post(
  'https://backend-demo-payment-kqut.onrender.com/api/payment/create',
  { orderId: 'ORD' + Date.now(), customerPhone: '7012085349' },
  { headers: { 'Content-Type': 'application/json' } }
);


      if (response.data.paymentUrl) {
        window.location.href = response.data.paymentUrl; // Redirect to PhonePe
      } else {
        alert('Payment failed: Payment link not returned from server.');
        console.error('[ERROR] Payment failed: Payment link missing', response.data);
      }
    } catch (err) {
      // Capture HTTP status and error message from backend
      const status = err.response?.status || 'Network Error';
      const message = err.response?.data?.error || err.message;

      console.error('[ERROR] Payment failed:', err.response?.data || err.message);
      alert(`Payment failed!\nStatus: ${status}\nMessage: ${message}`);
    }
  };

  return <button onClick={handlePayment}>Pay with PhonePe</button>;
}

export default PayButton;
