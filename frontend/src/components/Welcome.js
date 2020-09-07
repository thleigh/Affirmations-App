import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Affirmation from './Affirmation'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Welcome = () => {
    let [affirmations, setAffirmations] = useState([]);
    let [seconds, setSeconds] = useState(0);
     
    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/affirmations`)
        .then(response => {
            console.log(response.data);
            setAffirmations(response.data);
        })
    }, [])

    let affirmationList = affirmations.map((affirmation, idx) => {
        return (
            <div>
                <h2>{affirmation.quote}</h2>
            </div>
        )
    })
    
    return (
        <div>
            {affirmationList}
        </div>
    )
}

export default Welcome