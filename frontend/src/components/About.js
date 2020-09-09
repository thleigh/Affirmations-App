import React, {useState} from 'react';
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
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
            <div className="logoLinks">
                <a href="https://github.com/thleigh" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/tannerhleigh/" target="_blank" rel="noopener noreferrer"><img src={linkedin}  alt="linkedin"/></a>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
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
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
            <div className="logoLinks">
                <a href="https://github.com/margaret-jihua" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/margaret-jihua/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
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
            <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
            </p>
            <div className="logoLinks">
                <a href="https://github.com/Michaudsr" target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/steven-michaud/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin"/></a>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
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
                    <Button className="buttonModal" variant="primary" onClick={() => setModalShowMargaret(true)}>
                        Margaret Huang
                    </Button>

                    <MargaretModal
                        show={modalShowMargaret}
                        onHide={() => setModalShowMargaret(false)}
                    />
                </div>
                <div className="steven">
                    <img src={steven2} alt="Steven"/>
                    <Button className="buttonModal" variant="primary" onClick={() => setModalShowSteven(true)}>
                        Steven Michaud
                    </Button>

                    <StevenModal
                        show={modalShowSteven}
                        onHide={() => setModalShowSteven(false)}
                    />
                </div>
                <div className="tanner">
                    <img src={tanner2} alt="Tanner"/>
                    <Button className="buttonModal" variant="primary" onClick={() => setModalShowTanner(true)}>
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