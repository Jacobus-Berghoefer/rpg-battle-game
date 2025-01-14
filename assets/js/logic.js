// Game Logic



let playerData = parseInt(localStorage.getItem('userCharacter')) || {
    userCharacter: {name: 'characterName', Level: 1},
};

//Create new game for user
function newGame(){
    localStorage.clear();
    console.log(`local storage cleared`);
}


//Load game data from local storage if a user has saved
function loadGame() {
    const gameData = localStorage.getItem('gameData');

    if (gameData)
        const parsedData = JSON.parse(gameData);
    
    console.log('Game data loaded', parsedData);

    //Need to update player based on saved data (stats, inventory, location)
    if (parsedData.player) {
        updatePlayer(parsedData.player);
    }
    else {
        console.log('No saved game data found.');
    }
}

//functions to update game state

//update player state to reflect states, inventory, location
function updatePlayer(playerData) {
    console.log('Player Stats:')
}