import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import ScrollToTop from "./components/Scroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book" element={<Book />} />
            </Routes>
        </Router>
    );
}

export default App;
