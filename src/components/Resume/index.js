import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect } from 'react'
import doc from '../../assets/Documents/Resume.pdf'
 
const Resume = () =>{
  const [currentClass , setClass] = useState('AnimatedClass')
 
  useEffect(() => {
    setTimeout(() => {
        setClass('AnimatedClass-hover')
    }, 3000);
    }, []);
   return (
    <div className='container resume-page'>
        <div className='text-zone'>
          <h1>
              <AnimatedLetters letterClass={currentClass} str={'Skills & Experience'} idx={10}/>
          </h1>
          <p>
            Expert in full-stack development including technologies like
            <span className="tech-tag">Dotnet</span>, 
            <span className="tech-tag">Dotnet Core</span>, 
            <span className="tech-tag">HTML5</span>, 
            <span className="tech-tag">CSS3</span>, 
            <span className="tech-tag">JavaScript</span>,
            <span className="tech-tag">jQuery</span>,
            <span className="tech-tag">React</span>,
            <span className="tech-tag">Sql server</span>,
            <span className="tech-tag">Bootstrap</span>,
            <span className="tech-tag">Sass</span>,
            <span className="tech-tag">Git</span>, etc.
          </p>
          <p>
            I have experience of working in multiple live projects in dot net. I put special
            effort into optimizing my code and providing the best user
            experience. I guarantee a commitment during working on any project.
          </p>
          <p>
            Visit my
            <a className='link' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/shubham-kargeti-0b2398149/">LinkedIn </a>profile for more details. Also you can checkout my cv on this
            <a className='link' target="_blank" rel='noreferrer' href={doc}>link</a>.
          </p>
        </div>
    </div>
   )
}

export default Resume