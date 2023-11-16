import React from 'react'
import Skill from './Skill'
const skills = [
  {
  name: 'HTML',
  level: 'advanced',
  color:'#E44D26'
  },
  {
  name: 'CSS',
  level: 'advanced',
  color: '#1572B6'
  },
  {
  name: 'JavaScript',
  level: 'intermediate',
  color: '#F7DF1E'
  },
  {
  name: 'React.js',
  level: 'beginner',
  color: '#61DAFB'
  },
  {
  name: 'Git & Github',
  level: 'intermediate',
  color: '#6D42A3'
  },
  {
  name: 'Web Design',
  level: 'intermediate',
  color: '#E74C3C'
  }
]

function SkillList() {
  return (
    <ul className='skill-list'>
      {skills.map((skill) =>
      <Skill skillObject={skill} key={skill.name} /> )}
    </ul>
  )
}

export default SkillList