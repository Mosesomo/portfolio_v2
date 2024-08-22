import bot from '../assets/bot.png'

const Portfolio = () => {
    return (
        <div className='p-3 w-full mt-6 text-white'>
            <h3 className='text-orange-200 font-bold text-2xl mt-6'>Portfolio</h3>
            <div className='border-2 border-orange-300 w-[160px] mt-3'></div>
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
                <div className='bg-slate-950 p-3'>
                    <a href=''>
                        <img className='w-full object-cover rounded-md hover:bg-opacity/80' src={bot}></img>
                    </a>
                </div>
                <div className='bg-slate-950 p-3 rounded-md'>
                    <a href=''>
                        <img className='w-full object-cover rounded-md hover:bg-opacity/80' src={bot}></img>
                    </a>
                </div>
                <div className='bg-slate-950 p-3 rounded-md'>
                    <a href=''>
                        <img className='w-full object-cover rounded-md hover:bg-opacity/80' src={bot}></img>
                    </a>
                </div>
                <div className='bg-slate-950 p-3 rounded-md'>
                    <a href=''>
                        <img className='w-full object-cover rounded-md hover:bg-opacity/80' src={bot}></img>
                    </a>
                </div>
                <div className='bg-slate-950 p-3 rounded-md'>
                    <a href=''>
                        <img className='w-full object-cover rounded-md hover:bg-opacity/80' src={bot}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio