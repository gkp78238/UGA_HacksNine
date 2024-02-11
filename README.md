##Team members: Gokul Premkumar, Bipasha Bipin, London Ho, Meghan Dey 

## Inspiration
The inspiration behind Superhero Care came from the need to improve the elderly care experience by seamlessly integrating technology. We aimed to create a platform that not only facilitates the matching of seniors with caretakers but also simplifies scheduling and communication, making the entire process more personal, efficient, and accessible.

## What it does
Superhero Care is a platform designed to match elderly individuals with caretakers who share similar personalities and beliefs, enhancing the caregiving experience. It allows users to log in, view available caretakers, book appointments, and manage their schedules through integration with Google Calendar. This personalized approach aims to improve the quality of care and support provided to seniors.

## How we built it
We built Superhero Care using React for the frontend, creating a responsive and user-friendly interface. For authentication and calendar integration, we utilized the Google Calendar API and the `react-google-login` package for OAuth2.0 authentication. The project structure involves components for displaying caretaker profiles, handling login functionality, and fetching calendar events, ensuring a seamless user experience.

## Challenges we ran into
One of the main challenges was integrating the Google Calendar API, particularly managing OAuth2.0 authentication and ensuring secure access without exposing sensitive credentials. Additionally, fetching and displaying calendar data presented a learning curve. We also faced issues with dependency conflicts in our React project, requiring us to adapt and find workarounds for version compatibility.

## Accomplishments that we're proud of
We are proud of successfully integrating the ChatBot API. We are also glad to be attempting to integrate the Google Calendar API with our React application, enabling users to manage their appointments directly within Superhero Care. Overcoming the challenges of OAuth2.0 authentication and ensuring a secure login process were significant achievements. Additionally, creating a responsive and intuitive UI that enhances the user experience stands out as a key accomplishment. 

## What we learned
Throughout this project, we learned about OAuth2.0 authentication flows, integrating third-party APIs such as Google Calendar into a React application, and handling CORS issues. We also gained experience in managing dependency conflicts and utilizing React hooks for state management and side effects.

## What's next for Superhero Care
Looking ahead, we plan to expand Superhero Care by adding features such as real-time notifications, caretaker reviews, and enhanced matching algorithms. We aim to explore server-side rendering for improved SEO and performance, and consider incorporating AI to analyze user preferences for better matches. Ultimately, we want to create a comprehensive platform that serves as a one-stop solution for elderly care needs, fostering community and support among users.

