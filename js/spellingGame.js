/*Elements needed for the game
  These all variables are accessible throughout the JS file*/
var numberInLevel1;
var question;
var level="";
var score=0;
var tank1;
var tank2;
var tank3;
var rightButton;
var wrongButton;
var questionNo=0;
var scoreLine;
var itemQuestion;
var option;
// Provides the selected level
function getLevel(){
  return level;
}
// Spelling game has three levels: easy medium and hard.
//It shows the menu page of levels for the spell game to be selected.
function showSpellGameLevels(){
  if(popUpDiv!=undefined){
    popUpDiv.classList.remove("hide");
  }
  //Checks currentPage value
  // if not equal to null then hide the page, this helps to toggle the pages between different levels
  if (currentPage != null){
    currentPage.classList.add("hide");
  }
  // check if we haven’t yet created this page
  if (typeof window.SpellGamePage === "undefined") {
    window.SpellGamePage = createDiv("center");
    SpellGamePage.classList.add("page");

    var easy=createButton("Easy","gameType");
    // Event handler added on click of the button
    easy.addEventListener('click', function(){
      level="easy";
      showSpellGame(level);
    });
    var medium=createButton("Medium","gameType");
    // Event handler added on click of the button
    medium.addEventListener('click', function(){
      level="medium";
      showSpellGame(level);
    });
    var hard=createButton("Hard","gameType");
    // Event handler added on click of the button
    hard.addEventListener('click', function(){
      level="hard";
      showSpellGame(level);
    });

    var homeBtn=createButton("Home","play");
    // Event handler added on click of the button
    // Takes you to the home screen
    homeBtn.addEventListener('click', function(){
      loadApp();
    });
    //creates a back button
    var backBtn=createButton("Back","instructions");
    // Takes you to the game types screen
    backBtn.onclick=showGameTypes;
    // home and back button are grouped together in a div
    var buttonDiv= createDiv("buttonDiv");
    buttonDiv.appendChild(homeBtn);
    buttonDiv.appendChild(backBtn);

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
    var instructions=createParagraph("Spelling of the Numbers.");
    var intrs=createParagraph("This is  divided into three levels: Easy, Medium, and Hard.");
    var intrs2=createParagraph("In each level you will get a set of questions. You will check whether the statement of the question is true or false. Try to solve and score maximum. This way you can practice and learn about the Spelling of the numbers. ")
    popUpInnerDiv.appendChild(closeSpan);
    popUpInnerDiv.appendChild(headingInstr);
    popUpInnerDiv.appendChild(instructions);
    popUpInnerDiv.appendChild(intrs);
    popUpInnerDiv.appendChild(intrs2);
    popUpDiv.appendChild(popUpInnerDiv);

    //Adds elements to the div
    SpellGamePage.appendChild(easy);
    SpellGamePage.appendChild(medium);
    SpellGamePage.appendChild(hard);
    // SpellGamePage.appendChild(homeBtn);
    SpellGamePage.appendChild(buttonDiv);
    SpellGamePage.appendChild(popUpDiv);
    //Adds div to the body
    document.body.appendChild(SpellGamePage);
  }
  // sets the new currentPage to this game
  currentPage = SpellGamePage;
  // shows the page (now it is definitely created)
  currentPage.classList.remove("hide");
}
/*This function creates the Spelling the number game.
It consists of a question statement and given two options for true and false.
User will recognize and check whether the statement is true or false*/
// this can be called showSpellGame(level) or showSpellGame() i.e. with or without parameters .
// here it is necessary to call it with parameter for further requirements.
function showSpellGame(level){

  if(tank1!=undefined && tank2!=undefined && tank3!=undefined && rightButton!=undefined && wrongButton!=undefined){
    rightButton.classList.remove("hide");
    wrongButton.classList.remove("hide");

    tank1.classList.remove("tank");
    tank1.classList.add("intialTank");
    tank1.classList.add("hide");


    tank2.classList.remove("tank");
    tank2.classList.add("intialTank");
    tank2.classList.add("hide");


    tank3.classList.remove("tank");
    tank3.classList.add("intialTank");
    tank3.classList.add("hide");


    scoreLine.textContent="";
  }
  //Checks currentPage value
  // if not equal to null then hide the page, this helps to toggle the pages between different levels

  if (currentPage != null){
    currentPage.classList.add("hide");
  }
  //Checks if the page is already defined or not
  // This halts multiple creation of the same page
  if (typeof window.spellGame === "undefined") {
    window.spellGame=createDiv("center");
    spellGame=createDiv();
    spellGame.classList.add("page");
    spellGame.classList.add("gamePage");
    question=createParagraph("","spellGameQuestion");
    tank1= createImage("images/tank.png");
    tank1.classList.add("intialTank");
    tank2= createImage("images/tank.png");
    tank2.classList.add("intialTank");
    tank3= createImage("images/tank.png");
    tank3.classList.add("intialTank");
    tank1.classList.add("hide");
    tank2.classList.add("hide");
    tank3.classList.add("hide");
    rightButton=createButton("");
    var tick=createImage("images/tick.png");
    tick.classList.add("game2ButtonImages");
    rightButton.appendChild(tick);
    rightButton.classList.add("game2Button");
    rightButton.addEventListener('click', function(){
    var lvl=getLevel();
    checkSpelling("yes",lvl);
    generateSpellingQuestion(lvl);
    });
    wrongButton=createButton("");
    var tick=createImage("images/cross.png");
    tick.classList.add("game2ButtonImages");
    wrongButton.appendChild(tick);
    wrongButton.classList.add("game2Button");
    wrongButton.addEventListener('click', function(){
    var lvl=getLevel();
    checkSpelling("no",lvl);
    generateSpellingQuestion(lvl);
    });
    var optionButtonDiv=createDiv("optionButtonDiv");
    optionButtonDiv.appendChild(rightButton);
    optionButtonDiv.appendChild(wrongButton);
    scoreLine= createParagraph("","scoreStatement");
    var homeBtn=createButton("Home","play");
    // Takes you to the home screen
    homeBtn.addEventListener('click', function(){
      score=0;
      questionNo=0;
      loadApp();
    });
    //creates a back button
    var backBtn=createButton("Back","instructions");
    // Takes you to the game types screen
    backBtn.addEventListener('click', function(){
      score=0;
      showSpellGameLevels();
      questionNo=0;

    });
    var breakLine= createBreakLine();
    var breakLine2= createBreakLine();

    var buttonDiv= createDiv("buttonDiv");
    buttonDiv.appendChild(homeBtn);
    buttonDiv.appendChild(backBtn);
    //Adds elements to div
    spellGame.appendChild(question);
    spellGame.appendChild(optionButtonDiv);

    spellGame.appendChild(tank1);
    spellGame.appendChild(tank2);
    spellGame.appendChild(tank3);

    spellGame.appendChild(breakLine2);
    spellGame.appendChild(scoreLine);
    spellGame.appendChild(breakLine);

    spellGame.appendChild(buttonDiv);

    //Adds div to the body
    document.body.appendChild(spellGame);
    }
  generateSpellingQuestion(level);
  // sets the new currentPage to this game
  currentPage = spellGame;
  // shows the page
  currentPage.classList.remove("hide");
}
/*This generates spelling questions for each level*/
// This can be called with or without parameter like generateSpellingQuestion(level) or generateSpellingQuestion().
// But here it is necessary to have parameters because the level selected should be known before generating question
function generateSpellingQuestion(level){
  if(level=="easy"){
    if(questionNo<spellQuestionBank.easy.question.length){
      var itemQuestion= spellQuestionBank.easy.question[questionNo];
      var option= spellQuestionBank.easy.option[questionNo];
      question.textContent=itemQuestion+" = "+option ;
    }
    else{
      //Score page Elements are displayed when the level is complete and game page elements are made hidden
      question.textContent="Level Complete";
      tank1.classList.remove("hide");
      tank2.classList.remove("hide");
      tank3.classList.remove("hide");
      if(score>0 && score<=3){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
      }
      else if(score>3 && score<=9){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
        tank2.classList.remove("intialTank");
        tank2.classList.add("tank");
      } else if(score>9){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
        tank2.classList.remove("intialTank");
        tank2.classList.add("tank");
        tank3.classList.remove("intialTank");
        tank3.classList.add("tank");
      }
      rightButton.classList.add("hide");
      wrongButton.classList.add("hide");
      scoreLine.textContent="Score:"+score;


    }
    //increments the question number
    questionNo++;

  }else if(level=="medium"){
    if(questionNo<spellQuestionBank.medium.question.length){

      var itemQuestion= spellQuestionBank.medium.question[questionNo];
      var option= spellQuestionBank.medium.option[questionNo];
      question.textContent=itemQuestion+" = "+option ;

    }
    else{
      //Score page Elements are displayed when the level is complete and game page elements are made hidden
      question.textContent="Level Complete";
      tank1.classList.remove("hide");
      tank2.classList.remove("hide");
      tank3.classList.remove("hide");
      if(score>0 && score<=3){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
      }
      else if(score>3 && score<=9){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
        tank2.classList.remove("intialTank");
        tank2.classList.add("tank");
      } else if(score>9){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
        tank2.classList.remove("intialTank");
        tank2.classList.add("tank");
        tank3.classList.remove("intialTank");
        tank3.classList.add("tank");
      }
      rightButton.classList.add("hide");
      wrongButton.classList.add("hide");
      scoreLine.textContent="Score:"+score;

    }
    //increments the question number
    questionNo++;

  }else if(level=="hard"){
    if(questionNo<spellQuestionBank.hard.question.length){
      itemQuestion= spellQuestionBank.hard.question[questionNo];
      var option= spellQuestionBank.hard.option[questionNo];
      question.textContent=+itemQuestion+" = "+option ;

    }
    else{
      //Score page Elements are displayed when the level is complete and game page elements are made hidden

      question.textContent="Level Complete";
      tank1.classList.remove("hide");
      tank2.classList.remove("hide");
      tank3.classList.remove("hide");
      if(score>0 && score<=3){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
      }
      else if(score>3 && score<=9){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
        tank2.classList.remove("intialTank");
        tank2.classList.add("tank");
      } else if(score>9){
        tank1.classList.remove("intialTank");
        tank1.classList.add("tank");
        tank2.classList.remove("intialTank");
        tank2.classList.add("tank");
        tank3.classList.remove("intialTank");
        tank3.classList.add("tank");
      }
      rightButton.classList.add("hide");
      wrongButton.classList.add("hide");
      scoreLine.textContent="Score:"+score;


    }
    //increments the question number
    questionNo++;

  }
}
// Checks whether the user has selected the correct answer for the current level.
/*This function has two parameters userAnswer and level.
 userAnswer is the input of the user selected for the question.
 level is the current level of the game*/
function checkSpelling(userAnswer,level){

  if(level=="easy"){
    var realAnswer = spellQuestionBank.easy.answer[questionNo-1];
    if(realAnswer==userAnswer){
    score+=1;
    }
  }else if(level=="medium"){
    var realAnswer = spellQuestionBank.medium.answer[questionNo-1];
    if(realAnswer==userAnswer){
    score+=1;}
  }else if(level=="hard"){
    var realAnswer = spellQuestionBank.hard.answer[questionNo-1];
    if(realAnswer==userAnswer){
    score+=1;
  }

}

}
