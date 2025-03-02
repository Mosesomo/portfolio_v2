import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa"; 
import { useEffect, useState } from 'react';

const Nav = ({ toggleSidebar }) => {
    const [scrolled, setScrolled] = useState(false);
    
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${scrolled ? 'bg-slate-950/95 backdrop-blur-md' : 'bg-slate-950'} w-full px-6 py-4 fixed top-0 left-0 right-0 flex justify-between items-center z-50 transition-all duration-300 ${scrolled ? 'shadow-lg shadow-orange-900/10' : 'border-b border-slate-800'}`}>
            <div className='flex items-center'>
                <span className='text-orange-300 font-bold text-2xl mr-8'>M<span className='text-white text-xl'>O</span></span>
                
                <div className='hidden md:flex gap-8 text-white'>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => 
                            `relative px-2 py-1 text-sm uppercase tracking-wider font-medium transition-colors duration-300 
                            ${isActive 
                                ? 'text-orange-300' 
                                : 'text-gray-200 hover:text-orange-300'}`
                        }
                        end
                    >
                        {({ isActive }) => (
                            <>
                                About
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-300 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </>
                        )}
                    </NavLink>
                    
                    <NavLink 
                        to='/portfolio' 
                        className={({ isActive }) => 
                            `relative px-2 py-1 text-sm uppercase tracking-wider font-medium transition-colors duration-300 
                            ${isActive 
                                ? 'text-orange-300' 
                                : 'text-gray-200 hover:text-orange-300'}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                Portfolio
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-300 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </>
                        )}
                    </NavLink>
                    
                    <NavLink 
                        to='/contact' 
                        className={({ isActive }) => 
                            `relative px-2 py-1 text-sm uppercase tracking-wider font-medium transition-colors duration-300 
                            ${isActive 
                                ? 'text-orange-300' 
                                : 'text-gray-200 hover:text-orange-300'}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                Contact
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-300 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                            </>
                        )}
                    </NavLink>
                </div>
            </div>
            
            <button
                onClick={toggleSidebar}
                className='text-white md:hidden p-2 rounded-md bg-slate-800/50 hover:bg-orange-500/20 hover:text-orange-300 transition-all duration-300'
                aria-label="Toggle sidebar"
            >
                <FaBars size={20} />
            </button>
        </div>
    );
};

export default Nav;