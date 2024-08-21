import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='bg-slate-950 w-[340px] p-3 rounded-b-md'>
            <div className='w-full text-white flex gap-3'>
                <Link to='/'>
                    <h4 className='font-bold hover:text-orange-300'>About</h4>
                </Link>
                <Link to='/resume'>
                    <h4 className='font-bold hover:text-orange-300'>Resume</h4>
                </Link>
                <Link to='/portfolio'>
                    <h4 className='font-bold hover:text-orange-300'>Portfolio</h4>
                </Link>
                <Link to='/contact'>
                    <h4 className='font-bold hover:text-orange-300'>Contact</h4>
                </Link>
            </div>
        </div>
    )
}

export default Nav