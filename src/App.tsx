import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage"; // Added LoginPage import

function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} /> {/* Added Login route */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
