let qNum = 0
let answers = []
let select = false
let gm
let questions
let thinking = false
let sleep = 0
let failed = false
let qVal = [10, 5, 4, 8.5, 5, 7, 4, 4, 4, 6, 3, 4, 4, 7, 0, 0, 0, 30, 4, 4, 4, 3]

var question
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
}, false);

// Set necessary variables and start gameplay loop
function setup() {
  question = document.getElementById("jsquest");
  gm = people[Math.round(Math.random(people.length-1))];
  questions = [["Is your human of the " + gm.SX + " sex?", 14]]
  requestAnimationFrame(update)
}

// Gameplay loop
function update() {

  // Unique questions depending on wether initial guess was correct
  if (failed == true) {
    questions = [
      ["Is your human of the " + gm.SX + " sex?", 14], //0
      ["Does your human always wear Glasses?", 13], //1
      ["Does your human have " + gm.HC + " hair?", 3], //2
      ["Does your human have " + gm.SC + "  skin?", 6], //3
      ["Is your human around " + gm.HT + " feet tall?", 5], //4
      ["Does your human have " + gm.EC + " eyes?", 4], //5
      ["Is your human interested in " + gm.IN[0] + "?", 0], //6
      ["Is your human interested in " + gm.IN[1] + "?", 1], //7
      ["Is your human interested in " + gm.IN[2] + "?", 2], //8
      ["Is your human best pals with " + gm.BF + "?", 11], //9
      ["Was your human born in " + gm.BD + "?", 2], //10
      ["Does your human prefer " + gm.AT + "?", 15], //11
      ["Does your human have " + gm.HR + " hair?", 18], //12
      ["Does your human have " + gm.EA + " ears?", 19], //13
      ["herm...", 568], //14
      ["Let's see...", 568], //15
      ["Does " + gm.FN + " live at " + gm.HA + "?", 568], //16
      ["Does your human's name start with " + gm.FN[0] + "?", 0], //17
      ["hUmaN. SiBlinGs... amoUnt: " + gm.NS + ". coRrect?", 7],  //18
      ["granDparEnts: " + gm.NG + "?", 9], //19
      ["PareNt relatiOnshIp: " + gm.PR + "?", 8], //20
      ["plAys spoRT oFteN?", 16], //21
      ["usuALly weArs sHorTs?", 17], //21
      ["huMaN: " + gm.FN + " " + gm.LN] //22
    ]
  }else{
    questions = [
      ["Is your human of the " + gm.SX + " sex?", 14], //0
      ["Does your human always wear Glasses?", 13], //1
      ["Does your human have " + gm.HC + " hair?", 3], //2
      ["Does your human have " + gm.SC + "  skin?", 6], //3
      ["Is your human around " + gm.HT + " feet tall?", 5], //4
      ["Does your human have " + gm.EC + " eyes?", 4], //5
      ["Is your human interested in " + gm.IN[0] + "?", 0], //6
      ["Is your human interested in " + gm.IN[1] + "?", 1], //7
      ["Is your human interested in " + gm.IN[2] + "?", 2], //8
      ["Is your human best pals with " + gm.BF + "?", 11], //9
      ["Was your human born in " + gm.BD + "?", 2], //10
      ["Does your human prefer " + gm.AT + "?", 15], //11
      ["Does your human have " + gm.HR + " hair?", 18], //12
      ["Does your human have " + gm.EA + " ears?", 19], //13
      ["herm...", 568], //14
      ["Let's see...", 568], //15
      ["Does " + gm.FN + " live at " + gm.HA + "?", 568], //16
      ["Does your human's name start with " + gm.FN[0] + "?", 0], //17
      ["Does your human have " + gm.NS + " siblings?", 7], //18
      ["Does your pal have  " + gm.NG + " grandparents?", 9], //19
      ["Their Parent Relationship Status: " + gm.PR + "?", 8], //20
      ["Does your pal like to play sports?", 16], //21
      ["Does your pal usually wear shorts?", 17], //21
      ["Is your pal " + gm.FN + " " + gm.LN + "?"] //22
    ]
  }

  // Find greatest match
  for (var i = 0; i < people.length; i++) {
    if (people[i].Match[people[i].Match.length-1] > gm.Match[gm.Match.length-1]){
      gm = people[i]
      for(var j = 0; j < people.length; j++){
        if(people[j].Match[people[j].Match.length-1] == gm.Match[gm.Match.length-1]){  
          if(Math.round(Math.random(2)) == 2){
            gm = people[j]
          } 
        }
      }
      
    }
    
  }

  // Special cases
  if (qNum == 14) {
    
    sleep += 1
    if (sleep > 80) {
      document.getElementById("bandit").style.backgroundImage = "url('images/nerdy_bandit.png')"
      qNum += 1
      
      play("audio/calc.wav")
      
    }

  }
  if (qNum == 15 && failed == false) {
    
    sleep -= 1
    if (sleep < 1) {
      
      qNum += 1
    }
  }
  if (qNum == 16 && failed == false) {
    question.style.rotate = "1.7deg"
    if(sleep < 1){
      play("audio/wheredoyoulive.wav")
    }
    sleep += 1
    if (sleep > 60) {
      qNum += 1
      sleep = 0
      question.style.rotate = "0deg"
      play("audio/q" + (Math.round(Math.random(5)) + 1) + ".wav")
      document.getElementById("bandit").style.backgroundImage = "url('images/bandit.png')"
    }
  }


  if (select == true) {
    if(questions[qNum][1] != 568){
      if(qNum< 6 || qNum >8){
        bfAlg()
      }else{
        interests()
      }
    }
    select = false
  }


  if (qNum != 1111 && qNum != 18 && qNum != 24) {
    question.innerHTML = questions[qNum][0];
  } else if (qNum == 1111) {
    sleep += 1
    question.innerHTML = "You've come too far to turn back now...";
    if (sleep == 1) {
      play("audio/wheredoyoulive.wav")
    }

    if (sleep > 100) {
      qNum = 17
      play("audio/q" + (Math.round(Math.random(2)) + 1) + ".wav")
      sleep = 0
    }
  }

  // Loop
  requestAnimationFrame(update)
}

