let allUsers = [];
let inputUser = '';
let numberFormat = 0;
let filterInput = null;

window.addEventListener('load', () => {
    
    inputUser = document.querySelector('#inputUser')
    filterInput = document.querySelector('#inputUser');
    numberFormat = Intl.NumberFormat("en-US");

    filterInput.addEventListener("keyup", (event) => {
        fetchUsers();
    });
});

// Collect informations from the API
async function fetchUsers(){
    const res = await fetch ('https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo');
    const json = await res.json();
    
    allUsers = json.results.map(user => {
        const { name, picture, dob, gender } = user;
        return{
            name: name.first + ' ' + name.last,
            picture: picture.large,
            dob: dob.age,
            gender
        };
    });
    renderUsers();
}

// Render users on screen
function renderUsers(){
    inputSearch();

    // Filter users
    const filteredUser = allUsers.filter(user => {
        const lowName = user.name.toLowerCase();
        const lowInputName = inputUser.value.toLowerCase();
        return lowName.includes(lowInputName);
    })

    // Order by ascending letters
    filteredUser.sort((a,b) => {
        return a.name.localeCompare(b.name)
    })

    // Show information on HTML
    let UsersHTML = '<div>';
    filteredUser.forEach(user => {
        const { name, picture, dob, gender } = user;
        const UserHTML = `
        <div class='info'>
            <img class='pic' src="${picture}" alt="${name}">
                <span class = 'content'>${name}, ${dob}, ${gender}</span>
            </div> 
        </div>               
        `;

        UsersHTML += UserHTML;
    });
    UsersHTML += '</div>';
    tabUsers.innerHTML = UsersHTML;
    countUsers.innerHTML = filteredUser.length;
    
    renderStatistics(filteredUser);
}

// When a key is typed, render returns the search 
function inputSearch(){
    inputUser.addEventListener("keypress", () => {
       inputUser.focus();
       return inputUser;
    });
}    

// Show statistics on screen
function renderStatistics(filteredUser){
    totalMasc.innerHTML = filteredUser.filter(user => user.gender === 'male').length;
    totalFem.innerHTML  = filteredUser.filter(user => user.gender === 'female').length;
    
    totalAges = filteredUser.reduce((acc, curr) => {
        return acc + curr.dob;
    }, 0);
    totalSumAges.innerHTML = totalAges !== 0 ? formatNumber(totalAges) : 0;

    totalAverageAge.innerHTML = filteredUser.length !== 0 ? formatNumber(totalAges / filteredUser.length) : 0;

}

// Format the numbers
function formatNumber(number){
    return numberFormat.format(number);
}