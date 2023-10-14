import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
