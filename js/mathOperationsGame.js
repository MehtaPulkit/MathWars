/*Elements needed for the game
  These all variables are accessible throughout the JS file*/
var questionElement;
var scoreGame1Statement;
var currentAnswer;
var questionNoGame1=0;
var level="";
var questionStatement;
var scoreGame1=0;
var tankG1 ;
var tankG2;
var tankG3;
var homeBtn;
var backBtn;
var option1;
var option2;
var option3;
var option4;
var selectedGame;
// Provides the selected level
function getLevel(){
  return level;
}
//provides the selected game type
function getSelectedGame(){
  return selectedGame;
}
/*This function Displays the levels of the  Mathematical operations game.
It consists of three levels: Easy, Medium, Hard*/
function showGame1Levels(){

  //Checks currentPage value
  // if not equal to null then hide the page, this helps to toggle the pages between different levels
  if (currentPage != null){
    currentPage.classList.add("hide");
  }
  //Checks if the page is already defined or not
  // This halts multiple creation of the same page
  if (typeof window.game1LevelPage === "undefined") {
    //page is created as a div element
    window.game1LevelPage = createDiv("center");
    //style is provided to display of the page
    game1LevelPage.classList.add("page");
    /*Three buttons are made for each level easy, medium, hard*/
    var easy=createButton("Easy","gameType");
    // Event handler added on click of the button
    easy.addEventListener('click', function(){
      level="easy";
      showGame1(level,selectedGame);
    });
    var medium=createButton("Medium","gameType");
    // Event handler added on click of the button
    medium.addEventListener('click', function(){
      level="medium";
      showGame1(level,selectedGame);
    });
    var hard=createButton("Hard","gameType");
    // Event handler added on click of the button
    hard.addEventListener('click', function(){
      level="hard";
      showGame1(level,selectedGame);
    });
    //Home button takes you to the main page/ entrance page
    var homeBtn=createButton("Home","play");
    // Event handler added on click of the button
    homeBtn.addEventListener('click', function(){
      loadApp();
    });
    //creates a back button
    var backBtn=createButton("Back","instructions");
    // Takes you to the game types screen
    backBtn.onclick=selectGames;
    // home and back button are added to a div to style them together
    var buttonDiv= createDiv("buttonDiv");
    buttonDiv.appendChild(homeBtn);
    buttonDiv.appendChild(backBtn);

    //Adds elements to the div
    game1LevelPage.appendChild(easy);
    game1LevelPage.appendChild(medium);
    game1LevelPage.appendChild(hard);
    game1LevelPage.appendChild(buttonDiv);

    //Adds div to the body
    document.body.appendChild(game1LevelPage);
  }
  // sets the new currentPage to this game
  currentPage = game1LevelPage;
  // shows the page (now it is definitely created)
  currentPage.classList.remove("hide");
}
/*This function shows a menu page for different operations game level available.
It consists of four levels : Addition, Subtraction, Multiplication, Division*/
function selectGames(){
  if(popUpDiv!=undefined){
    popUpDiv.classList.remove("hide");
  }
  //Checks currentPage value
  // if not equal to null then hide the page, this helps to toggle the pages between different levels
  if (currentPage != null){
    currentPage.classList.add("hide");
  }
  //Checks if the page is already defined or not
  // This halts multiple creation of the same page
  if (typeof window.selectGamePage === "undefined") {
    //page is created as a div element
    window.selectGamePage = createDiv("center");
    //style is provided to display of the page
    selectGamePage.classList.add("page");
    /*Three buttons are made for each level easy, medium, hard*/
    var addition=createButton("Addition","gameType");
    // Event handler added on click of the button
    addition.addEventListener('click', function(){
      selectedGame="addition";
      showGame1Levels();
    });
    var subtraction=createButton("Subtraction","gameType");
    // Event handler added on click of the button
    subtraction.addEventListener('click', function(){
      selectedGame="subtraction";
      showGame1Levels();
    });
    var multiplication=createButton("Multiplication","gameType");
    // Event handler added on click of the button
    multiplication.addEventListener('click', function(){
      selectedGame="multiplication";
      showGame1Levels();
    });
    var division=createButton("Division","gameType");
    // Event handler added on click of the button
    division.addEventListener('click', function(){
      selectedGame="division";
      showGame1Levels();
    });
    //Home button takes you to the main page/ entrance page
    var homeBtn=createButton("Home","play");
    // Event handler added on click of the button
    homeBtn.addEventListener('click', function(){
      loadApp();
    });
    //creates a back button
    var backBtn=createButton("Back","instructions");
    // Takes you to the game types screen
    backBtn.onclick=showGameTypes;
    // home and back button are added to a div to style them together
    var buttonDiv= createDiv("buttonDiv");
    buttonDiv.appendChild(homeBtn);
    buttonDiv.appendChild(backBtn);
    // Instructions lines come in the container popUpDiv.
    var popUpDiv= createDiv("modal");
    var popUpInnerDiv= createDiv("modal-content");
    var closeSpan=createSpan("","close");
    var cross= createImage("images/blackCross.png");
    cross.classList.add("cross");
    closeSpan.appendChild(cross);
    closeSpan.addEventListener('click', function(){
    popUpDiv.classList.add("hide");
    });
    var headingInstr=createHeading1("How to Play?")
    var instructions=createParagraph("Mathematical Operations: Addition, Subtraction, Multiplication, and Division.");
    var intrs=createParagraph("Further each of these are divided into three levels: Easy, Medium, and Hard. In each level you will get a set of Multi-Choice Questions.");
    var intrs2=createParagraph("Try to solve and score maximum. This way you can practice and learn about the Mathematical Operations. ")
    popUpInnerDiv.appendChild(closeSpan);
    popUpInnerDiv.appendChild(headingInstr);
    popUpInnerDiv.appendChild(instructions);
    popUpInnerDiv.appendChild(intrs);
    popUpInnerDiv.appendChild(intrs2);
    popUpDiv.appendChild(popUpInnerDiv);
    //Adds elements to the div
    selectGamePage.appendChild(addition);
    selectGamePage.appendChild(subtraction);
    selectGamePage.appendChild(multiplication);
    selectGamePage.appendChild(division);
    selectGamePage.appendChild(buttonDiv);
    selectGamePage.appendChild(popUpDiv);

    //Adds div to the body
    document.body.appendChild(selectGamePage);
  }
  // sets the new currentPage to this game
  currentPage = selectGamePage;
  // shows the page (now it is definitely created)
  currentPage.classList.remove("hide");

}

