import "./App.css";
import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter2 from "./Components/Counter_2";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/Counter" element={<Counter2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
