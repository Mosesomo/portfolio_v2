import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './components/Nav';

const App = () => {
  return (
      <div className="h-screen bg-slate-950 w-full fixed flex">
        <Sidebar />
        <div className='p-1 pt-4 pb-6 w-full'>
          <div className='w-full bg-gray-900'>
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
   
  );
};

export default App;
