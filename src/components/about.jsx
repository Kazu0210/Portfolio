import React from 'react'
import profile_2 from '../assets/profile_2.png'
import info from '../data/information.json'
import btnStyle from '../styles/btnStyle.module.css'

function About() {
  
  return (
    <div className='removemp container-fluid p-4' style={{width:'100%'}}>
      <div className="removemp">
        <h1 className="removemp text-white text-center">ABOUT ME</h1>
      </div>
      <div className="removemp d-sm-flex flex-column flex-md-row">
        <div className='removemp d-none d-sm-flex justify-content-center align-items-center' style={{height:'100%'}}>
          <div className="removemp p-3 overflow-hidden d-flex justify-content-center align-items-center" style={{width:'90%', aspectRatio:'1/1'}}>
            <img src={profile_2} alt="profile2" className='img-fluid' />
          </div>
        </div>
        <div className="removemp text-wrap d-flex flex-column">
          <div className='removemp my-3 container-fluid d-flex justify-content-center align-items-center'>
            <p style={{color:'#A8A8A8', fontSize:'0.8rem', width:'90%'}} className='removemp text-center'>4th year college of Cavite State University Silang Campus, with 2 years experience of web development.</p>
          </div>

          <div className='removemp d-flex flex-column mx-3'>
            <label className='text-white' style={{fontSize:'0.8rem'}}><strong style={{fontSize:'.8rem'}}>Name:</strong> <span style={{color:'#A8A8A8', fontSize:'0.8rem'}}>{info.name}</span></label>
            {/* <label className='text-white' style={{fontSize:'0.8rem'}}><strong style={{fontSize:'.8rem'}}>Date of Birth:</strong> <span style={{color:'#A8A8A8', fontSize:'0.8rem'}}>{info.birthdate}</span></label> */}
            {/* <label className='text-white' style={{fontSize:'0.8rem'}}><strong style={{fontSize:'.8rem'}}>Zip Code:</strong> <span style={{color:'#A8A8A8', fontSize:'0.8rem'}}>{info.zip_code}</span></label> */}
            <label className="text-white" style={{fontSize:'0.8rem'}}><strong style={{fontSize:'.8rem'}}>Facebook:</strong> <span style={{color:'#A8A8A8', fontSize:'0.8rem'}}>{info.fb}</span></label>
            <label className='text-white' style={{fontSize:'0.8rem'}}><strong style={{fontSize:'.8rem'}}>Email:</strong> <span style={{color:'#A8A8A8', fontSize:'0.8rem'}}>{info.email}</span></label>
            <label className='text-white' style={{fontSize:'0.8rem'}}><strong style={{fontSize:'.8rem'}}>Phone:</strong> <span style={{color:'#A8A8A8', fontSize:'0.8rem'}}>{info.phone}</span></label>
          </div>

          <div className='removemp d-flex mx-3'>
            <h1><span style={{color:'#fff', fontWeight:'bold'}}>Projects:</span> <span style={{color:'#2EADF5', fontWeight:'bold'}}>{info.projects}</span></h1>   
          </div>

          <div className='removemp mx-3'>
            <button className={btnStyle.solid_btn}>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About