import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import Destination from "./pages/destination.jsx";
import Crew from "./pages/crew.jsx";
import Technology from "./pages/technology.jsx";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination/>} />
          <Route path="/crew" element={<Crew/>} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/" element={<Navigate replace to ="/home" />} />
        </Routes>
      </Router>
  );
}

export default App;
