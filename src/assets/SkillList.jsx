import React from 'react'
import Skill from './Skill'
function SkillList(props) {
  return (
    <div className='skill-list'>
      <Skill skill='HTML' emoji='📄' color='#E44D26' />
      <Skill skill='CSS' emoji='🎨' color='#1572B6'/>
      <Skill skill='JavaScript' emoji='💻' color='#F7DF1E'/>
      <Skill skill='React.js' emoji='⚛️' color='#61DAFB'/>
      <Skill skill='Git & Github' emoji='🛠️' color='#6D42A3'/>
      <Skill skill='Web Design' emoji='🌐' color='#E74C3C'/>
    </div>
  )
}

export default SkillList