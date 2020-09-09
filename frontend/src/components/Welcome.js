import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Affirmation from './Affirmation'
import { CSSTransitionGroup } from 'react-transition-group'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Welcome = (props) => {
    console.log(props);
    let [affirmations, setAffirmations] = useState([]);
    let [count, setCount] = useState(0);
    let [clock, setClock] = useState();
    // let [numLikes, setNumLikes] = useState(0)

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
            <Affirmation key={idx} affirmation={affirmation} user={props.user}/>
        )
    })

    
    // let handleComment = () => {

    // }
    
    while(true) {
        let index = Math.floor(Math.random() * affirmationList.length)
        // let id = affirmationList[index]._id

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
    

    // return(
    //     <div>
    //         {affirmationList[0]}
    //     </div>
    // )

    
}

export default Welcome 