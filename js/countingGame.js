/*Elements needed for the game
  These all variables are accessible throughout the JS file*/
var currentImage;
var count=1;
var quesDiv;
var randomNumber;
var likeImage;
var dropDiv;
var next;
var dragDiv;
var statement;
var tryAgain;
var numbers=["images/one.png","images/two.png","images/three.png","images/four.png","images/five.png","images/six.png","images/seven.png","images/eight.png","images/nine.png"];
/* This function shows the count the number drag and drop game.
It consists of two containers for drag and drop.
It has a number pad for numbers 1-9 to be dragged and dropped to the round white container in the center of the page*/
function showMovingGame(){
  if(popUpDiv!=undefined){
    popUpDiv.classList.remove("hide");
  }

  if(quesDiv!=undefined && dragDiv!=undefined && dropDiv!=undefined && next!=undefined && statement!=undefined &&likeImage!=undefined && tryAgain!=undefined){
    statement.textContent="COUNT";
    likeImage.classList.add("hide");
    tryAgain.classList.add("hide");
    quesDiv.classList.remove("hide");
    dropDiv.classList.remove("hide");
    dragDiv.classList.remove("hide");
    next.classList.remove("hide");
  }
  //Checks currentPage value
  // if not equal to null then hide the page, this helps to toggle the pages between different levels
  if (currentPage != null){
    currentPage.classList.add("hide");
  }
  //Checks if the page is already defined or not
  // This halts multiple creation of the same page
  if (typeof window.gameDiv === "undefined") {
    window.gameDiv = createDiv("center");
    gameDiv.classList.add("page");
    gameDiv.classList.add("gamePage");
    dragDiv=createDiv("center");
    dragDiv.classList.add("dragDiv");
    quesDiv=createDiv("center");
    likeImage=createImage("images/like.png");
    likeImage.classList.add("likeImage");
    likeImage.classList.add("hide");
    statement= createParagraph("COUNT","countStmt");
    dropDiv=createDiv("center");
    dropDiv.ondrop=dropImage;
    dropDiv.ondragover=dropOverImage;
    dropDiv.classList.add("dropDiv");
    // This button is hidden by deafult but is shown when a correct answer is given and on click generates new question.
    next= createButton("NEXT","play");
    next.addEventListener('click', function(){
      count+=1;
      dropDiv.innerHTML="";
      dropDiv.classList.remove("dropDivCorrect");
      dropDiv.classList.add("dropDivIntial");
      quesDiv.innerHTML="";
      dragDiv.innerHTML="";
      generateQuestion();
    });
    // This button replays the game on click
    tryAgain=createButton("Play Again","play");
    tryAgain.classList.add("hide");
    tryAgain.addEventListener('click', function(){
      count=0;
      dropDiv.innerHTML="";
      dropDiv.classList.remove("dropDivCorrect");
      dropDiv.classList.add("dropDivIntial");
      quesDiv.innerHTML="";
      dragDiv.innerHTML="";
      showMovingGame();
    });
    var homeBtn=createButton("Home","play");
    // Takes you to the home screen
    homeBtn.addEventListener('click', function(){
      count=0;
      dropDiv.innerHTML="";
      if(dropDiv.classList.value.includes("checkAnswer")){
        dropDiv.classList.remove("checkAnswer");
      }
      dropDiv.classList.remove("dropDivCorrect");
      dropDiv.classList.add("dropDivIntial");
      quesDiv.innerHTML="";
      dragDiv.innerHTML="";
      loadApp();
    });

    var backBtn=createButton("Back","instructions");
    // Takes you to the game types screen
    backBtn.onclick=showGameTypes;
    //Clears out the past game data
    backBtn.addEventListener('click', function(){
      count=0;
      dropDiv.innerHTML="";
      if(dropDiv.classList.value.includes("checkAnswer")){
        dropDiv.classList.remove("checkAnswer");
      }
      dropDiv.classList.remove("dropDivCorrect");
      dropDiv.classList.add("dropDivIntial");
      quesDiv.innerHTML="";
      dragDiv.innerHTML="";
      showGameTypes();
    });
    var buttonDiv= createDiv("buttonDiv");
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
    var instructions=createParagraph("Counting of the Numbers.");
    var intrs=createParagraph("You will count the number of images shown to you and you can answer the question by dragging the choice of number you want from 1 to 9 into the white circle. If your answer is correct you will be able to drop your choice of answer into the white circle otherwise you have to try again. This way you can practice and learn how to count the numbers.");
    popUpInnerDiv.appendChild(closeSpan);
    popUpInnerDiv.appendChild(headingInstr);
    popUpInnerDiv.appendChild(instructions);
    popUpInnerDiv.appendChild(intrs);
    popUpDiv.appendChild(popUpInnerDiv);

    buttonDiv.appendChild(homeBtn);
    buttonDiv.appendChild(backBtn);

    gameDiv.appendChild(statement);
    gameDiv.appendChild(likeImage);
    gameDiv.appendChild(tryAgain);
    gameDiv.appendChild(quesDiv);
    gameDiv.appendChild(dropDiv);
    gameDiv.appendChild(dragDiv);
    gameDiv.appendChild(next);
    gameDiv.appendChild(buttonDiv);
    gameDiv.appendChild(popUpDiv);
    document.body.appendChild(gameDiv);

  }
  // Generates the first question
  generateQuestion();
  currentPage = gameDiv;
  // shows the page
  currentPage.classList.remove("hide");
}
  //This is a event handler which is called when the image starts its move