/* This functions shows the gaming page of mathematical operations.
It consists of a question and four option as buttons to choose from.*/
/* function has two parameters level and selectedGame .
  level is the current level selected and selectGame is the game type selected.
*/
function showGame1(level,selectedGame) {
 if(questionStatement!=undefined){
   if(selectedGame=="addition"){
      questionStatement.textContent="Add the above numbers";
   }
   else if(selectedGame=="subtraction"){
     questionStatement.textContent="Subtract the above numbers";
   }else if(selectedGame=="multiplication"){
     questionStatement.textContent="Multiply the above numbers";
   }else if(selectedGame=="division"){
     questionStatement.textContent="Divide the above numbers";
   }
 }
  //Check on elements that if they are defined then hide some elements and unhide other.
  if(questionStatement!= undefined && scoreGame1Statement!=undefined && tankG1!=undefined && tankG2!=undefined && tankG3!=undefined && option1!=undefined && option2!=undefined && option3!=undefined && option4!=undefined){
    // Unhiding Following elements
    scoreGame1Statement.classList.remove("hide");
    questionStatement.classList.remove("hide");
    option1.classList.remove("hide");
    option2.classList.remove("hide");
    option3.classList.remove("hide");
    option4.classList.remove("hide");
    // Hiding Following elements
    tankG1.classList.remove("tank");
    tankG1.classList.add("intialTank");
    tankG2.classList.remove("tank");
    tankG2.classList.add("intialTank");
    tankG3.classList.remove("tank");
    tankG3.classList.add("intialTank");
    tankG1.classList.add("hide");
    tankG2.classList.add("hide");
    tankG3.classList.add("hide");
    }
    // hides any existing page
  if (currentPage != null){
    currentPage.classList.add("hide");
    }
    //Checks if the page is already defined or not
    // This halts multiple creation of the same page
  if (typeof window.game1Page === "undefined") {
    window.game1Page = createDiv("center");
    //Styles added to the page
    game1Page.classList.add("page");
    game1Page.classList.add("gamePage");
    //Creates a question createTextNode
    questionElement=createParagraph("","question");
    /*Tanks images are used to represent the scoreGame1 level*/
    tankG1= createImage("images/tank.png");
    tankG1.classList.add("intialTank");

    tankG2= createImage("images/tank.png");
    tankG2.classList.add("intialTank");

    tankG3= createImage("images/tank.png");
    tankG3.classList.add("intialTank");
    tankG1.classList.add("hide");
    tankG2.classList.add("hide");
    tankG3.classList.add("hide");
    //Statement decribing the rules
    if(selectedGame=="addition"){
       questionStatement=createParagraph("Add the above numbers","answer");
    }
    else if(selectedGame=="subtraction"){
      questionStatement=createParagraph("Subtract the above numbers","answer");
    }else if(selectedGame=="multiplication"){
      questionStatement=createParagraph("Multiply the above numbers","answer");
    }else if(selectedGame=="division"){
      questionStatement=createParagraph("Divide the above numbers","answer");
    }

    /*Multiple choice Questions consists of four options
    Here, Following are the options .
    Each option has a event handler to check the current answer and generate the next one*/
    option1=createButton("","game1Options");
    option1.addEventListener('click', function(){
      var lvl= getLevel();
      var slctdGame = getSelectedGame();
      checkAnswer(option1.innerText,lvl,slctdGame);
      generateLevelQuestion(lvl, slctdGame);
    });
    option2=createButton("","game1Options");
    option2.addEventListener('click', function(){
      var lvl= getLevel();
      var slctdGame = getSelectedGame();
      checkAnswer(option2.innerText,lvl,slctdGame);
      generateLevelQuestion(lvl, slctdGame);
    });
    option3=createButton("","game1Options");
    option3.addEventListener('click', function(){
      var lvl= getLevel();
      var slctdGame = getSelectedGame();
      checkAnswer(option3.innerText,lvl,slctdGame);
      generateLevelQuestion(lvl, slctdGame);
    });
    option4=createButton("","game1Options");
    option4.addEventListener('click', function(){
      var lvl= getLevel();
      var slctdGame = getSelectedGame();
      checkAnswer(option4.innerText,lvl,slctdGame);
      generateLevelQuestion(lvl, slctdGame);
    });
      // All the options are grouped together in the options div
    var optionsDiv=createDiv("center");
    var breakLine=createBreakLine();
    optionsDiv.appendChild(option1);
    optionsDiv.appendChild(option2);
    optionsDiv.appendChild(breakLine);
    optionsDiv.appendChild(option3);
    optionsDiv.appendChild(option4);

    //Creates answer input box
    scoreGame1Statement=createParagraph("","scoreStatement");

    //creates a home button
    homeBtn=createButton("Home","play");
    // Takes you to the home screen
    homeBtn.addEventListener('click', function(){
      questionNoGame1=0;
      scoreGame1=0;
      loadApp();
    });
    //creates a back button
    backBtn=createButton("Back","instructions");
    // Takes you to the menu screen and clears out the existing data
    backBtn.addEventListener('click', function(){
      questionNoGame1=0;
      scoreGame1=0;
      showGame1Levels();
    });
    //
    var buttonDiv= createDiv("buttonDiv");
    buttonDiv.appendChild(homeBtn);
    buttonDiv.appendChild(backBtn);
    //Adds elements to the Div
    game1Page.appendChild(questionElement);
    game1Page.appendChild(tankG1);
    game1Page.appendChild(tankG2);
    game1Page.appendChild(tankG3);
    game1Page.appendChild(questionStatement);
    game1Page.appendChild(optionsDiv);
    game1Page.appendChild(scoreGame1Statement);
    game1Page.appendChild(buttonDiv);

    //Adds page to the body
    document.body.appendChild(game1Page);

  }
  //Makes call to generate first question.
  generateLevelQuestion(level, selectedGame);
  // sets the new currentPage to this game
  currentPage = game1Page;
  // shows the page (now it is definitely created)
  currentPage.classList.remove("hide");
}
/*This function generates question based on the game level and selected type of mathematical operation.
For Example: Level is medium and selectedGame is Mulitiplication.
It will show set of questions in the multiplication game of medium level.

Each question has 4 options which are also generated with each question in this function*/

