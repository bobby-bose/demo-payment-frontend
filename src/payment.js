import axios from 'axios';

function PayButton() {
  const handlePayment = async () => {
    try {
      const orderId = 'ORD' + Date.now(); // Unique order ID
      const response = await axios.post('https://backend-demo-payment-kqut.onrender.com/api/payment/create', {
        amount: 100,
        orderId,
        customerPhone: "9945399999"
      });

      if(response.data.paymentUrl){
        window.location.href = response.data.paymentUrl; // Redirect to PhonePe app
      }
    } catch (err) {
      console.error(err);
      alert('Payment failed!');
    }
  };

  return <button onClick={handlePayment}>Pay with PhonePe</button>;
}

export default PayButton;
      