function startMove(event){
  if(dropDiv.classList.value.includes("checkAnswer")){
    dropDiv.classList.remove("checkAnswer");
  };
  currentImage=event.target;
  }

  //This is a event handler which is called when the image is to be dropped on the container
function dropImage(event){
  event.preventDefault();
}
  //This is a event handler which is called when the image is dropped on the container
function dropOverImage(event){
  event.preventDefault();
  if(currentImage==null){
    return;
  }
  var receiver= event.target;
  // Checks if the Image number dropped is correct or not.
  // And suitable Css styles are added to show incorrect and correct answers.
  if(currentImage.id==randomNumber){
    dropDiv.classList.remove("dropDivIntial");
    dropDiv.classList.remove("dropDiv");
    dropDiv.classList.add("dropDivCorrect");
    next.classList.remove("hide");
    receiver.appendChild(currentImage);
  }
  else{
    dropDiv.classList.add("checkAnswer");

  }
}
/*Random number of questions are generated each time and also has random image selected from the data of images provided*/
function generateQuestion(){
  if(count>10){
    statement.textContent="WELL DONE!";
    likeImage.classList.remove("hide");
    tryAgain.classList.remove("hide");
    quesDiv.classList.add("hide");
    dropDiv.classList.add("hide");
    dragDiv.classList.add("hide");
    next.classList.add("hide");
  }
  // Generates random number to select a different image for each question
  var randomImage=Math.floor((Math.random() * 4) + 1);
  var qImg=countingGameQuestionImages[randomImage-1];
  next.classList.add("hide");
  //Generates random number to create different question
  randomNumber=Math.floor((Math.random() * countingGameQuestionBank.length) + 1);
  // iterations for the question images
  for(var i=0;i<randomNumber;i++){
    var ques= createImage(qImg);
    ques.classList.add("quesImage");
    quesDiv.appendChild(ques);
   }
   // iterations for the number pad
  for (var i=0;i<numbers.length;i++){
    var movingImage= createImage(numbers[i]);
    movingImage.id=i+1;
    movingImage.setAttribute("draggable","true");
    movingImage.classList.add("numberImage");
    movingImage.ondragstart=startMove;
    dragDiv.appendChild(movingImage);
    }

  }
