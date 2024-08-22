import { MdDeveloperBoardOff, MdAnalytics } from "react-icons/md";
import { SiPeakdesign } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";

const About = () => {
    return (
        <div className='p-3 w-full mt-6 text-white'>
            <h2 className='text-orange-300 font-bold text-3xl'>About</h2>
            <div className='border-2 border-orange-300 w-[100px] mt-5'></div>
            <p className='mt-6'>
                Hi, I'm Moses Omondi, a versatile software developer with a strong foundation in both frontend and backend technologies.
                I specialize in building and customizing websites using modern frameworks like React JS, alongside core web technologies
                such as HTML, CSS, and JavaScript. On the backend, I'm proficient in Node.js and Express, with extensive experience working with both NoSQL
                (MongoDB) and SQL (PostgreSQL) databases. Additionally, I have a solid background in developing applications with Flask, leveraging Python's power
                for efficient and scalable solutions.
            </p>
            <h2 className='mt-12 font-bold text-2xl text-orange-200'>Services I offer</h2>
            <div className='border-[1px] border-orange-300 w-[178px] mt-5'></div>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
                <div className='bg-slate-950 p-4 rounded-md'>
                    <h4 className='font-bold text-xl mb-3 text-center'>Web App Development</h4>
                    <div className='flex justify-between items-center gap-2'>
                        <MdDeveloperBoardOff size={34} className='text-orange-200 w-full' w-full/>
                        <p className='italic'>
                            I offer full-stack web application development, covering both frontend and backend aspects to create robust and scalable applications.
                        </p>
                    </div>
                </div>
                <div className='bg-slate-950 p-4 rounded-md'>
                    <h4 className='font-bold text-xl mb-3 text-center'>Website Design</h4>
                    <div className='flex justify-between items-center gap-2'>
                        <SiPeakdesign size={34} className='text-orange-200 w-full'/>
                        <p className='italic'>
                            I provide professional and responsive website design services, ensuring a visually appealing and user-friendly experience across all devices.
                        </p>
                    </div>
                </div>
                <div className='bg-slate-950 p-4 rounded-md'>
                    <h4 className='font-bold text-xl mb-3 text-center'>Automation</h4>
                    <div className='flex justify-between items-center gap-2'>
                        <TbSettingsAutomation size={34} className='text-orange-200 w-full'/>
                        <p className='italic'>
                            I offer automation services to streamline your business processes, including task automation, workflow optimization, and custom tool development.
                        </p>
                    </div>
                </div>
                <div className='bg-slate-950 p-4 rounded-md'>
                    <h4 className='font-bold text-xl mb-3 text-center'>Data Analysis</h4>
                    <div className='flex justify-between items-center gap-2'>
                        <MdAnalytics size={34} className='text-orange-200 w-full'/>
                        <p className='italic'>
                            I provide data analysis services, helping you make data-driven decisions through insights, reporting, and visualization of your data.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default About