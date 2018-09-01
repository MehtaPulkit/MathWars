
// This creates the settings page
function showSettings(){
  //Checks currentPage value
  // if not equal to null then hide the page, this helps to toggle the pages between different levels
  if (currentPage != null){
    currentPage.classList.add("hide");
  }
    // check if we haven’t yet created this page
  if (typeof window.settingsPage === "undefined") {
    // Creating the container element of the settings page and adding styles to display it.
    window.settingsPage = createDiv("instr");
    settingsPage.classList.add("page");
    settingsPage.classList.add("gamePage");
    // Creation of elements for the settings page
    var settingsIcon=createImage("images/settings.png");
    settingsIcon.classList.add("settingIcon");
    var soundSpan= createSpan("SOUND","settingSpan");
    var soundButton= createButton(" ","soundButton");
    var soundOnIcon=createImage("images/sound-on.png");
    soundOnIcon.classList.add("soundIcon");
    soundButton.appendChild(soundSpan);
    soundButton.appendChild(soundOnIcon);
    var soundOffIcon=createImage("images/sound-off.png");
    soundOffIcon.classList.add("soundIcon");
    soundOffIcon.classList.add("hide");
    soundButton.appendChild(soundOffIcon);
    soundButton.addEventListener('click',function(){
      // This toggles the button on click and displays the information under the button on the page
    if(soundOnIcon.classList.value.includes("hide")){
      soundOffIcon.classList.add("hide");
      soundElement.play();
      soundOnIcon.classList.remove("hide");
    }else{
      soundOnIcon.classList.add("hide");
      soundElement.pause();
      soundOffIcon.classList.remove("hide");
     }
    })
    var help=createSpan("HELP","settingSpan");
    var helpButton=createButton("","soundButton");
    helpButton.appendChild(help);
    var helpIcon=createImage("images/help.png");
    helpIcon.classList.add("soundIcon");
    helpButton.appendChild(helpIcon);
    helpButton.addEventListener('click',function(){
      // This toggles the button on click and displays the information under the button on the page
      if(helpDescription.classList.value.includes("hide")){
        helpDescription.classList.remove("hide");
      }else{
        helpDescription.classList.add("hide");
      }
    });
    var brk= createBreakLine();
    var helpDescription=createParagraph("For more help you can mail us at: mehtapu@deakin.edu.au ","help");
    helpDescription.classList.add("hide");
    var aboutUs=createSpan("ABOUT US","settingSpan");
    var aboutUsButton=createButton("","soundButton");
    aboutUsButton.appendChild(aboutUs);
    aboutUsButton.addEventListener('click',function(){
      // This toggles the button on click and displays the information under the button on the page
      if(aboutUsDescription.classList.value.includes("hide")){
        aboutUsDescription.classList.remove("hide");
      }else{
        aboutUsDescription.classList.add("hide");
      }
    });
    var aboutUsIcon=createImage("images/aboutUs.png");
    aboutUsIcon.classList.add("soundIcon");
    var aboutUsDescription=createParagraph("Name : Pulkit Mehta SID :218069424 . I am greatful to all the authors of the all resources I have used. Especially thankful of Royalty free music for there music:  ","help");
    var hyperlink= document.createElement("a");
    hyperlink.setAttribute("href","https://www.bensound.com/royalty-free-music/track/instinct");
    var t=document.createTextNode("Royalty Free music");
    hyperlink.appendChild(t);
    aboutUsDescription.appendChild(hyperlink);
    aboutUsDescription.classList.add("hide");
    var brk2= createBreakLine();
    var backBtn=createButton("Back","play");
    //Takes you back to the main page
    backBtn.addEventListener('click', function(){
      loadApp();
    });
    var buttonDiv= createDiv();
    buttonDiv.appendChild(backBtn);
    buttonDiv.classList.add("settingBackBtn");
    //Adds elements to the page
    settingsPage.appendChild(settingsIcon);
    settingsPage.appendChild(soundButton);
    settingsPage.appendChild(brk);
    settingsPage.appendChild(helpButton);
    settingsPage.appendChild(helpDescription);
    settingsPage.appendChild(brk2);
    settingsPage.appendChild(aboutUsButton);
    settingsPage.appendChild(aboutUsDescription);
    settingsPage.appendChild(buttonDiv);
    document.body.appendChild(settingsPage);

    }
  // sets the new currentPage to this game
  currentPage = settingsPage;
  // shows the page
  currentPage.classList.remove("hide");
  }
