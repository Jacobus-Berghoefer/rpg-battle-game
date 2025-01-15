// Game Logic

//variables

let playerData = parseInt(localStorage.getItem('userCharacter')) || {
    userCharacter: {
        name: 'characterName', 
        Level: 1, 
        stats:{Str: 1, Stam: 1, Mana: 1}, 
        inventory: [], 
        location:'zone0' 
    },
};

//Zone Locations
let dataZone = {
   //let zoneLocation = JSON.parse(localStorage.getItem(playerData.userCharacter.location));

    mainMenu: 'index.html',
    zone0: '/assets/zones/zone0.html',
    zone1: '/assets/zones/zone1.html',
}

//Create new game for user
function newGame(){
    localStorage.clear();
    playerData = parseInt(localStorage.getItem('userCharacter')) || {
        userCharacter: {
            name: 'characterName', 
            Level: 1, 
            stats:{Str: 1, Stam: 1, Mana: 1}, 
            inventory: [], 
            location:'zone0' 
        },
    };
    localStorage.setItem('userCharacter', JSON.stringify(playerData));
    console.log(`New Game Started!`, playerData);
    //console.log(`New Game Started!`);
    alert('Good Luck On Your New Adventure!');

    window.location.href = './assets/zones/charCreate.html';
}

function getCurrentZone() {
    return document.documentElement.getAttribute("data-zone");
}

//save player game data
function saveGame() {

    //what element to give attribute of 'data-zone' in html sheet so it references the zone location?
    //const currentZone = document.body.getAttribute("data-zone");

    const currentZone = getCurrentZone();
    playerData.userCharacter.location = currentZone;

    localStorage.setItem('userCharacter',JSON.stringify(playerData));
    console.log('Game Data saved:', playerData);
    alert(`Game Saved! Current Zone: ${currentZone}`);
}

//Load game data from local storage if a user has saved data
function loadGame() {
    let savedData = localStorage.getItem('userCharacter');

    if (savedData) {

        //Need to update player based on saved player data (stats, inventory, location)
        playerData = JSON.parse(savedData);

        //get the saved zone location from local storage
        let savedZone = playerData.userCharacter.location;

        //reference the dataZone object to get the file path for the saved zone
        let currentZone = dataZone[savedZone];

        //updatePlayer(playerData); //ADD DETAILS TO UPDATE PLAYER FUNCTION
        console.log('Game data loaded', playerData);

    if (currentZone) {
        window.location.href = currentZone;
        } else {
            alert('Error: Saved zone location not found!');
        }        
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

function mainMenu() {
   
    console.log('You have moved back to the Main Menu.');
    alert('You have moved back to the Main Menu.');
    window.location.href = '../../index.html';
}

function nextZone() {
   
    console.log('You have moved to Zone 1.');
    alert('You have moved to Zone 1.');
    window.location.href = './zone1.html';
}


//functions to update game state

//update player state to reflect states, inventory, location
function updatePlayer(data) {
    console.log('Player Stats:', data.userCharacter)
    //Add function details to update a players stats, inventory, location here
}



