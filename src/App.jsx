import './App.css'
import Intro from './assets/Intro'
import Avatar from './assets/Avatar'
import SkillList from './assets/SkillList'

function App() {
  return (
    <>
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <SkillList />
      </div>
    </div>
    </>
  )
}

export default App
