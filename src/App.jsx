import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import Sidebar from './components/SideBar';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="flex justify-start">
        <Sidebar />
        <div className='p-4 pl-0 pb-6 w-full'>
          <div className='bg-gray-900 lg:h-[667px]'>
            <Router>
              <Nav />
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Router>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Button */}
      <div className='fixed bottom-5 right-6'>
        <a
          href="https://wa.me/+254758171116"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 text-white rounded-full h-[67px] w-[67px] hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110 animate-pulseGreen"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>
    </div>
  );
};

export default App;
