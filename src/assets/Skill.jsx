import React from 'react'

function Skill({skillObject}) {
  return (
    <li className='skill' style={{backgroundColor: skillObject.color}}>
      <span>{skillObject.name}</span>
      <span>
        {skillObject.level  === 'beginner'? ' 👶' : ''} 
        {skillObject.level  === 'intermediate'? ' 👍' : ''}
        {skillObject.level  === 'advanced'? ' 💪' : ''}
      </span>

        {/* We can also use the End-operator for the previous code
      <span>
        {skillObject.level === 'beginner' && ' 👶'} 
        {skillObject.level === 'intermediate' && ' 👍'}
        {skillObject.level === 'advanced' && ' 💪'}
      </span>
        */}
    </li>
  )
}

export default Skill