import pf from '../assets/pf.png'
import { MdOutlineEmail, MdLocalPhone } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="p-4 pb-6">
            <div className="hidden md:block bg-gray-900 h-[667px] w-[260px] p-5 text-white rounded-md">
                <div className='flex justify-center w-full'>
                    <img className='object-cover rounded-md w-[124px] text-center' src={pf} alt="" />
                </div>
                <h3 className='mt-6 text-center font-bold'>Moses Omondi</h3>
                <h2 className='mt-2 text-center font-semibold text-sm bg-slate-400 p-1 rounded-md'>Software Engineer | Data Analyst</h2>
                <div className='border-[1px] border-gray-300 w-full mt-5'></div>
                <div className='mt-6 flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <MdOutlineEmail size={32} className='text-orange-200 bg-slate-950 p-2 rounded-md'/>
                        <a className='font-semibold hover:text-orange-200 transition duration-300 ease-in-out' href="mailto:moseswamboga4@gmail.com">Email</a>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaGithub size={32} className='text-orange-200 bg-slate-950 p-2 rounded-md'/>
                        <a className='font-semibold hover:text-orange-200 transition duration-300 ease-in-out' href="https://github.com/Mosesomo">GitHub</a>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaLinkedin size={32} className='text-orange-200 bg-slate-950 p-2 rounded-md'/>
                        <a className='font-semibold hover:text-orange-200 transition duration-300 ease-in-out' href="https://www.linkedin.com/in/moses-wamboga-698a8825">Linkedln</a>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <MdLocalPhone size={32} className='text-orange-200 bg-slate-950 p-2 rounded-md'/>
                        <p className='font-semibold hover:text-orange-200 transition duration-300 ease-in-out'>254758171116</p>
                    </div>
                </div>
                <div className='border-[1px] border-gray-300 w-full mt-8'></div>
                <div className='mt-28'>
                    <a href='https://drive.google.com/file/d/1fHliqtD-khtaID08Yig9pJlQNHLvtkbm/view?usp=sharing'>
                        <button className='bg-orange-500 w-full p-2 text-center rounded-md font-semibold hover:bg-slate-950'>Download CV</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar