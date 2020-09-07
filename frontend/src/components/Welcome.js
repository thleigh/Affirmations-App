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
            setAffirmations(response.data);
        });
    }, []);

    let affirmationList = affirmations.map((affirmation, idx) => {
        return (
            <div>
                <h2><strong>{affirmation.quote}</strong></h2>
                <p>{affirmation.author}</p>
            </div>
        )
    })
    
    while(true) {
        let index = Math.floor(Math.random() * affirmationList.length)

        console.log(index);
        let main = affirmationList[index]
        // if (count === affirmationList.length){setCount(0)}
        return (
            <div>
                {main}
            </div>
        )
    }
}

export default Welcome