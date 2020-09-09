import React, {useState} from "react"
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Affirmation = (props) => {

    let [numLikes,setNumLikes] = useState(0)

    let handleLike = (id,e) => {
        e.preventDefault()
        // console.log("ID: ",id);
        // console.log("E-value: ", e.target[0].value);
        const like = {_id: props.user.id}

        props.user
        ?
        (
            // remove likes from affirmation array
            // props.affirmation.likes.include(props.user.id)
            // ?
            // (
            //     // setNumLikes(response.data.likes.length -1 ) 
            // )
            // :
            (
                axios.put(`${REACT_APP_SERVER_URL}/api/affirmations/likes/${id}`, like)
                .then(response => {
                    setNumLikes(response.data.likes.length)
                })
                .catch(err => console.log(err))
            )
        )
        :
        window.flash(`Please Log in to like the quote` , 'error')        
    }

    return(
        <div>
            <h2 className="front"><strong>{props.affirmation.quote}</strong></h2>
            <p className="front">{props.affirmation.author}</p>
            <p>{numLikes || props.affirmation.likes.length} likes</p>
            <form onSubmit={(e) => handleLike(props.affirmation._id,e)}>
                <input name="likes" value={props.affirmation._id} hidden />
                <button type="submit" className="btn btn-primary">Like❤️</button>
            </form>
                    
            {/* <button onClick={handleComment(affirmation._id)}>comment💬</button> */}
        </div>
    )
}

export default Affirmation