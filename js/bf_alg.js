// Best Fit algorithm to choose most likely human match
function bfAlg() {

  // If question number is 17 (first letter of human name)
  if (qNum == 17) {
    // If user just answered no
    if (answers[qNum] == 1) {
      
      // Remove anyone who's name starts with that letter from the pool
      for(var i = 0; i < people.length; i++){
        if(people[i].FN[0] == gm.FN[0]){

          people.splice(i, 1)
        }
      }
      // play fail sound
      play("audio/womp.mp3")
      console.log("heck")
      fail()
    }else {
      // Otherwise, big success
      for(var i = 0; i < people.length; i++){
        // Give a +30 bonus to whoevers name starts with that letter
        if(people[i].FN[0] == gm.FN[0]){
          people[i].Match[qNum] = people[i].Match[qNum - 1] + 30
        }
      }
      success()
    }
  }if(qNum == 23){
    // Win/Lose
    if(answers[qNum] == 0){
      console.log("WON")
      won()
    }else{
      console.log("...")
      lost()
    }
  }else{
    // If user answers yes
    if(answers[qNum] == 0){
      // Add question value to score if yes is the correct answer, otherwise remove question value from the score
      for(var i = 0; i < people.length; i++){
        // question 1, 21 and 22 are special yes/no only cases
        if(qNum == 1){
          if(people[i].GL == "yes"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
          }
        }if(qNum == 21){
          if(people[i].SP == "yes"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
          }
        }if(qNum == 22){
          if(people[i].WS == "yes"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
          }
        }else{
          if((Object.values(people[i])[questions[qNum][1]]).toLowerCase() == (Object.values(gm)[questions[qNum][1]]).toLowerCase()){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
          }
        }
      }

      
    }
    // if user answers no
    if(answers[qNum] == 1){
      // Add question value to score if no is the correct answer, otherwise remove question value from the score
      for(var i = 0; i < people.length; i++){
        // question 1, 21 and 22 are special yes/no only cases
        if(qNum == 1){
          if(people[i].GL == "no"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
            
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
          }
        }if(qNum == 21){
          if(people[i].SP == "no"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
          }
        }if(qNum == 22){
          if(people[i].WS == "no"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
          }
        }else{
          if((Object.values(people[i])[questions[qNum][1]]).toLowerCase() == (Object.values(gm)[questions[qNum][1]]).toLowerCase()){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
          }
        }
        
      }
    }

    // if user answers maybe, keep current score
    if(answers[qNum] == 2){
      for(var i = 0; i < people.length; i++){
        people[i].Match.push(people[i].Match[people[i].Match.length-1])
      }
    }

    // if user answers probably
    if(answers[qNum] == 3){
      // Add question value/2 to score if yes is the correct answer, otherwise remove question value/2 from the score
      for(var i = 0; i < people.length; i++){
        // question 1, 21 and 22 are special yes/no only cases
        if(qNum == 1){
          if(people[i].GL == "yes"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
          }
        }if(qNum == 21){
          if(people[i].SP == "yes"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
          }
        }if(qNum == 22){
          if(people[i].WS == "yes"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
          }
        }else{
          if((Object.values(people[i])[questions[qNum][1]]).toLowerCase() == (Object.values(gm)[questions[qNum][1]]).toLowerCase()){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
          }
        }
        
      }
    }

    // if user answers probably not
    if(answers[qNum] == 4){
      // Add question value/2 to score if no is the correct answer, otherwise remove question value/2 from the score
      for(var i = 0; i < people.length; i++){
        // question 1, 21 and 22 are special yes/no only cases
        if(qNum == 1){
          if(people[i].GL == "no"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
          }
        }if(qNum == 21){
          if(people[i].SP == "no"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
          }
        }if(qNum == 22){
          if(people[i].WS == "no"){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
          }
        }else{
          if((Object.values(people[i])[questions[qNum][1]]).toLowerCase() == (Object.values(gm)[questions[qNum][1]]).toLowerCase()){
            people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
          }else{
            people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
          }
        }
        


        
      }
    }
  }

  // Next question
  qNum += 1;
  
}