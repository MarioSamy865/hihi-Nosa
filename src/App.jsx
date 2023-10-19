import './App.css';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from './pages/Login';
import Lucky from './pages/Lucky';
import PD from './pages/PD';
import Perks from './pages/Perks';
import Drawbacks from './pages/Drawbacks';
import Songs from './pages/Songs';
import Final from './pages/Final';


import Unlucky from './pages/Unlucky';
import Denied from './pages/Denied';



export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lucky" element={<Lucky />} />
      <Route path="/p&d" element={<PD />} />
      <Route path="/perks" element={<Perks />} />
      <Route path="/drawbacks" element={<Drawbacks />} />
      <Route path="/songs" element={<Songs />} />
      <Route path="/final" element={<Final />} />

      <Route path="/unlucky" element={<Unlucky />} />
      <Route path="/denied" element={<Denied />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}