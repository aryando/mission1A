import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Login";
import Beranda from "./pages/Beranda";
import Register from "./pages/Register";


export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Beranda" element={<Beranda />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </Router>
    )
}