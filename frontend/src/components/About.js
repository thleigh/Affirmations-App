import React from 'react'
import margaret from '../assets/margaret.png'
import steven from '../assets/steven.png'
import tanner from '../assets/tanner.png'
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
        <div>
            <div className="aboutGrid">
                <div className="margaret">
                    <img src={margaret} alt="Margaret"/>
                    <p>Margaret Huang</p>
                    <div className="logoLinks">
                        <a href="https://github.com/margaret-jihua" target="_blank"><img src={github}/></a>
                        <a href="https://www.linkedin.com/in/margaret-jihua/" target="_blank"><img src={linkedin}/></a>
                    </div>
                </div>
                <div className="steven">
                    <img src={steven} alt="Steven"/>
                    <p>Steven Michaud</p>
                    <div className="logoLinks">
                        <a href="https://github.com/Michaudsr" target="_blank"><img src={github}/></a>
                        <a href="https://www.linkedin.com/in/steven-michaud/" target="_blank"><img src={linkedin}/></a>
                    </div>
                </div>
                <div className="tanner">
                    <img src={tanner} alt="Tanner"/>
                    <p>Tanner Leigh</p>
                    <div className="logoLinks">
                        <a href="https://github.com/thleigh" target="_blank"><img src={github}/></a>
                        <a href="https://www.linkedin.com/in/tannerhleigh/" target="_blank"><img src={linkedin}/></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About