import bot from '../assets/bot.png'
import blog from '../assets/blog.png'
import reales from '../assets/reales.png'
import netflix from '../assets/netflix.png'
import vote from '../assets/vote.png'

const Portfolio = () => {
    return (
        <div className='p-3 w-full mt-6 text-white'>
            <h3 className='text-orange-200 font-bold text-2xl mt-6'>Portfolio</h3>
            <div className='border-2 border-orange-300 w-[160px] mt-3'></div>
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3'>
                <div className='bg-slate-950 p-3'>
                    <a href='https://healthcarechatbot-9nij.onrender.com/'>
                        <img className='w-full h-[176px] object-cover rounded-md hover:bg-opacity/80' src={bot}></img>
                    </a>
                    <p className='mt-3 font-semibold text-orange-200'>HealthCare system</p>
                </div>
                <div className='bg-slate-950 p-3 rounded-md'>
                    <a href='https://blog-7n5d.onrender.com/'>
                        <img className='w-full h-[176px] object-cover rounded-md hover:bg-opacity/80' src={blog}></img>
                    </a>
                    <p className='mt-3 font-semibold text-orange-200'>Blog Application</p>
                </div>
                <div className='bg-slate-950 p-3 rounded-md'>
                    <a href='https://estate-finder.onrender.com/'>
                        <img className='w-full h-[176px] object-cover rounded-md hover:bg-opacity/80' src={reales}></img>
                    </a>
                    <p className='mt-3 font-semibold text-orange-200'>Real Estate Finder</p>
                </div>
                <div className='bg-slate-950 p-3 rounded-md'>
                    <a href='https://dulcet-cranachan-2aeddc.netlify.app/'>
                        <img className='w-full h-[176px] object-cover rounded-md hover:bg-opacity/80' src={netflix}></img>
                    </a>
                    <p className='mt-3 font-semibold text-orange-200'>Movie Recommender Application(Netflix)</p>
                </div>
                <div className='bg-slate-950 p-3 rounded-md'>
                    <a href=''>
                        <img className='w-full h-[176px] object-cover rounded-md hover:bg-opacity/80' src={vote}></img>
                    </a>
                    <p className='mt-3 font-semibold text-orange-200'>Voting Application</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio