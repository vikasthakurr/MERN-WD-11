// JavaScript for the simple website

// Function to display a greeting
function displayGreeting() {
  const greeting = document.createElement('p');
  greeting.textContent = 'Hello! Welcome to the simple website.';
  document.querySelector('main').appendChild(greeting);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', displayGreeting);