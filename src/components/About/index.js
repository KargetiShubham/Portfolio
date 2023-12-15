import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dotnetICon from '../../assets/images/c-sharp.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState,useEffect } from 'react'
import { faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () =>{
const [currentClass , setClass] = useState('AnimatedClass')

useEffect(() => {
    setTimeout(() => {
        setClass('AnimatedClass-hover')
    }, 3000);
    }, []);
 return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={currentClass} str={'About me'} idx={15}/>
            </h1>
            <p>
                I’m very ambitious full-stack developer looking for a role in
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
            </p>
            <p>
                I'm quietly confident, naturally curious, and ready to work on new projects and solve new problems 
            </p>
            <p>
                If I need to define myself in one sentence that would be a fast learner,
                gamer, and tech-obsessed!!!
            </p>
        </div>
        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <img src={dotnetICon} alt='dotnet' height={100} width={100}/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faDatabase} color='#28A4D9' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                </div>
            </div>
        </div>
    </div>
 )
}

export default About