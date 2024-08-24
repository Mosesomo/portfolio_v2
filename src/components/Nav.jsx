import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa"; 

const Nav = ({ toggleSidebar }) => {
    return (
        <div className='bg-slate-950 w-full p-3 rounded-b-md fixed top-0 flex justify-between items-center'>
            <div className='text-white flex gap-5'>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => 
                        isActive ? 'font-bold text-orange-300' : 'font-bold hover:text-orange-300'
                    }
                    end
                >
                    About
                </NavLink>
                <NavLink 
                    to='/portfolio' 
                    className={({ isActive }) => 
                        isActive ? 'font-bold text-orange-300' : 'font-bold hover:text-orange-300'
                    }
                >
                    Portfolio
                </NavLink>
                <NavLink 
                    to='/contact' 
                    className={({ isActive }) => 
                        isActive ? 'font-bold text-orange-300' : 'font-bold hover:text-orange-300'
                    }
                >
                    Contact
                </NavLink>
            </div>
            <button
                onClick={toggleSidebar}
                className='text-white md:hidden'>
                <FaBars size={24} />
            </button>
        </div>
    );
};

export default Nav;
