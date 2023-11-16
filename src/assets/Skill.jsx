import React from 'react'

function Skill({skillObject}) {
  return (
    <li className='skill' style={{backgroundColor: skillObject.color}}>
      <span>{skillObject.name}</span>
    </li>
  )
}

export default Skill