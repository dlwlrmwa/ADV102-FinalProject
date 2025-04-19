import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";


function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