// Previous question
function back() {
  if(qNum != 1111){
    for (var i = 0; i < people.length; i++) {
      if(people[i].Match.length > 1){
        people[i].Match.splice(qNum, 1)
        gm.Match.splice(qNum, 1)
      }
    }
    if (qNum > 0 ) {
      questions.splice(qNum, 1)
      qNum -= 1;
      play("audio/q" + Math.round(Math.random(5) + 1) + ".wav")
    }else{
      play("audio/wrong.mp3")
    }
  }
  
}

// Wrong Initial guess
function fail() {
  play("audio/wrong.mp3")
  document.getElementById("bandit").style.backgroundSize = "80% 100%"
  document.getElementById("bandit").style.backgroundImage = "url('images/query_bandit.png')"
  
  question.innerHTML = "..."
  failed = true
  setTimeout(function() {
    
    question.innerHTML = questions[qNum][0]; 
    play("audio/wheredoyoulive.wav")
    document.getElementById("bandit").style.backgroundSize = "auto 100%"
    document.getElementById("bandit").style.backgroundImage = "url('images/failed_bandit.webp')"
  }, 2000);

}

// Possibly correct initial guess
function success() {
  question.innerHTML = "..."
  document.getElementById("bandit").style.backgroundImage = "url('images/nerdy_bandit.png')"
  play("audio/calc.wav")
  setTimeout(function() {
    question.innerHTML = questions[qNum][0]; 
    play("audio/q1.wav")
    document.getElementById("bandit").style.backgroundImage = "url('images/bandit.png')"
  }, 2000);
 
}

// Bandit won
function won() {
  window.location.replace("won.html")
}

// bandit lost
function lost() {
  window.location.replace("lost.html")
}