// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get the button and message elements
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    // Add an event listener to the button
    button.addEventListener('click', () => {
        // Update the message content
        message.textContent = 'Button clicked! JavaScript is working!';
    });
});
