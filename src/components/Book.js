import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './Book.css';
import calendarImage from '../Images/calendarImage.jpeg';


const clientId = "587776829840-8474v6hkt279dc2eh22oafdvtb11oihq.apps.googleusercontent.com";

const Book = () => {
    const fetchCalendarEvents = async (accessToken) => {
        try {
            const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Accept': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data); 
        } catch (error) {
            console.error('Error fetching calendar data:', error);

        }
    };

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        fetchCalendarEvents(res.accessToken);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    return (
        <div>
            <h1> When is the best time for you to join us on this journey? </h1>
            <img src= {calendarImage} alt="Calendar" className="cal" /> 
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                scope="https://www.googleapis.com/auth/calendar"
            />
        </div>
    );
};

export default Book;
