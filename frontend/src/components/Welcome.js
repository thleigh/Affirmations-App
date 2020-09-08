import React, {useState, useEffect} from 'react'
import axios from 'axios';

import { CSSTransitionGroup } from 'react-transition-group'
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
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>                    
                    <h2 className="front"><strong>{affirmation.quote}</strong></h2>
                    <p className="front">{affirmation.author}</p>
                </CSSTransitionGroup>
            </div>
        )
    })
    
    while(true) {
        let index = Math.floor(Math.random() * affirmationList.length)

        console.log(index);
        let main = affirmationList[index]
        // if (count === affirmationList.length){setCount(0)}
        return (
            <div className="affirmationContainer">   
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>  
                    {main}
                </CSSTransitionGroup>
            </div>
        )
    }
}

export default Welcome 