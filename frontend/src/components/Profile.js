import React from 'react';
import {Link} from 'react-router-dom'

const Profile = (props) => {
    const userData = props.user ? 
    (<div>
        <h1>Profile</h1>
        <p><strong>Name: </strong>{props.user.name}</p>
        <p><strong>Email: </strong>{props.user.email}</p>
        <p><strong>ID: </strong>{props.user.id}</p>
        <p><strong>Volunteer: </strong>{props.user.volunteer}</p>
        {props.user.volunteer ? <p><strong>Phone Number: </strong>{props.user.phoneNumber}</p> : null}
    </div>) : <h4>Loading...</h4>
    console.log(props.user)

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