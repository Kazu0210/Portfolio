import React from 'react'

function Skill_bar({skill_name, skill_percentage}) {
  return (
    <div className='m-2'>
        <h1 className='removemp text-white' style={{fontSize:'1rem'}}>{skill_name}</h1>
        <div className='removemp my-1 overflow-hidden' style={{height:'1rem', width:'100%', backgroundColor:'#0C054D', borderRadius:'1rem'}}>
            <div style={{width: `${skill_percentage}%`, height: '100%', backgroundColor:'#2EADF5'}}>
            </div>
        </div>
    </div>
  )
}

export default Skill_bar