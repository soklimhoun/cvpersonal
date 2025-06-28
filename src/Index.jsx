import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Home from './components/Home'
import Skills from './components/Skills'
function Index() {
  return (
    <div>
       <div>
        <Home/>
        </div>
        <div className='bg-gray-100'>
          <AboutMe />
        </div>  
         <div>
        <Education/>
        </div> 
          <div>
        <Skills/>
        </div>
    </div>
  )
}

export default Index
