// Game Logic
//variables

//let playerData = parseInt(localStorage.getItem('userCharacter')) || {
//    userCharacter: {
//        name: 'characterName', 
//        Level: 1, 
//        stats:{Str: 1, Stam: 1, Mana: 1}, 
//        inventory: [], 
//        location:'zone0' 
//    },
//};

//Create new game for user
function newGame(){
    localStorage.clear();
//    playerData = parseInt(localStorage.getItem('userCharacter')) || {
//        userCharacter: {
//            name: 'characterName', 
//            Level: 1, 
//            stats:{Str: 1, Stam: 1, Mana: 1}, 
//            inventory: [], 
//            location:'zone0' 
//        },
//    };
//    localStorage.setItem('userCharacter', JSON.stringify(playerData));
//    console.log(`New Game Started!`, playerData);
    console.log(`New Game Started!`);

    window.location.href = './assets/zones/zone0.html';
}


//Load game data from local storage if a user has saved data
function loadGame() {
    let savedData = localStorage.getItem('userCharacter');

    if (savedData) {
        //Need to update player based on saved player data (stats, inventory, location)
        playerData = JSON.parse(savedData);
        //updatePlayer(playerData); //ADD DETAILS TO UPDATE PLAYER FUNCTION
        console.log('Game data loaded', playerData);
    } else {
        alert('No saved game found!');
        console.log('No saved game data found.');
    }
}

// Open Settings
function settingsGame() {
    // Add your logic for the settings page
    console.log('Settings selected.');
    alert('Settings menu is currently under development!');
}

// Exit Game
function exitGame() {
    if (confirm('Are you sure you want to exit the game?')) {
        console.log('Game exited.');
        window.close(); // Tries to close the browser tab (may not work in all browsers)
    } else {
        console.log('Exit canceled.');
    }
}

//functions to update game state

//update player state to reflect states, inventory, location
function updatePlayer(data) {
    console.log('Player Stats:', data.userCharacter)
    //Add function details to update a players stats, inventory, location here
}

//save player game data
function saveGame() {
    localStorage.setItem('userCharacter',JSON.stringify(playerData));
    console.log('Game Data saved:', playerData);
}