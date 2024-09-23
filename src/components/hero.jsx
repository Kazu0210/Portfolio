import React from 'react'
import '../styles/remove-m-p.css'
import profile from '../assets/profile.jpg'
import btnStyle from '../styles/btnStyle.module.css'


function Hero() {
  return (
    <div className="removemp p-4 row" style={{width:'100%'}}>
      <div className='col d-flex flex-column justify-content-center'>
        <div className="removemp container py-3">
          <h1 className='removemp fw-bolder' style={{color:'#0C054D', WebkitTextStroke: '1px white', fontSize:'3rem'}}>HELLO, I AM</h1>
          <h1 className='removemp text-white' style={{fontSize:'3rem'}}>KYLE DEMAFELIS</h1>
          <p className='removemp text-white' style={{fontSize:'1rem'}}>Full Stack Web Developer</p>
        </div>
        <div className="removemp container d-flex py-2 w-auto" style={{gap:'5px'}}>
          <button className={btnStyle.solid_btn}>Hire me</button>
          <button className={btnStyle.bordered_btn}>My Works</button>
        </div>
      </div>
      <div className="removemp col container d-none d-md-flex justify-content-center align-items-center">
        <div className="removemp container overflow-hidden d-flex justify-content-center align-items-center" style={{width:'300px', aspectRatio:'1/1',borderRadius:'500px'}}>
          <img src={profile} alt="profile photo" className='' style={{width:'auto', height:'100%'}} />
        </div>
      </div>
    </div>
  )
}

export default Hero