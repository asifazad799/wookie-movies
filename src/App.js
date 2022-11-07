import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

const LandingPage = lazy(() => import("./Pages/LandingPage"));

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
