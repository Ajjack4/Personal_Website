import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'
import Resume from '../Resume.pdf'

const Home=()=>{
    const[letterClass]=useState('text-animate')
    const nameArray=[' ','A','j','i','n','k','y','a']
    const jobArray=['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r']
    
    

     
return(
    <>
    <div className="container home-page ">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className='text-animate'>i,</span>
             <br/>
             <span className='text-animate'>I</span>
             <span className='text-animate'>'m</span>
            <AnimatedLetters letterClass={letterClass}
             strArray={nameArray}
            idx={10}/>
            <br/>
            <AnimatedLetters letterClass={letterClass}
             strArray={jobArray}
            idx={19}/>

            </h1>
            <h2> Frontend Developer / Backend Developer / Problem Solver</h2>
           
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            <Link to={Resume} download="Resume-PDF-document"
        target="_blank"
        rel="noreferrer" className='flat-button'>Download Resume</Link>
           
        </div>

   <Logo/>
    </div>
    <Loader type='pacman'/>
    </>
 );
}

export default Home