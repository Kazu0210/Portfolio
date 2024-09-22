import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import menuIcon from '../assets/burger-bar.svg'
import BtnStyle from '../styles/btnStyle.module.css'

function Navbar() {
  return (
    <div>
        <nav className='nav d-none d-sm-flex justify-content-center' style={{padding: '2rem 0px'}}>
          <a href="#" className='nav-link text-white' style={{fontSize: '0.8rem'}}>Home</a>
          <a href="#" className='nav-link text-white' style={{fontSize: '0.8rem'}}>About</a>
          <a href="#" className='nav-link text-white' style={{fontSize: '0.8rem'}}>Services</a>
          <a href="#" className='nav-link text-white' style={{fontSize: '0.8rem'}}>Portfolio</a>
          <a href="#" className='nav-link text-white' style={{fontSize: '0.8rem'}}>Contacts</a>
          {/* <button className={BtnStyle.bordered_btn} style={{fontSize: '0.8rem'}}>Download CV</button> */}
        </nav>

        <nav className="nav d-sm-none d-flex position-relative align-items-center justify-content-between" style={{padding: '2rem 1rem'}}>
          <h1 className="text-white" style={{fontSize:'1rem'}}>&lt;clffrd/&gt;</h1>
          <button style={{width:'30px', height:'auto', border:'none', borderRadius:'5px', outline:'none', backgroundColor:'transparent', filter:'invert(100%)'}} className=''>
            <img className="img-fluid" src={menuIcon} alt="menu" />
          </button>
        </nav>
    </div>
  )
}

export default Navbar