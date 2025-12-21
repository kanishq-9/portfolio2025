import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import JoinMe from "./components/JoinMe";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./css/app.css";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <main className="app-main">

    
    <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
        <JoinMe />
        <Footer />
        </main>
    </BrowserRouter>
  );
}

export default App;
