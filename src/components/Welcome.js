import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Affirmation from './Affirmation'
import { CSSTransitionGroup } from 'react-transition-group'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Welcome = (props) => {
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
            <Affirmation key={idx} affirmation={affirmation} user={props.user} />
        )
    })
    
    while(true) {
        let index = Math.floor(Math.random() * affirmationList.length)

        // console.log(index);

        let main = affirmationList[index]
        return (
            <>
            <div className="affirmationContainer">   
                <CSSTransitionGroup
                    transitionName="example"
                    classNames="example"
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}>  
                    {main}
                </CSSTransitionGroup>
            </div>
            <div className="backgroundContainer">
            </div>
            </>
        )
    }    
}

export default Welcome 