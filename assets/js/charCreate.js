// Handle the character creation form
document.getElementById('character-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const strength = parseInt(document.getElementById('strength').value);
    const stamina = parseInt(document.getElementById('stamina').value);
    const mana = parseInt(document.getElementById('mana').value);

    // Validate the input (optional but recommended)
    if (!name) {
        alert('Please enter a valid character name!');
        return;
    }

    // Create the playerData object
    const playerData = {
        userCharacter: {
            name: name,
            Level: 1,
            stats: {
                Str: strength,
                Stam: stamina,
                Mana: mana
            },
            inventory: [],
            location: 'zone0'
        }
    };

    // Save the playerData to localStorage
    localStorage.setItem('userCharacter', JSON.stringify(playerData));

    console.log('Character Created:', playerData);
    alert(`Welcome, ${name}! Your adventure begins...`);

    // Redirect to the first zone
    window.location.href = '/assets/zones/zone0.html';
});