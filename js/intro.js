//Question Number
let qNum = 0
//Branch of the Question Tree
let qBranch = 0
//Vignette on?
let vig = false
//Skip Tutorial?
let skip = false
//List of which keyboard keys are down
let keysDown = []

//List of questions (inside of question branches)
let questions = [
  
  ["Erm... stop looking at my code pls", "Alrighty! Let's get started shall we?", "Much of the content on this site is USER SUBMITTED, and may be considered offensive. Are you sure that you wanna continue?", "Alrighty! First thing ya gotta know: In this game I'll try to guess one of your pal's from around the class! (best played with your pal)", "To do this, I'm gonna be asking you a few questions like the eye colour and hair colour of your pal. And you don't want to lie to me partner.", "After I get the data I need, I'm gonna make an educated guess as to who your friend is.", "If I get it wrong... I lose. If I get it right \nYOU LOSE :)", "Welp, that's the rules partner. If you need a refresher, you can always come back to me from the home page."],
  ["", "You think you can lie to me?", "You can't. Don't try it again pal."],
  ["", "Thought so. Wanna skip the intro pal?", "You sure?"],
  ["", "You sure? You don't look familiar...", "Are you sure? You don't want to be lying to me..."],
  ["", "", "Bruh... We're getting started."]

]

//Game update loop
function update(){

  //Restyling based on window sizes (should've been done in css, but was more convenient in js)
  if(window.innerHeight <= window.innerWidth) {
    if((100 * document.getElementById("yes_box").offsetWidth) / window.innerHeight > 20.4){
      document.getElementById("yes_box").style = "transition: width 0.4s, left 0.4s, right 0.4s, top 0.4s;"
      
    }else{
      document.getElementById("yes_box").style = ""
    }
    if((100 * document.getElementById("no_box").offsetWidth) / window.innerHeight > 20.4){
      document.getElementById("no_box").style = "transition: width 0.4s, left 0.4s, right 0.4s, top 0.4s;"
      
    }else{
      document.getElementById("no_box").style = ""
    }
  }else{
    if((100 * document.getElementById("yes_box").offsetWidth) / window.innerWidth > 20.4){
      document.getElementById("yes_box").style = "transition: width 0.4s, left 0.4s, right 0.4s, top 0.4s;"
      
    }else{
      document.getElementById("yes_box").style = ""
    }
    if((100 * document.getElementById("no_box").offsetWidth) / window.innerWidth > 20.4){
      document.getElementById("no_box").style = "transition: width 0.4s, left 0.4s, right 0.4s, top 0.4s;"
      
    }else{
      document.getElementById("no_box").style = ""
    }
  }
  
  //Remove the NO sign during these questions
  if(qBranch == 1 && qNum == 2 || qBranch == 4){
    document.getElementById("no_box").style = "transition: width 0.3s; width: 0px;"
    document.getElementById("bandit").style = "background-image: url('images/query_bandit.png'); background-size: 50%"
  }

  //Record keystrokes
  window.onkeydown = function(e) { 
    if(!keysDown.includes(e.keyCode)){
      keysDown.push(e.keyCode)
    }
  }
  window.onkeyup = function(e) { 
    if(keysDown.includes(e.keyCode)){
      keysDown.splice(keysDown.indexOf(e.keyCode), 1)
    }
  }

  //Clear local storage if ctrl + shift + R is pressed. Used for development, but also a useful feature for story restarts.
  if(keysDown.includes(16) && keysDown.includes(17) && keysDown.includes(82)){
    localStorage.setItem("first-time", "yes")
  }

  //Replay update loop
  requestAnimationFrame(update)
}

function yes(){
  qNum += 1
  next(0); 
  play('audio/h.wav')
}

function no(){
  if(qBranch == 0 && qNum > 2){
    qNum -= 1
    next(0); 
  }else{
    qNum += 1; 
    next(1) 
  }
  play('audio/h.wav')
}

//Next question function
function next(answer){

  if(qBranch == 0 && qNum > 2){
    document.getElementById("yes").src = "images/next.webp"
    document.getElementById("no").src = "images/back_sign.png"
    document.getElementById("yes").alt = "next"
    document.getElementById("no").alt = "back"
  }else{
    document.getElementById("yes").src = "images/yes.webp"
    document.getElementById("no").src = "images/no.webp"
  }


  //Turn vignette off by default everytime a new question is displayed. (so that I don't have to manually disable the vignette)
  if(vig == true){
    vig = false
    oV()
  }

  //If the answer to a question is Yes
  if(answer == 0){
    console.log("yes")

    //Special questions based on wether player is playing for first time or not
    if(qNum == 1){
      //If player is not new, change question branch
      if(localStorage.getItem("first-time") == "no"){
        qBranch = 1

        //console easter egg
        console.log("Liar")

        //sprite change
        document.getElementById("bandit").style.backgroundImage = "url('images/tweaky_bandit.png')"

        //vignette animation
        vignette()
        vig = true
      }
    }

    //Skip tutorial if user says to
    if(qNum == 2 && qBranch == 2){
      skip = true
    }
    if(qNum == 3 && qBranch == 2){
      if(skip == true){
        //Go to game
        window.location.replace("game.html")
        localStorage.setItem("first-time", "no")
      }else{
        //Go to tutorial
        qBranch = 0
        qNum = 1
        document.getElementById("bandit").style = "url('images/intro_bandit.png'); background-size: 100%;"
      }
      
    }

    //If user want's to be silly
    if(qBranch == 4){
      qNum = 2
      qBranch = 0
      document.getElementById("bandit").style = "url('images/intro_bandit.png'); background-size: 100%;"
    }


    //End branch 1 (tutorial branch)
    if(qNum == 8){
      //Go to game
      window.location.replace("game.html")
      localStorage.setItem("first-time", "no")
    }
    
  }

  //If user answers NO
  if(answer == 1){
    console.log("no")
    //First Time question
    if(qNum == 1){
      if(localStorage.getItem("first-time") == "no"){
        //Tutorial skip question
        qBranch = 2
      }else{
        //user lied
        qBranch = 3
        vignette()
        vig = true
      }
    }

    //Question & Branch Routing
    if(qNum == 2 && qBranch == 0){
      qBranch = 4
    }
    if(qNum == 2 && qBranch == 2){
      skip = false
    }

    if(qNum == 3 && qBranch == 2){
      qNum = 1
      document.getElementById("bandit").style = "url('images/intro_bandit.png'); background-size: 100%;"
    }

    if(qNum == 3 && qBranch == 0){
      //go to home page
      window.location.replace("index.html")
    }

  }
  

  //End of all non-tutorial branches
  if(qNum == 3 && qBranch > 0){
    //enter tutorial
    qNum = 1
      document.getElementById("bandit").style = "url('images/intro_bandit.png'); background-size: 100%;"
    qBranch = 0
  }

  
  
  //Question box resizing (could've done: if(questionBox.size > blah blah){fontSize--;}  But I prefer the janky look. I know it's bad practice)
  if(window.innerHeight <= window.innerWidth){
    document.getElementById("query").style.fontSize = 9.8-((questions[qBranch][qNum].length-27)/19) + "vh"
  }
  else{
    document.getElementById("query").style.fontSize = 10-((questions[qBranch][qNum].length-27)/19) + "vw"
  }
  document.getElementById("query").textContent = questions[qBranch][qNum]
}

//Start the game update loop
requestAnimationFrame(update)