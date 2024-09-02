import profile from '../assets/profile.jpg';
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = ({ isVisible }) => {
    return (
        <div className={`fixed inset-y-0 left-0 transform ${isVisible ? 'translate-x-0' : '-translate-x-full'} md:transform-none transition-transform duration-300 ease-in-out bg-gray-900 md:bg-transparent h-full w-[260px] md:w-auto p-5 text-white md:static md:block md:h-auto rounded-md`}>
            <div className='flex justify-center w-full'>
                <img className='object-cover rounded-full w-[112px] h-[112px] text-center mt-8' src={profile} alt="" />
            </div>
            <h3 className='mt-6 text-center font-bold'>Moses Omondi</h3>
            <h2 className='mt-2 text-center font-semibold text-sm bg-slate-400 p-1 rounded-md'>Software Engineer & Data Analyst</h2>
            <div className='border-[1px] border-gray-300 w-full mt-5'></div>
            <div className='mt-6 flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                    <MdOutlineEmail size={32} className='text-orange-200 bg-slate-950 p-2 rounded-md'/>
                    <a className='font-semibold hover:text-orange-200 transition duration-300 ease-in-out' href="mailto:moseswamboga4@gmail.com">Email</a>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaGithub size={32} className='text-orange-200 bg-slate-950 p-2 rounded-md'/>
                    <a className='font-semibold hover:text-orange-200 transition duration-300 ease-in-out' href="https://github.com/Mosesomo"  target='_blank' rel="noopener noreferrer">GitHub</a>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaLinkedin size={32} className='text-orange-200 bg-slate-950 p-2 rounded-md'/>
                    <a className='font-semibold hover:text-orange-200 transition duration-300 ease-in-out' href="https://www.linkedin.com/in/moses-wamboga-698a8825"  target='_blank' rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className='flex gap-2 items-center'>
                    <MdLocalPhone size={32} className='text-orange-200 bg-slate-950 p-2 rounded-md'/>
                    <p className='font-semibold hover:text-orange-200 transition duration-300 ease-in-out'>254758171116</p>
                </div>
            </div>
            <div className='border-[1px] border-gray-300 w-full mt-8'></div>
            <div className='mt-28'>
                <a href='https://drive.google.com/file/d/1ad11v4m6g67cxlaCUKMAFlD4ky4h0v0j/view?usp=sharing'>
                    <button className='bg-orange-500 w-full p-2 text-center rounded-md font-semibold hover:bg-slate-950'>Download CV</button>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
