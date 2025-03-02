import musa from '../assets/musa.jpg';
import { MdOutlineEmail, MdLocalPhone, MdFileDownload, MdClose } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCode, FaDatabase } from "react-icons/fa";
import { useEffect } from 'react';

const Sidebar = ({ isVisible, toggleSidebar }) => {
    // Prevent scrolling when sidebar is open on mobile
    useEffect(() => {
        if (isVisible && window.innerWidth < 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isVisible]);

    return (
        <>
            {/* Sidebar overlay (mobile only) */}
            {isVisible && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
            
            <div className={`fixed inset-y-0 left-0 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-all duration-300 ease-in-out bg-gradient-to-b from-gray-900 to-slate-950 h-full w-[300px] text-white overflow-y-auto z-40 shadow-2xl`}>
                {/* Close button (mobile only) */}
                <button 
                    className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/50 text-gray-400 hover:text-white md:hidden"
                    onClick={toggleSidebar}
                >
                    <MdClose size={20} />
                </button>
                
                <div className='flex flex-col items-center pt-12 pb-6 px-6 mt-12'>
                    <div className='relative w-32 h-32 rounded-full overflow-hidden border-4 border-orange-300/20 shadow-xl shadow-orange-900/10 group'>
                        <img 
                            className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110' 
                            src={musa} 
                            alt="Moses Omondi" 
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    </div>
                    
                    <h3 className='mt-5 font-bold text-xl'>Moses Omondi</h3>
                    
                    <div className='flex gap-2 mt-3'>
                        <span className='inline-flex items-center gap-1 px-3 py-1 bg-slate-800/80 rounded-full text-xs font-medium text-orange-200'>
                            <FaCode size={12} />
                            Developer
                        </span>
                        <span className='inline-flex items-center gap-1 px-3 py-1 bg-slate-800/80 rounded-full text-xs font-medium text-orange-200'>
                            <FaDatabase size={12} />
                            Analyst
                        </span>
                    </div>
                </div>
                
                <div className='h-px bg-gradient-to-r from-transparent via-orange-300/20 to-transparent w-full'></div>
                
                <div className='p-6 space-y-4'>
                    <a href="mailto:moseswamboga4@gmail.com" className='flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-orange-300/10'>
                        <div className='bg-slate-800 p-2.5 rounded-md text-orange-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg'>
                            <MdOutlineEmail size={18} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs text-gray-400'>Email</span>
                            <span className='font-medium text-sm group-hover:text-orange-200 transition-colors duration-300'>moseswamboga4@gmail.com</span>
                        </div>
                    </a>
                    
                    <a href="https://github.com/Mosesomo" target='_blank' rel="noopener noreferrer" className='flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-orange-300/10'>
                        <div className='bg-slate-800 p-2.5 rounded-md text-orange-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg'>
                            <FaGithub size={18} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs text-gray-400'>GitHub</span>
                            <span className='font-medium text-sm group-hover:text-orange-200 transition-colors duration-300'>Mosesomo</span>
                        </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/moses-wamboga-698a8825" target='_blank' rel="noopener noreferrer" className='flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-orange-300/10'>
                        <div className='bg-slate-800 p-2.5 rounded-md text-orange-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg'>
                            <FaLinkedin size={18} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs text-gray-400'>LinkedIn</span>
                            <span className='font-medium text-sm group-hover:text-orange-200 transition-colors duration-300'>Moses Wamboga</span>
                        </div>
                    </a>
                    
                    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group border border-transparent hover:border-orange-300/10'>
                        <div className='bg-slate-800 p-2.5 rounded-md text-orange-300 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-lg'>
                            <MdLocalPhone size={18} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-xs text-gray-400'>Phone</span>
                            <span className='font-medium text-sm group-hover:text-orange-200 transition-colors duration-300'>+254 758 171 116</span>
                        </div>
                    </div>
                </div>
                
                <div className='px-6 pb-8 mt-4'>
                    <div className='h-px bg-gradient-to-r from-transparent via-orange-300/20 to-transparent w-full mb-6'></div>
                    
                    <a 
                        href='https://drive.google.com/file/d/1XqPVjVE1fViIsWY0opb8VA48F7q46vfi/view?usp=sharing'
                        target='_blank'
                        rel="noopener noreferrer" 
                        className='block'
                    >
                        <button className='flex items-center justify-center gap-2 w-full p-3 rounded-lg font-bold text-white transition-all duration-500 relative overflow-hidden group'>
                            <span className='absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-105 transition-transform duration-500'></span>
                            <span className='absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_10%,_transparent_70%)] group-hover:bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_10%,_transparent_70%)]'></span>
                            <span className='relative flex items-center justify-center gap-2'>
                                <MdFileDownload size={20} className='animate-bounce group-hover:animate-none' />
                                Download CV
                            </span>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Sidebar;