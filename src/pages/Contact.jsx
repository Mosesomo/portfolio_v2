import React from 'react';
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from 'react-icons/md';

const Contact = () => {
    // Contact info items
    const contactInfo = [
        {
            id: 1,
            icon: <MdOutlineEmail size={24} />,
            title: "Email",
            value: "mosesomondi260@gmail.com",
            link: "mailto:mosesomondi260@gmail.com"
        },
        {
            id: 2,
            icon: <MdOutlinePhone size={24} />,
            title: "Phone",
            value: "+254 706 737 539",
            link: "tel:+254706737539"
        },
        {
            id: 3,
            icon: <MdOutlineLocationOn size={24} />,
            title: "Location",
            value: "Nairobi, Kenya",
            link: null
        }
    ];

    return (
        <div className='p-6 w-full mt-16 md:ml-[172px] lg:ml-[162px] text-white transition-all duration-300 min-h-screen bg-slate-950'>
            <div className='max-w-5xl mx-auto'>
                <div className='flex flex-col items-center mb-12'>
                    <h3 className='text-orange-200 font-bold text-3xl mt-6'>Contact Me</h3>
                    <div className='border-b-4 border-orange-300 w-24 mt-3'></div>
                    <p className='text-gray-300 mt-4 text-center max-w-2xl'>
                        I'm interested in freelance opportunities and collaborations. If you have a project that needs coding or want to discuss potential opportunities, feel free to reach out!
                    </p>
                </div>
                
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10'>
                    {contactInfo.map(item => (
                        <div key={item.id} className='bg-slate-900 rounded-lg p-6 shadow-lg hover:shadow-orange-900/10 hover:shadow-xl transition duration-300 transform hover:-translate-y-1'>
                            <div className='flex flex-col items-center text-center'>
                                <div className='bg-slate-950 rounded-full p-4 mb-4 text-orange-200'>
                                    {item.icon}
                                </div>
                                <h4 className='text-orange-200 font-bold mb-2'>{item.title}</h4>
                                {item.link ? (
                                    <a href={item.link} className='text-gray-300 hover:text-orange-200 transition duration-300'>
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className='text-gray-300'>{item.value}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='bg-slate-900 rounded-lg shadow-lg overflow-hidden'>
                    <div className='p-6 border-b border-slate-700'>
                        <h4 className='text-orange-200 font-bold text-xl'>Send Me a Message</h4>
                        <p className='text-gray-300 mt-2'>I'd love to hear from you!</p>
                    </div>
                    
                    <div className='p-6'>
                        <form action="https://formspree.io/f/xqazwapq" method="POST">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-orange-200 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="block w-full px-4 py-3 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-slate-950 text-white transition duration-300"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-orange-200 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="_replyto"
                                        className="block w-full px-4 py-3 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-slate-950 text-white transition duration-300"
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-sm font-medium text-orange-200 mb-1">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="block w-full px-4 py-3 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-slate-950 text-white transition duration-300"
                                />
                            </div>
                            
                            <div className="mb-5">
                                <label htmlFor="message" className="block text-sm font-medium text-orange-200 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="block w-full px-4 py-3 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent bg-slate-950 text-white transition duration-300 resize-none"
                                    required
                                />
                            </div>
                            
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50 transition duration-300 transform hover:-translate-y-1"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="flex justify-center items-center mt-12 text-gray-400">
                    <p>© {new Date().getFullYear()} Moses Omondi. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;