import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import {Button, Modal, Form} from 'react-bootstrap';
import axios from 'axios';
import Mapbox from './Mapbox';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Resources = () => {

    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [poi, setPoi] = useState('mental health clinic');
    let [lat, setLat] = useState('');
    let [lng, setLng] = useState('');

    const [volunteerNumberList, setVolunteerNumberList] = useState([]);
    const [volunteerNumber, setVolunteerNumber] = useState('')


    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handleState = (e) => {
        setState(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const mapData = { city, state, poi}
        console.log('MAP', mapData)
        axios.post(`${REACT_APP_SERVER_URL}/api/resources`, mapData )
        .then(response => {
            setLng(response.data.match.center[0]);
            console.log(response.data.match.center[0])
            setLat(response.data.match.center[1]);
            console.log('MAPBOX DATA', response.data);
        })
        .catch(error => {
            console.log(error)
        });
    }
    
    const [modalShowNumber, setModalShowNumber] = React.useState(false);


    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/users/phoneNumber`)
        .then(response => {
            console.log(response.data);
            setVolunteerNumberList(response.data)
        })
        .catch(err => console.log(err))
    },[])
    
    let index = Math.floor(Math.random() * volunteerNumberList.length)
    console.log(volunteerNumberList[index]);

    const handleVolunteerNumber = () => {
        setVolunteerNumber(volunteerNumberList[index])
    }

        function MapBoxModal(props) {
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
                    Enter your city and state to find local professional help
                  </Modal.Title>
                </Modal.Header>
            <Form onSubmit={(e)=>handleSubmit}>
                <Modal.Body>
                <p className="aboutParagraph">
                    This function is still in beta form so not all results will be
                    <br />
                    the real thing.
                </p>
                    <input type="text" name="city" id="" placeholder="city" onInput={handleCity}/>
                    <input type="text" name="state" id="" placeholder="state" onInput={handleState}/>
                    <button type="submit">Submit</button>
                    <Mapbox lat={lat} lng={lng} />
                </Modal.Body>
            </Form>
                <Modal.Footer>
                  <Button className="btn-info" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
            );
        };

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
                <p className="aboutParagraph">
                    Warning: not all community members are trained professionals and might not be 
                    <br />
                    able to provide the help that you are seeking.
                    <br />
                    Community members are here to create 
                    a safe space for any type of conversation.
                </p>
                <h3>{volunteerNumber.phoneNumber}</h3>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="btn-info" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
            );
        };

        return (
            <>
            <div>
                <div>     
                    <h2>Call the National Suicide Prevention Lifeline</h2>
                    <h1>1-800-273-8255</h1>
                    <p>"The National Suicide Prevention Lifeline is a national network of local crisis centers that provides
                        free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours
                        a day, 7 days a week.
                    </p>
                    <Button className="buttonModal btn-info" variant="primary" onClick={() => {
                        setModalShowNumber(true);
                        handleVolunteerNumber();
                    }}>
                        Number
                    </Button>

                    <PhoneNumber
                        show={modalShowNumber}
                        onHide={() => setModalShowNumber(false)}
                    />
                </div>
            </div>
            <div>
                <form  onSubmit={handleSubmit}>
                <input type="text" name="city" id="" placeholder="city" onChange={handleCity}/>
                <input type="text" name="state" id="" placeholder="state" onChange={handleState}/>
                <button type="submit">Submit </button>
                </form>
            </div>
            <Mapbox lat={lat} lng={lng} />
            </>
            
        )
}

export default Resources 