import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PayButton from "./PayButton";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pass amount in paise and customer phone */}
        <Route path="/" element={<PayButton amount={10000} customerPhone="9945399999" />} />
      </Routes>
    </Router>
  );
}

export default App;
