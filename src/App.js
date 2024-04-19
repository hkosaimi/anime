import Test from "./components/Test";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [show, setShow] = useState(false);
  setTimeout(() => {
    setShow(true);
  }, 4000);
  return (
    <>
      <HashRouter>
        <Test />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
