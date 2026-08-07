import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Coming from "./pages/Coming";
import ScrollToHash from "./components/nav/ScrollToHash";

function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming" element={<Coming />} />
      </Routes>
    </>
  );
}

export default App;