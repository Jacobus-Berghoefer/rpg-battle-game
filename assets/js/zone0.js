// zone0.js

// Load player data from localStorage
const playerData = JSON.parse(localStorage.getItem('userCharacter')) || null;

// Display player data (if available)
if (playerData) {
    console.log('Player loaded:', playerData);
    document.body.insertAdjacentHTML('beforeend', `<p>Welcome, ${playerData.userCharacter.name}!</p>`);
} else {
    console.log('No player data found. Redirecting to main menu...');
    window.location.href = 'index.html'; // Redirect if no data
}