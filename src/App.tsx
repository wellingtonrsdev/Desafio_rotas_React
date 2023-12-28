import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/Home/About";
import NotFound from "./routes/Home/NotFound";
import Products from "./routes/Home/Products";
import Books from "./routes/Home/Products/Books";
import Computers from "./routes/Home/Products/Computers";
import Electronics from "./routes/Home/Products/Electronics";
import Welcome from "./routes/Home/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<Welcome />} />
          <Route path="products" element={<Products />}>
            <Route path="/products" element={<Navigate to="/products/computers" />}/>
            <Route path="computers" element={<Computers />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="books" element={<Books />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
