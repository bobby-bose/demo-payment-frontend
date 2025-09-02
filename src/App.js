import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhonePePayment from "./payment"; // your payment page
import PaymentResult from "./result";   // your result page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhonePePayment />} />          {/* Home / Pay Now page */}
        <Route path="/payment-result" element={<PaymentResult />} />  {/* Payment result page */}
      </Routes>
    </Router>
  );
}

export default App;
