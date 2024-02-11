import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './Book.css';

// Ensure clientId is stored safely, consider using environment variables
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
            console.log(data); // Consider updating component state to render calendar data
        } catch (error) {
            console.error('Error fetching calendar data:', error);
            // Consider updating component state to show error
        }
    };

    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        fetchCalendarEvents(res.accessToken);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        // Consider providing user feedback on login failure
    };

    return (
        <div>
            <header> When is the best time for you to join us on this journey? </header>
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
