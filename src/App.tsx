import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Coming from "./pages/Coming";
import ScrollToHash from "./components/nav/ScrollToHash";
import About from "./pages/About";
import Assessments from "./pages/Assessments";
import Tools from "./pages/Tools";
import Standards from "./pages/Standards";
function App() {
  return (
    <>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming" element={<Coming />} />
        <Route path="/about" element={<About />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/standards" element={<Standards />} />
      </Routes>
    </>
  );
}

export default App;