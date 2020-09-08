import React from 'react'
import margaret from '../assets/margaret.png'
import margaret2 from '../assets/margaret2.png'
import steven from '../assets/steven.png'
import tanner from '../assets/tanner.png'
import tanner2 from '../assets/tanner2.png'
import github from '../assets/githublogo.png'
import linkedin from '../assets/linkedinlogo.png'

const About = () => {
    return (
        <>
        <div className="aboutContainer">
            <div className="aboutMain">
                <h3 className="aboutTitle">About</h3>
                <p className="aboutBody">Affirmations is an app created by <strong>Margaret Huang</strong>, <strong>Steven Michaud</strong>, and   
                 <strong> Tanner Leigh</strong>, through React and MongoDB that encourages and informs users that are struggling or 
                just curious about suicide and depression. It is simple by nature, allowing it to 
                be accessible to everyone and beautiful to the eye to make it less intimidating to 
                the average user. Affirmations strives to be a safe place for all and keeps the mental
                 and physical safety of its users as its highest priority.
                </p>
            </div>
        </div>
        <div className="aboutGridMain">
            <div className="aboutGrid">
                <div className="margaret">
                    <img src={margaret2} alt="Margaret"/>
                    <p className="aboutName">Margaret Huang</p>
                    <div className="logoLinks">
                        <a href="https://github.com/margaret-jihua" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                        <a href="https://www.linkedin.com/in/margaret-jihua/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a>
                    </div>
                </div>
                <div className="steven">
                    <img src={steven} alt="Steven"/>
                    <p className="aboutName">Steven Michaud</p>
                    <div className="logoLinks">
                        <a href="https://github.com/Michaudsr" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                        <a href="https://www.linkedin.com/in/steven-michaud/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a>
                    </div>
                </div>
                <div className="tanner">
                    <img src={tanner2} alt="Tanner"/>
                    <p className="aboutName">Tanner Leigh</p>
                    <div className="logoLinks">
                        <a href="https://github.com/thleigh" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                        <a href="https://www.linkedin.com/in/tannerhleigh/" target="_blank" rel="noopener noreferrer"><img src={linkedin}  alt="linkedin"/></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About