import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayButton from "./payment"; // your payment page
import PaymentResult from "./result";   // your result page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PayButton />} />          {/* Home / Pay Now page */}
        <Route path="/payment-result" element={<PaymentResult />} />  {/* Payment result page */}
      </Routes>
    </Router>
  );
}

export default App;
