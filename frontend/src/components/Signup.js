import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import { ErrorMessage } from '@hookform/error-message';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('');
    let [confirmPassword, setConfirmPassword] = useState('');
    let [redirect, setRedirect] = useState(false);
    let [volunteer, setVolunteer] = useState(false);
    let [phoneNumber, setPhoneNumber] = useState('');
    // let { register, errors, handleSubmit } = useForm();

    const handleName = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleVolunteer = () => {
        setVolunteer(true)
        if (volunteer) {
            setVolunteer(false)
        }
    }

    const handlePhoneNumber = (phone) => {
        setPhoneNumber(phone)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const newUser = { username, email, password, volunteer, phoneNumber }
            
            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
            .then(response => {
                console.log(response);
                window.flash('user has been created successfully!', 'success')
                setRedirect(true);
            })
            .catch(error => {
                window.flash('error user was not created', 'error')
                console.log(error)
            });
        }
    }

    if (redirect) return <Redirect to="/login" />

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" value={username} onChange={handleName} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPassword} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="volunteer">Volunteer as a peer councilor</label>
                            <br></br>
                            <input type="checkbox" name="volunteer" value={volunteer} onChange={handleVolunteer}/>
                        </div>
                        {volunteer ? 
                            <div className="form-group phoneNumber">
                                <p className="volunteerInfo">
                                    Volunteering as a peer councilor signifies that you are taking a pledge
                                    to be available to take any calls and be open and understanding to any situation.
                                </p>
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <PhoneInput
                                    country={'us'}
                                    value={phoneNumber}
                                    onChange={handlePhoneNumber}
                                />
                            </div> 
                        : null}
                        
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Signup;