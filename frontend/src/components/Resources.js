import React from 'react';
import axios from 'axios';


const Resources = () => {
   
        axios.get(`https://api.betterdoctor.com/2016-03-01/doctors?`)
        .then(response => {
            console.log(response.data);
            
        })
        return (
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
        )
}

export default Resources 