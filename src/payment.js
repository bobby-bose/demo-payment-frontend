import { useState } from "react";
import axios from "axios";

export default function PhonePePayment() {
  const [loading, setLoading] = useState(false);

  const payNow = async () => {
    setLoading(true);
    try {
      // Call backend to create payment link
      const res = await axios.post("https://modern-chicken-decide.loca.lt/create-payment", {
        amount: 1,                // ₹1 default
        mobileNumber: "9999999999" // optional, can be dynamic
      });

      // Redirect user to PhonePe sandbox / deeplink
      window.location.href = res.data.payLink;
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Error creating payment link");
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Pay ₹1 via PhonePe</h1>
      <button onClick={payNow} disabled={loading}>
        {loading ? "Redirecting..." : "Pay Now"}
      </button>
    </div>
  );
}
