import { MdDeveloperBoardOff, MdAnalytics } from "react-icons/md";
import { SiPeakdesign } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";

const About = () => {
    // Services data array
    const services = [
        {
            id: 1,
            title: "Web App Development",
            icon: <MdDeveloperBoardOff size={40} className="text-orange-200" />,
            description: "I offer full-stack web application development, covering both frontend and backend aspects to create robust and scalable applications."
        },
        {
            id: 2,
            title: "Website Design",
            icon: <SiPeakdesign size={40} className="text-orange-200" />,
            description: "I provide professional and responsive website design services, ensuring a visually appealing and user-friendly experience across all devices."
        },
        {
            id: 3,
            title: "Automation",
            icon: <TbSettingsAutomation size={40} className="text-orange-200" />,
            description: "I offer automation services to streamline your business processes, including task automation, workflow optimization, and custom tool development."
        },
        {
            id: 4,
            title: "Data Analysis",
            icon: <MdAnalytics size={40} className="text-orange-200" />,
            description: "I provide data analysis services, helping you make data-driven decisions through insights, reporting, and visualization of your data."
        }
    ];

    return (
        <div className='p-6 w-full mt-16 md:ml-[172px] lg:ml-[162px] text-white transition-all duration-300 min-h-screen bg-slate-950'>
            <div className='max-w-5xl mx-auto'>
                <div className='flex flex-col items-center mb-12'>
                    <h3 className='text-orange-200 font-bold text-3xl mt-6'>About Me</h3>
                    <div className='border-b-4 border-orange-300 w-24 mt-3'></div>
                    <p className='text-gray-300 mt-6 text-center max-w-3xl leading-relaxed'>
                        Hi, I'm Moses Omondi, a versatile software developer with a strong foundation in both frontend and backend technologies.
                        I specialize in building and customizing websites using modern frameworks like React JS, alongside core web technologies
                        such as HTML, CSS, and JavaScript. On the backend, I'm proficient in Node.js and Express, with extensive experience working with both NoSQL
                        (MongoDB) and SQL (PostgreSQL) databases. Additionally, I have a solid background in developing applications with Flask, leveraging Python's power
                        for efficient and scalable solutions.
                    </p>
                </div>
                
                <div className='flex flex-col items-center mb-10'>
                    <h3 className='text-orange-200 font-bold text-2xl'>Services I Offer</h3>
                    <div className='border-b-4 border-orange-300 w-32 mt-3'></div>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                    {services.map((service) => (
                        <div key={service.id} className='group relative overflow-hidden rounded-lg shadow-lg bg-slate-900 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-orange-900/10 hover:shadow-xl'>
                            <div className='p-6'>
                                <div className='bg-slate-950 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                                    {service.icon}
                                </div>
                                <h4 className='text-orange-200 font-bold text-xl mb-3'>{service.title}</h4>
                                <p className='text-gray-300 leading-relaxed'>{service.description}</p>
                            </div>
                            <div className='absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
                        </div>
                    ))}
                </div>
                
                <div className='mt-16 p-6 rounded-lg bg-slate-900 shadow-lg'>
                    <h3 className='text-orange-200 font-bold text-xl mb-4'>Technical Skills</h3>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {['React', 'JavaScript', 'HTML/CSS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python', 'Flask'].map((skill, index) => (
                            <div key={index} className='px-4 py-2 bg-slate-950 rounded-full text-center text-gray-300 hover:text-orange-200 hover:bg-slate-800 transition duration-300'>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;