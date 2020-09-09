import React, {useState, useEffect} from "react"
import axios from 'axios'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Affirmation = (props) => {

    let [affirmation, setAffirmation] = useState(undefined)

    useEffect(() => {
        axios.get(`${REACT_APP_SERVER_URL}/api/affirmations/${props.affirmation._id}`)
        .then(response => {
            setAffirmation(response.data[0])
        })
        .catch(err => console.log(err))
    },[])

    let handleLike = (id,e) => {
        let like = {"likes": {"_id": props.user.id}}
        let unlike = {"likes": props.user.id}

        if (props.user) {
            // remove likes from affirmation array
            if (affirmation.likes.includes(props.user.id)) {
                axios.put(`${REACT_APP_SERVER_URL}/api/affirmations/unlikes/${id}`, unlike)
                .then(response => {
                        setAffirmation(response.data);
                })
                .catch(err => console.log(err))
            } else {
                axios.put(`${REACT_APP_SERVER_URL}/api/affirmations/likes/${id}`, like)
                .then(response => {
                        setAffirmation(response.data);
                })
                .catch(err => console.log(err))
            }
            
        } else {
            window.flash(`Please Log in to like the quote` , 'error')   
        }             
    }

    return(
        <div>
            {affirmation 
            ? 
            (<>
                <h2 className="front"><strong>{affirmation.quote}</strong></h2>
                <p className="front">{affirmation.author}</p>
                <p>{affirmation.likes.length} likes</p>
                <button onClick={(e) => handleLike(affirmation._id,e)}  className='btn btn-primary'>Like❤️</button>
            </>
            )
            : 
            <p>loading...</p>
            }
            
        </div>
    )
}

export default Affirmation