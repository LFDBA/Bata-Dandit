// Interests best fit algorithm (same rules as usual, but applied to a list)
function interests(){
  for(var i = 0; i < people.length; i++){
    if(answers[answers.length] == 0){
      if(people[i].IN.includes(gm.IN[questions[qNum][1]])){
        people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum])
      }else{
        people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/4)
      }
    }
    if(answers[answers.length] == 1){
      if(people[i].IN.includes(gm.IN[questions[qNum][1]])){
        people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum])
      }
      else{
        people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/4)
      }
    }
    if(answers[answers.length] == 2){
      people[i].Match.push(people[i].Match[people[i].Match.length-1])
    }
    if(answers[answers.length] == 3){
      if(people[i].IN.includes(gm.IN[questions[qNum][1]])){
        people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/2)
      }
      else{
        people[i].Match.push(people[i].Match[people[i].Match.length-1] + qVal[qNum]/8)
      }
    }
    if(answers[answers.length] == 4){
      if(people[i].IN.includes(gm.IN[questions[qNum][1]])){
        people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/2)
      }
      else{
        people[i].Match.push(people[i].Match[people[i].Match.length-1] - qVal[qNum]/8)
      }
    }

    if(people[i].IN.includes(gm.IN[questions[qNum][1]])){

    }

  }

  qNum += 1

}