function loadMenu(){
    const menuContainer = document.getElementById("nav__list");

    if (menuContainer.className === "nav__list"){
        menuContainer.className += " responsive";
        console.log(menuContainer);
    } else {
        menuContainer.className = "nav__list";
        console.log(menuContainer)
    }
}

// const number = 5;

// function addTen(){
//     for (let j = number; j < 11; j++){
//         // document.getElementById('country')1
//         console.log(j + )
//     }
// }