function generateLevelQuestion(level, selectedGame){

  // Refreshes the Answer field and textbox elements
  scoreGame1Statement.textContent="";
  if(selectedGame=="addition"){
    //Check the level and generate questions of that level
    if(level=="easy"){
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<additionQuestionBank.easy.length){
        generateOptions(level,selectedGame);
        var itemQuestion= additionQuestionBank.easy[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= additionQuestionBank.easy[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");

      }
      //increments the question number
      questionNoGame1++;

    }else if (level=="medium") {
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<additionQuestionBank.medium.length){
        generateOptions(level,selectedGame);
        var itemQuestion= additionQuestionBank.medium[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= additionQuestionBank.medium[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");

      }
      //increments the question number
      questionNoGame1++;

    }else if (level=="hard"){
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<additionQuestionBank.hard.length){
        generateOptions(level, selectedGame);
        var itemQuestion= additionQuestionBank.hard[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= additionQuestionBank.hard[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");
      }
      //increments the question number
      questionNoGame1++;

    }
  }
  else if(selectedGame=="subtraction"){
    //Check the level and generate questions of that level
    if(level=="easy"){
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<subtractionQuestionBank.easy.length){
        generateOptions(level,selectedGame);
        var itemQuestion= subtractionQuestionBank.easy[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= subtractionQuestionBank.easy[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");

      }
      //increments the question number
      questionNoGame1++;

    }else if (level=="medium") {
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<subtractionQuestionBank.medium.length){
        generateOptions(level,selectedGame);
        var itemQuestion= subtractionQuestionBank.medium[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= subtractionQuestionBank.medium[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");

      }
      //increments the question number
      questionNoGame1++;

    }else if (level=="hard"){
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<subtractionQuestionBank.hard.length){
        generateOptions(level, selectedGame);
        var itemQuestion= subtractionQuestionBank.hard[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= subtractionQuestionBank.hard[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");
      }
      //increments the question number
      questionNoGame1++;

    }
  }
  else if(selectedGame=="multiplication"){
    //Check the level and generate questions of that level
    if(level=="easy"){
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<multiplicationQuestionBank.easy.length){
        generateOptions(level,selectedGame);
        var itemQuestion= multiplicationQuestionBank.easy[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= multiplicationQuestionBank.easy[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");

      }
      //increments the question number
      questionNoGame1++;

    }else if (level=="medium") {
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<multiplicationQuestionBank.medium.length){
        generateOptions(level,selectedGame);
        var itemQuestion= multiplicationQuestionBank.medium[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= multiplicationQuestionBank.medium[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");

      }
      //increments the question number
      questionNoGame1++;

    }else if (level=="hard"){
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<multiplicationQuestionBank.hard.length){
        generateOptions(level, selectedGame);
        var itemQuestion= multiplicationQuestionBank.hard[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= multiplicationQuestionBank.hard[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");
      }
      //increments the question number
      questionNoGame1++;

    }
  }
  else if(selectedGame=="division"){
    //Check the level and generate questions of that level
    if(level=="easy"){
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<divisionQuestionBank.easy.length){
        generateOptions(level,selectedGame);
        var itemQuestion= divisionQuestionBank.easy[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= divisionQuestionBank.easy[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");

      }
      //increments the question number
      questionNoGame1++;

    }else if (level=="medium") {
      // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<divisionQuestionBank.medium.length){
        generateOptions(level,selectedGame);
        var itemQuestion= divisionQuestionBank.medium[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= divisionQuestionBank.medium[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");

      }
      //increments the question number
      questionNoGame1++;

    }else if (level=="hard"){
  // checks if the question number doesn't exceed the total number in data
      if(questionNoGame1<divisionQuestionBank.hard.length){
        generateOptions(level, selectedGame);
        var itemQuestion= divisionQuestionBank.hard[questionNoGame1].question;
        //Changes the question element
        questionElement.textContent=itemQuestion;
        var itemAnswer= divisionQuestionBank.hard[questionNoGame1].answer;
        //Changes the answer element
        currentAnswer=itemAnswer;
        scoreGame1Statement.textContent="";
      }
      else{
        //Score page Elements are displayed when the level is complete and game page elements are made hidden
        questionElement.textContent="Level Complete";
        tankG1.classList.remove("hide");
        tankG2.classList.remove("hide");
        tankG3.classList.remove("hide");
        if(scoreGame1>0 && scoreGame1<=4){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
        }
        else if(scoreGame1>4 && scoreGame1<=8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
        } else if(scoreGame1>8){
          tankG1.classList.remove("intialTank");
          tankG1.classList.add("tank");
          tankG2.classList.remove("intialTank");
          tankG2.classList.add("tank");
          tankG3.classList.remove("intialTank");
          tankG3.classList.add("tank");
        }
        scoreGame1Statement.textContent="Score:"+scoreGame1;
        questionStatement.classList.add("hide");
        option1.classList.add("hide");
        option2.classList.add("hide");
        option3.classList.add("hide");
        option4.classList.add("hide");
      }
      //increments the question number
      questionNoGame1++;

    }
  }
}
/*This function checks the answer for the question of a selected game type and level*/
function checkAnswer(userInput,level,selectedGame){
if(selectedGame=="addition"){
  if(level=="easy"){
    //checks if the question number doesn't exceed the total number in data
  if(questionNoGame1<additionQuestionBank.easy.length+1){
    //for Correct answer
    if(currentAnswer==userInput){
      scoreGame1+=1;
    }

  }
  }else if(level=="medium"){
    if(questionNoGame1<additionQuestionBank.medium.length+1){
      //for Correct answer
      if(currentAnswer==userInput){
        scoreGame1+=1;
      }

    }
  }else if(level=="hard"){
    if(questionNoGame1<additionQuestionBank.hard.length+1){
      //for Correct answer
      if(currentAnswer==userInput){
      scoreGame1+=1;
      }
    }
}
}else if(selectedGame=="subtraction"){
  if(level=="easy"){
    //checks if the question number doesn't exceed the total number in data
  if(questionNoGame1<subtractionQuestionBank.easy.length+1){
    //for Correct answer
    if(currentAnswer==userInput){
      scoreGame1+=1;
    }

  }
  }else if(level=="medium"){
    if(questionNoGame1<subtractionQuestionBank.medium.length+1){
      //for Correct answer
      if(currentAnswer==userInput){
        scoreGame1+=1;
      }

    }
  }else if(level=="hard"){
    if(questionNoGame1<subtractionQuestionBank.hard.length+1){
      //for Correct answer
      if(currentAnswer==userInput){
      scoreGame1+=1;
      }
    }
}}
else if(selectedGame=="multiplication"){
  if(level=="easy"){
    //checks if the question number doesn't exceed the total number in data
  if(questionNoGame1<multiplicationQuestionBank.easy.length+1){
    //for Correct answer
    if(currentAnswer==userInput){
      scoreGame1+=1;
    }

  }
  }else if(level=="medium"){
    if(questionNoGame1<multiplicationQuestionBank.medium.length+1){
      //for Correct answer
      if(currentAnswer==userInput){
        scoreGame1+=1;
      }

    }
  }else if(level=="hard"){
    if(questionNoGame1<multiplicationQuestionBank.hard.length+1){
      //for Correct answer
      if(currentAnswer==userInput){
      scoreGame1+=1;
      }
    }
}}
else if(selectedGame=="division"){
  if(level=="easy"){
    //checks if the question number doesn't exceed the total number in data
  if(questionNoGame1<divisionQuestionBank.easy.length+1){
    //for Correct answer
    if(currentAnswer==userInput){
      scoreGame1+=1;
    }

  }
  }else if(level=="medium"){
    if(questionNoGame1<divisionQuestionBank.medium.length+1){
      //for Correct answer
      if(currentAnswer==userInput){
        scoreGame1+=1;
      }

    }
  }else if(level=="hard"){
    if(questionNoGame1<divisionQuestionBank.hard.length+1){
      //for Correct answer
      if(currentAnswer==userInput){
      scoreGame1+=1;
      }
    }
}
}
}
//Generates Options for the current question from the data
function generateOptions(level, selectedGame){
  if(selectedGame=="addition"){
    if(level=="easy" && questionNoGame1<additionQuestionBank.easy.length+1){
      var optionValues=additionQuestionBank.easy[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
    else if(level=="medium" && questionNoGame1<additionQuestionBank.medium.length+1){
      var optionValues=additionQuestionBank.medium[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
    else if(level=="hard" && questionNoGame1<additionQuestionBank.hard.length+1){
      var optionValues=additionQuestionBank.hard[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
  }
  else if(selectedGame=="subtraction"){
    if(level=="easy" && questionNoGame1<subtractionQuestionBank.easy.length+1){
      var optionValues=subtractionQuestionBank.easy[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
    else if(level=="medium" && questionNoGame1<subtractionQuestionBank.medium.length+1){
      var optionValues=subtractionQuestionBank.medium[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
    else if(level=="hard" && questionNoGame1<subtractionQuestionBank.hard.length+1){
      var optionValues=subtractionQuestionBank.hard[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
  }
  else if(selectedGame=="multiplication"){
    if(level=="easy" && questionNoGame1<multiplicationQuestionBank.easy.length+1){
      var optionValues=multiplicationQuestionBank.easy[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
    else if(level=="medium" && questionNoGame1<multiplicationQuestionBank.medium.length+1){
      var optionValues=multiplicationQuestionBank.medium[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
    else if(level=="hard" && questionNoGame1<multiplicationQuestionBank.hard.length+1){
      var optionValues=multiplicationQuestionBank.hard[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
  }
  }
  else if(selectedGame=="division"){
    if(level=="easy" && questionNoGame1<divisionQuestionBank.easy.length+1){
      var optionValues=divisionQuestionBank.easy[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
    else if(level=="medium" && questionNoGame1<divisionQuestionBank.medium.length+1){
      var optionValues=divisionQuestionBank.medium[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
    }
    else if(level=="hard" && questionNoGame1<divisionQuestionBank.hard.length+1){
      var optionValues=divisionQuestionBank.hard[questionNoGame1].options;
      option1.innerText=optionValues[0];
      option2.innerText=optionValues[1];
      option3.innerText=optionValues[2];
      option4.innerText=optionValues[3];
  }
  }
}
