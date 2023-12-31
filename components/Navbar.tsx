import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="navbar  bg-base-100 lg:pr-[10rem] lg:pl-[8rem] mx-auto">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <Link href={'/about'}>About </Link>
          
        </li>
        <li><a>Careers</a></li>
        <li>
          <a>Services</a>
          <ul className="p-2">
            <li><a>Web Development</a></li>
            <li><a>Software Development</a></li>
          </ul>
        </li>
        <li><Link href={'/contact'}>Contact Us</Link></li>
      </ul>
      
    </div>
    <a className="btn btn-ghost normal-case text-xl justify-center"><span>Cyber<span className="text-secondary ">Nexa</span></span></a>
  </div>
  <div className="navbar-center dropdown dropdown-hover hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/"} className='btn-primary btn-ghost'>Home</Link></li>
      <li><Link href={"/about"} className='btn-primary btn-ghost'>About</Link></li>
      
      <li><a className='btn-primary btn-ghost'>Careers</a></li>
      <li tabIndex={1}>
        <details>
          <summary>Services</summary>
          <ul className="p-2 w-52 shadow bg-white z-[10]">
            <li><a className ="hover:text-primary text-black">Web Development</a></li>
            <li><a className="hover:text-primary text-black">Web Automation</a></li>
          </ul>
        </details>
      </li>
      <li><Link href={'/contact'} className='btn-primary btn-ghost'>Contact Us</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-primary">Book a Call</a>
  </div>
</div>
  )
}

export default Navbar