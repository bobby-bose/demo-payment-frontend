import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PaymentResult() {
  const location = useLocation();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paymentStatus = params.get("status"); // PhonePe can pass success/failure
    setStatus(paymentStatus);
  }, [location]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Payment Status</h1>
      <p>{status === "SUCCESS" ? "Payment Successful ✅" : "Payment Failed ❌"}</p>
    </div>
  );
}
