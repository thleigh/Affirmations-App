import React from 'react';
import margaret2 from '../assets/margaret2.png';
import steven2 from '../assets/steven2.png';
import tanner2 from '../assets/tanner2.png';
import github from '../assets/githublogo.png';
import linkedin from '../assets/linkedinlogo.png';
import {Button, Modal} from 'react-bootstrap'



const About = () => {
    const [modalShowTanner, setModalShowTanner] = React.useState(false);
    const [modalShowMargaret, setModalShowMargaret] = React.useState(false);
    const [modalShowSteven, setModalShowSteven] = React.useState(false);


    function TannerModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                About Tanner
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p className="aboutParagraph">
                Tanner is a full-stack engineer based in Los Angeles, California, with a background in 
                film and design. He loves rock climbing, photography, and getting late night tacos with his friends.
                Tanner is a developer that creates code that is not only consumable but beautiful 
                with the funcionality to back.
            </p>
            <div className="logoLinks">
                <a href="https://github.com/thleigh" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/tannerhleigh/" target="_blank" rel="noopener noreferrer"><img src={linkedin}  alt="linkedin"/></a>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-info" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      function MargaretModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton> 
              <Modal.Title id="contained-modal-title-vcenter">
                About Margaret
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p className="aboutParagraph">
            Margaret is a Junior Software Engineer with a passion to apply her professional 
            knowledge in problem solving and team cooperating. A detail-orientated
             person, making things as perfect as possible motivates her to do 
             things better and better. She is ready to contribute my skills at high 
             levels of complexity for a dynamic and stable workplace. She loves cats.
            </p>
            <div className="logoLinks">
                <a href="https://github.com/margaret-jihua" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/margaret-jihua/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-info" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

      function StevenModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                About Steven
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p className="aboutParagraph">
            Steven is a full stack software developer, that creates easier user experience for everyone 
            involved and can add value in whatever role He is put in. Positive Change for the 
            future keeps him motivated to continue developing high performing technology and 
            adds value to the level of efficiency his work creates. He fosters 2 cats.
            </p>
            <div className="logoLinks">
                <a href="https://github.com/Michaudsr" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/steven-michaud/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-info" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

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
                    <Button className="buttonModal btn-info" variant="primary" onClick={() => setModalShowMargaret(true)}>
                        Margaret Huang
                    </Button>

                    <MargaretModal
                        show={modalShowMargaret}
                        onHide={() => setModalShowMargaret(false)}
                    />
                </div>
                <div className="steven">
                    <img src={steven2} alt="Steven"/>
                    <Button className="buttonModal btn-info" variant="primary" onClick={() => setModalShowSteven(true)}>
                        Steven Michaud
                    </Button>

                    <StevenModal
                        show={modalShowSteven}
                        onHide={() => setModalShowSteven(false)}
                    />
                </div>
                <div className="tanner">
                    <img src={tanner2} alt="Tanner"/>
                    <Button className="buttonModal btn-info" variant="primary" onClick={() => setModalShowTanner(true)}>
                        Tanner Leigh
                    </Button>

                    <TannerModal
                        show={modalShowTanner}
                        onHide={() => setModalShowTanner(false)}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default About