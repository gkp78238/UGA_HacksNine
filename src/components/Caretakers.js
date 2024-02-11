import './Caretakers.css';
import React from 'react';

document.addEventListener("DOMContentLoaded", function() {
    // Sample data for demonstration
    const user = {
        name: "Elderly User",
        needs: "Assisted Living"
    };

    const caretakers = [
        {
            name: "Caretaker 1",
            qualifications: ["Experience in elderly care", "Certified nurse"]
        },
        {
            name: "Caretaker 2",
            qualifications: ["First aid training", "Patient and empathetic"]
        },
        {
            name: "Caretaker 3",
            qualifications: ["Experience with dementia patients", "Flexible schedule"]
        }
    ];

    // Display user's matches with caretakers
    const matchesContainer = document.getElementById("matches");

    // Display user's information
    const userHeader = document.createElement("h2");
    userHeader.textContent = `${user.name} - ${user.needs}`;
    matchesContainer.appendChild(userHeader);

    // Display each matched caretaker with their qualifications
    caretakers.forEach(caretaker => {
        const matchDiv = document.createElement("div");
        matchDiv.classList.add("match");

        const caretakerHeader = document.createElement("h2");
        caretakerHeader.textContent = caretaker.name;
        matchDiv.appendChild(caretakerHeader);

        const qualificationsList = document.createElement("ul");
        caretaker.qualifications.forEach(qualification => {
            const qualificationItem = document.createElement("li");
            qualificationItem.textContent = qualification;
            qualificationsList.appendChild(qualificationItem);
        });
        matchDiv.appendChild(qualificationsList);

        matchesContainer.appendChild(matchDiv);
    });
});
export default caretakers;

