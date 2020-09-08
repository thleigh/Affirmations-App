import React, {useState, useEffect} from 'react'
import axios from 'axios';
// import background from '../assets/artboard.png'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Welcome = (props) => {
    console.log(props);
    let [affirmations, setAffirmations] = useState([]);
    let [count, setCount] = useState(0);
    let [clock, setClock] = useState();
    let [numLikes, setNumLikes] = useState(0)

    // useEffect(() => {
    //     const interval = setClock(setInterval(() => {
    //         setCount(count => count + 1);
    //     }, 9000))
    //     return() => clearInterval(interval)
    // }, []);

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/affirmations`)
        .then(response => {
            setAffirmations(response.data);
        });
    }, []);

    let handleLike = (e) => {
        e.preventDefault()

        console.log(e.target.value);
        const like = {_id: props.user.id}
        console.log(like);
        axios.put(`${REACT_APP_SERVER_URL}/api/affirmations/likes/${e.target.value}`, like)
        .then(response => {
            console.log(response);
            // setNumLikes(response.data.likes.length)
            // props.user
            // ?
            // (likes: [{_id: e.target.value}] )
            // :
            // window.flash(`Please Log in to like the quote` , 'error')
        })
        .catch(err => console.log(err))
    }

    let affirmationList = affirmations.map((affirmation, idx) => {
        console.log(affirmation._id);
        return (
            <div key={idx}>
                <h2 className="front"><strong>{affirmation.quote}</strong></h2>
                <p className="front">{affirmation.author}</p>
                <p>{affirmation.likes.length} likes</p>
                <form onSubmit={handleLike}>
                    <input name="likes" value={affirmation._id} hidden />
                    <button type="submit" className="btn btn-primary">Like❤️</button>
                </form>
                
                {/* <button onClick={handleComment}>comment💬</button> */}
            </div>
        )
    })

    
    // let handleComment = () => {

    // }
    
    // while(true) {
    //     let index = Math.floor(Math.random() * affirmationList.length)
    //     // let id = affirmationList[index]._id

    //     console.log(index);
    //     let main = affirmationList[index]
    //     // console.log(main);
    //     // if (count === affirmationList.length){setCount(0)}
    //     return (
    //         <div className="affirmationContainer">
    //             {/* <img src={background} alt="" className="bg" /> */}
    //             <div className="affirmation">
    //                 {main}
    //             </div>
    //         </div>
    //     )
    // }

    return(
        <div>
            {affirmationList[0]}
        </div>
    )
}

export default Welcome