import nameLogo from '../../assets/images/logo-s.png'
import './index.scss'
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Home = () =>{
    const [currentClass , setClass] = useState('AnimatedClass')

    useEffect(() => {
        setTimeout(() => {
            setClass('AnimatedClass-hover')
        }, 4000);
      }, []);

    return (
    <div className="container home-page">
        <div className='text-zone'>
            <h1>
                <span className={currentClass}>H</span>
                <span className={`${currentClass} _12`}>i,</span>
                 <br/> 
                 <span className={`${currentClass} _13`}>I</span>
                 <span className={`${currentClass} _14`}>'m</span>
                <img alt='' className='nameLogo' src={nameLogo}/>
                <AnimatedLetters letterClass={currentClass} str = {'hubham'} idx={15}/>,
                <br/>
                <AnimatedLetters letterClass={currentClass} str = {'Web Developer'} idx={22}/>
            </h1>
            <h2>
                Dot net Developer / Tech Enthusiast
            </h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
        </div>   
        <Logo/> 
    </div>
    )
}
export default Home;