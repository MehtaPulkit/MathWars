/*This function shows the menu page of the game.
It is called when the page button is clicked on the entrance page.
It consists of three images in the page each representing a game type and with a back button*/
// it can be called by [ showGameTypes() ] or using it as an event handler [ showGameTypes; ]
function showGameTypes(){
  //Checks currentPage value
  // if not equal to null then hide the page, this helps to toggle the pages between different levels
  if (currentPage != null){
    currentPage.classList.add("hide");
  }
  //Checks if the page is already defined or not
  // This halts multiple creation of the same page
  if (typeof window.gameTypePage === "undefined") {
    //menu page is created as a div element
    window.gameTypePage=createDiv();
    //style is provided to display of the page
    gameTypePage.classList.add("page");
    //There are three game types in menu page each with different image
    /*
    Each image represents the game type
    and event handler is added to display the respective gaming page.
    Different styles are added to each element.
    */
    // Arithmetic operations game
    var game1= createImage("images/upgrade_grenade.png");
    game1.classList.add("menuImage");
    game1.classList.add("menuImage1");
    game1.setAttribute("title","ARITHMETIC OPERATIONS");
    game1.onclick=selectGames;
    // Spelling the numbers game
    var game2= createImage("images/upgrade_grenade_2.png");
    game2.classList.add("menuImage");
    game2.setAttribute("title","SPELL THE NUMBERS");
    game2.onclick=showSpellGameLevels;
    //Counting the numbers game
    var game3= createImage("images/upgrade_grenade_3.png");
    game3.classList.add("menuImage");
    game3.setAttribute("title","COUNTING NUMBERS");
    game3.onclick=showMovingGame;

    // Back button to go back to the main page and this is added to a div to added specific styles
    var backBtnDiv=createDiv("menuBackbtnDiv");
    var backBtn=createButton("Back","menuBackbtn");
    backBtn.addEventListener('click', function(){
      loadApp();
    });
    // Adds back button to the back button div
    backBtnDiv.appendChild(backBtn);
    //Adds all the elements to the page
    gameTypePage.appendChild(game1);
    gameTypePage.appendChild(game2);
    gameTypePage.appendChild(game3);
    gameTypePage.appendChild(backBtnDiv);
    //Adds the menu page to the body
    document.body.appendChild(gameTypePage);
  }
  // sets the new currentPage to this game
  currentPage = gameTypePage;
  // shows the page
  currentPage.classList.remove("hide");

}
