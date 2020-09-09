import React, { useState } from 'react';
import axios from 'axios';


const Resources = () => {
    let [city, setCity] = useState('');
    let [state, setState] = useState('');
    let [poi, setPoi] = useState('');
    let [lat, setLat] = useState('');
    let [log, setLog] = useState('');

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const handleState = (e) => {
        setState(e.target.value);
    }

    const handleSubmit = (e) => {
        
    }

      
        return (
            <>
            <div>
                <div>     
                    <h2>Call the National Suicide Prevention Lifeline</h2>
                    <h1>1-800-273-8255</h1>
                    <p>"The National Suicide Prevention Lifeline is a national network of local crisis centers that provides
                        free and confidential emotional support to peopl ein suicidal crisis or emotional distress 24 hours
                        a day, 7 days a week.
                    </p>
                </div>
            </div>
            <div>
                <form  onSubmit={handleSubmit}>
                <input hidden type="text" name="poi" placeholder="poi" value="mental health, therapy"/>
                <input type="text" name="city" id="" placeholder="city"/>
                <input type="text" name="state" id="" placeholder="state"/>
                <button type="submit">Submit </button>
                </form>
            </div>
            </>
            
        )
}

export default Resources 