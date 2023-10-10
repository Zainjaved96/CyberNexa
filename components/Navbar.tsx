import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar  bg-base-100 px-md-[7rem] px-md-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Careers</a></li>
        <li><a>Home</a></li>
        <li>
          <a>Services</a>
          <ul className="p-2">
            <li><a>Web Development</a></li>
            <li><a>Software Development</a></li>
          </ul>
        </li>
        <li><a>Contact Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl justify-end">CyberNexa</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='btn-primary btn-ghost'>Home</a></li>
      <li><a className='btn-primary btn-ghost'>Portfolio</a></li>
      <li><a className='btn-primary btn-ghost'>Careers</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2 w-52 shadow bg-white z-[10]">
            <li><a className ="hover:text-primary text-black">Web Development</a></li>
            <li><a className="hover:text-primary text-black">Web Automation</a></li>
          </ul>
        </details>
      </li>
      <li><a className='btn-primary btn-ghost'>Contact Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Book a Call</a>
  </div>
</div>
  )
}

export default Navbar