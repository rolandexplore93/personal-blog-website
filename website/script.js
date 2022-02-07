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