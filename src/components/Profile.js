import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {

    let [affirmations, setAffirmations] = useState([]);

    window.flash(`Welcome back, ${props.user.name}` , 'success')

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/affirmations`)
        .then(response => {
            setAffirmations(response.data);
        });
    }, []);

    const hasLikedQuotes = () => {

        let affirmationList = affirmations.map((affirmation, idx) => {
            if (affirmation.likes.includes(props.user.id)) {
                return (
                    <>
                        <h6>{affirmation.quote} -- {affirmation.author}</h6>
                    </>
                )
            }            
        })
        
        if (affirmationList.length) {

            return (
                <div className="liked-quotes">
                    <h4>Affirmations You Liked:</h4>
                    <ul>{affirmationList}</ul>
                </div>
            )
            
        } else{

            return(            
                <h5>
                    Check out our <a href="/">homepage</a> to like some affirmations!
                </h5>                
            )
        }               
    }

    const userData = props.user ? 
    (
    <>
        <Row>
            <Col sm={4}>
                <h1>Profile🌼</h1> 
                <p><strong>Name: </strong>{props.user.name}</p>
                <p><strong>Email: </strong>{props.user.email}</p>
                <p><strong>Volunteer: </strong>{props.user.volunteer ? "Yes" : "No"}</p>
                {props.user.volunteer ? <p><strong>Phone Number: </strong>{props.user.phoneNumber}</p> : null}
            </Col>

            <Col sm={8}>
                {hasLikedQuotes()}
            </Col>
        </Row>
    </>
    ) : 
    <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        )
    }

    return (
        <div>
            {props.user ? userData : errorDiv()}
        </div>
    )
}

export default Profile;