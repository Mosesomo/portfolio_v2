import pf from '../assets/pf.png'

const Sidebar = () => {
    return (
        <div className="p-4 pb-6">
            <div className="bg-gray-900 h-[700px] w-[260px] p-5 text-white rounded-md">
                <div className='flex justify-center w-full'>
                    <img className='object-cover rounded-md w-[124px] text-center' src={pf} alt="" />
                </div>
                <h3 className='mt-6 text-center font-semibold'>Moses Omondi</h3>
                <h2 className='mt-2 text-center font-semibold text-sm bg-slate-400 p-1 rounded-md'>Software Engineer | Data Analyst</h2>
                <div className='border-[1px] border-gray-300 w-full mt-5'></div>
                <div className='mt-6 flex flex-col gap-2'>
                    <div>
                        <a href="mailto:moseswamboga4@gmail.com">Email</a>
                    </div>
                    <div>
                        <a href="https://github.com/Mosesomo">GitHub</a>
                    </div>
                    <div>
                        <a href="http://">Linkedln</a>
                    </div>
                    <div>
                        <p>254758171116</p>
                    </div>
                </div>
                <div className='border-[1px] border-gray-300 w-full mt-8'></div>
                <div className='mt-5'>
                    <button className='bg-orange-500 p-2 text-center rounded-md font-semibold'>Download CV</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar