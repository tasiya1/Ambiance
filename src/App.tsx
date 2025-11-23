
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AmbiancePage from "../pages/AmbiancePage";
import LoginPage from "../pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AmbiancePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
