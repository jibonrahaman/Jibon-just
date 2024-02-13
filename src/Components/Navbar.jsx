import { Link } from 'react-router-dom'
import logo from '../assets/jibon.png'
function Navbar() {
  return (
    <section className=''>
      <div className=' flex justify-center md:justify-between items-center'>
        <img src={logo} alt="" className='w-48 mt-2 md:mt-0 md:w-64 md:h-40 ' />
        <div className=' flex font-semibold gap-x-5'>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/profile">
            <p>About</p>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Navbar
