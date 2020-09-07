import React, {useState, useEffect} from 'react'
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Welcome = () => {
    let [affirmations, setAffirmations] = useState([]);
    let [count, setCount] = useState(0);
    let [clock, setClock] = useState();
     
    useEffect(() => {
        const interval = setClock(setInterval(() => {
            setCount(count => count + 1);
        }, 9000))
        return() => clearInterval(interval)
    }, []);

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/affirmations`)
        .then(response => {
            console.log(response.data);
            setAffirmations(response.data);
        });
    }, [count]);

    let affirmationList = affirmations.map((affirmation, idx) => {
        return (
            <div>
                <h2><strong>{affirmation.quote}</strong></h2>
                <p>{affirmation.author}</p>
            </div>
        )
    })
    
    while(true) {
        let main = affirmationList[count]
        console.log(main)
        return (
            <div>
                {main}
            </div>
        )
    }
}

export default Welcome