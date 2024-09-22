import React from 'react'
import SkillBar from './skill_bar'

function Skills() {
  return (
    <div className='removemp container-fluid p-4' style={{width:'100%'}}>
      <div className="removemp">
        <h1 className="removemp text-white text-center">MY SKILLS</h1>
      </div>
      <div className="removemp d-flex flex-column align-items-center">
        <div className="removemp text-wrap">
          <div className='removemp my-3 container-fluid d-flex justify-content-center align-items-center'>
            <p style={{color:'#A8A8A8', fontSize:'0.8rem', width:'90%'}} className='removemp text-center'>As a dedicated front-end web developer, I specialize in crafting responsive, interactive, and visually stunning user interfaces. My skills include:</p>
          </div>
        </div>
        <div className="removemp row" style={{width:'100%'}}>
            <div className='col'>
                <SkillBar skill_name="HTML/CSS" skill_percentage="95"/>
                <SkillBar skill_name="JAVASCRIPT" skill_percentage="75"/>
                <SkillBar skill_name="REACT JS" skill_percentage="70"/>
            </div>
            <div className="col">
                <SkillBar skill_name="ELECRTON JS" skill_percentage="30"/>
                <SkillBar skill_name="SQL" skill_percentage="80"/>
                <SkillBar skill_name="MONGODB" skill_percentage="75"/>
            </div>
            </div>
     
      </div>
    </div>
  )
}

export default Skills