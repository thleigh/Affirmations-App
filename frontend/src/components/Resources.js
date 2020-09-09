import React, {useState} from 'react';
import axios from 'axios';
import {Button, Modal} from 'react-bootstrap';


const Resources = () => {
    const [modalShowNumber, setModalShowNumber] = React.useState(false);

        // axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?`)
        // .then(response => {
        //     console.log(response.data);
            
        // })

        function PhoneNumber(props) {
            return (
              <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="numberModal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Call another member of our community
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>
                    Warning: not all community members are trained professionals and might not be able to provide the help that you are seeking.
                    <br />
                    Community members are here to create a safe space for any type of conversation.
                </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
            );
        };
        return (
            <div>
                <div>     
                    <h2>Call the National Suicide Prevention Lifeline</h2>
                    <h1>1-800-273-8255</h1>
                    <p>"The National Suicide Prevention Lifeline is a national network of local crisis centers that provides
                        free and confidential emotional support to peopl ein suicidal crisis or emotional distress 24 hours
                        a day, 7 days a week.
                    </p>
                    <Button className="buttonModal" variant="primary" onClick={() => setModalShowNumber(true)}>
                        Number
                    </Button>

                    <PhoneNumber
                        show={modalShowNumber}
                        onHide={() => setModalShowNumber(false)}
                    />
                </div>
            </div>
        )
}

export default Resources 