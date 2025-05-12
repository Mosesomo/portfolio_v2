import { useState } from 'react';
import bot from '../assets/bot.png'
import blog from '../assets/blog.png'
import reales from '../assets/reales.png'
import netflix from '../assets/netflix.png'
import vote from '../assets/vote.png'
import sussum from '../assets/sussum.png'
import lm from '../assets/lm.png'
import event from '../assets/event.png'
import shop from '../assets/shop.png'

const Portfolio = () => {
    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;

    // Project descriptions that will appear on hover
    const projects = [
        {
            id: 1,
            title: "Carlteq Ecommerce Shop",
            image: shop,
            url: "https://shop.carlteq.com",
            description: "A comprehensive mini ecommerce shop for carlteq built using MERN stack, still in progress"
        },
        {
            id: 2,
            title: "Digital Event Organizer Application",
            image: event,
            url: "https://catch-app-one.vercel.app/",
            description: "A comprehensive event management platform that helps users plan, organize, and execute events seamlessly. Features include event scheduling, attendee management, and real-time updates."
        },
        {
            id: 3,
            title: "Healthcare System",
            image: bot,
            url: "https://healthcarechatbot-9nij.onrender.com/",
            description: "An AI-powered healthcare chatbot that provides medical information and assistance to users. Features symptom analysis and medical advice."
        },
        {
            id: 4,
            title: "Library Management System",
            image: lm,
            url: "https://library-management-1-smd2.onrender.com/books",
            description: "Digital library system for cataloging, borrowing, and managing books with search functionality and user accounts."
        },
       
        {
            id: 5,
            title: "Real Estate Finder",
            image: reales,
            url: "https://estate-finder.onrender.com/",
            description: "A property search platform that helps users find homes based on location, budget, and preferences with interactive maps."
        },
        {
            id: 6,
            title: "Digital financial services platform",
            image: sussum,
            url: "https://subssum-seven.vercel.app/",
            description: "A modern digital finance platform that enables users to manage their wallet balance, buy airtime, pay bills, and make seamless transactions."
        },
        {
            id: 7,
            title: "Movie Recommender Application",
            image: netflix,
            url: "https://dulcet-cranachan-2aeddc.netlify.app/",
            description: "Netflix-inspired application that recommends movies and shows based on user preferences and viewing history."
        },
        {
            id: 8,
            title: "Voting Application",
            image: vote,
            url: "https://github.com/Mosesomo/online-voting-system",
            description: "Secure online voting system with user authentication, real-time results, and tamper-proof vote recording."
        },
        {
            id: 9,
            title: "Blog Application",
            image: blog,
            url: "https://blog-7n5d.onrender.com/",
            description: "A full-featured blog platform with user authentication, post creation, commenting, and social sharing features."
        },
        
    ];

    // Logic for displaying current projects
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    // Calculate total pages
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Next and previous page handlers
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='p-6 w-full mt-16 md:ml-[172px] lg:ml-[162px] text-white transition-all duration-300 min-h-screen bg-slate-950'>
            <div className='max-w-5xl mx-auto'>
                <div className='flex flex-col items-center mb-12'>
                    <h3 className='text-orange-200 font-bold text-3xl mt-6'>My Portfolio</h3>
                    <div className='border-b-4 border-orange-300 w-24 mt-3'></div>
                    <p className='text-gray-300 mt-4 text-center max-w-2xl'>Explore my latest projects showcasing my development skills and creative solutions.</p>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
                    {currentProjects.map((project) => (
                        <div key={project.id} className='group relative overflow-hidden rounded-lg shadow-lg bg-slate-900 transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-orange-900/10 hover:shadow-xl'>
                            <a href={project.url} target='_blank' rel="noopener noreferrer" className='block relative'>
                                <div className='relative'>
                                    {/* Image */}
                                    <img 
                                        className='w-full h-52 object-cover transition-all duration-500 ease-in-out group-hover:opacity-20' 
                                        src={project.image} 
                                        alt={project.title}
                                    />
                                    
                                    {/* Overlay with description */}
                                    <div className='absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center p-6'>
                                        <h4 className='text-orange-200 font-bold text-xl mb-2'>{project.title}</h4>
                                        <p className='text-gray-200 text-sm leading-relaxed'>{project.description}</p>
                                        <div className='mt-4'>
                                            <span className='px-3 py-1 bg-orange-500/20 text-orange-200 rounded-full text-xs font-medium inline-block'>View Project</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Title bar at bottom */}
                                <div className='p-4 border-t border-slate-700 bg-slate-950'>
                                    <p className='font-semibold text-orange-200'>{project.title}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className='flex justify-center mt-12 mb-8'>
                    <div className='flex items-center space-x-2'>
                        <button 
                            onClick={goToPrevPage} 
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-slate-800 text-gray-500 cursor-not-allowed' : 'bg-slate-800 hover:bg-orange-500 text-white'} transition-colors duration-300`}
                        >
                            Prev
                        </button>
                        
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`w-10 h-10 rounded-lg ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'} transition-colors duration-300`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        
                        <button 
                            onClick={goToNextPage} 
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? 'bg-slate-800 text-gray-500 cursor-not-allowed' : 'bg-slate-800 hover:bg-orange-500 text-white'} transition-colors duration-300`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio