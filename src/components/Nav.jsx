import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='bg-slate-950 w-[340px] p-3 rounded-b-md fixed top-0'>
            <div className='w-full text-white flex gap-5'>
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
        </div>
    );
};

export default Nav;
