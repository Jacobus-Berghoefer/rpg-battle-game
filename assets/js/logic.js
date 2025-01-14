// Game Logic
//variables
let playerData = parseInt(localStorage.getItem('userCharacter')) || {
    userCharacter: {name: 'characterName', Level: 1, stats:{Str: 1, Stam: 1, Mana: 1}, inventory: [], location:'zone0' },
};

//Create new game for user
function newGame(){
    localStorage.clear();
    playerData = parseInt(localStorage.getItem('userCharacter')) || {
        userCharacter: {name: 'characterName', Level: 1, stats:{Str: 1, Stam: 1, Mana: 1}, inventory: [], location:'zone0' },
    };
    localStorage.setItem('userCharacter', JSON.stringify(playerData));
    console.log(`local storage cleared`);
}


//Load game data from local storage if a user has saved data
function loadGame() {
    let gameData = localStorage.getItem('userCharacter');

    if (gameData) {
        //Need to update player based on saved player data (stats, inventory, location)
        playerData = JSON.parse(gameData);
        updatePlayer(playerData);
        console.log('Game data loaded', playerData);
    } else {
        playerData = 'null';
        console.log('No saved game data found.');
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