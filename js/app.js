
//Loads the APP
window.onload= loadApp;
//Stores the value of the currentPage as div element.
window.currentPage=null;
// Theme song to run at the background of the game
window.soundElement= createAudio("sounds/themeSong.mp3");

/*This function is called when the app gets loaded.
This displays the entrance page of the game.
Consists of App title, play button and settings button*/
//  For calling [ window.onload= loadApp; ]is used so that is called when the app is loaded.
function loadApp(){
  // Applies the background image to the body
  document.body.classList.add("gameBgImage");
  //Checks currentPage value
  // if not equal to null then hide the page, this helps to toggle the pages between different levels
  if (currentPage != null){
    currentPage.classList.add("hide");
  }
  //Checks if the page is already defined or not
  // This halts multiple creation of the same page
  if (typeof window.mainPage === "undefined") {
    // main page is a created as div element
    window.mainPage= createDiv("center");
    //Creates header elements for the entrance page with App title
    var appTitle= createHeading1("MATH WARS","main");
    appTitle.classList.add("entrancePage");
    //Creates button for the Play option
    var buttonPlay = createButton("Play","play");
    //This call the function to show game1 with event handler
    buttonPlay.onclick = showGameTypes;
    //Creates button for the Instructions option
    var buttonInstr= createButton("Settings","instructions");
    buttonInstr.onclick= showSettings;
    // home and back button are added to a div to style them together
    var buttonDiv=createDiv("buttonDiv");
    buttonDiv.classList.add("entrancePage");
    buttonDiv.appendChild(buttonPlay);
    buttonDiv.appendChild(buttonInstr);
    //Adds all the elements to the div element
    mainPage.appendChild(appTitle);
    mainPage.appendChild(buttonDiv);
  }
  //currentPage is assigned the main page above created
  currentPage=mainPage;
  currentPage.classList.remove("hide");
  //Adds div to the body
  document.body.appendChild(mainPage);
  if(soundElement==undefined){
    document.body.appendChild(soundElement);
  }
}
