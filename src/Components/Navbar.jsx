import logo from '../assets/jibon.png'
function Navbar() {
  return (
    <section>
        <div className=' flex justify-between items-center'> 
            <img src={logo} alt="" className=' w-64 h-40 ' />
            <div className=' flex font-semibold gap-x-5'>
                <p>Home</p>
                <p>About</p>
            </div>
        </div>
    </section>
  )
}

export default Navbar
