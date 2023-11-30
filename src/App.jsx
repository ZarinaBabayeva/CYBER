import "./App.css";
import "./AppResponse.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Hackers from "./pages/Hackers";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackers" element={<Hackers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
