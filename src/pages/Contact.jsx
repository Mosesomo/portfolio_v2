import React from 'react';

const Contact = () => {
    return (
        <div className='p-3 w-full mt-6 text-white h-full'>
            <h3 className='text-orange-200 font-bold text-2xl mt-7'>Contact Me</h3>
            <div className='border-2 border-orange-300 w-[160px] mt-3'></div>
            <div className='bg-slate-950 p-6 rounded-md mt-6 max-w-[564px]'>
                <form action="https://formspree.io/f/xqazwapq" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-orange-200">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm bg-slate-900 text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-orange-200">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="_replyto"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm bg-slate-900 text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-orange-200">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-300 focus:border-orange-300 sm:text-sm bg-slate-900 text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-400 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
