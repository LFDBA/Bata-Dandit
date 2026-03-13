// initialization (first 2 questions)
function init() {
  if (qNum < 1) {
    document.getElementById("back").style.display = "none"
  } else {
    document.getElementById("back").style.display = "block"
  }

  if (qNum == 1) {
    for (var i = 0; i < people.length; i++) {
      if (people[i].SX.toLowerCase() == "male" && answers[0] == 0) {
        people[i].Match[qNum] = 10
      }

      else if (people[i].SX.toLowerCase() == "female" && answers[0] == 1) {
        people[i].Match[qNum] = 10
      }
      else if (answers[0] == 2) {
        people[i].Match[qNum] = 0
      }
      else if (people[i].SX.toLowerCase() == "male" && answers[0] == 3) {
        people[i].Match[qNum] = 3.5
      }
      else if (people[i].SX.toLowerCase() == "female" && answers[0] == 4) {
        people[i].Match[qNum] = 3.5
      }
      else {
        people[i].Match[qNum] = -10
      }
    }
  }
  if (qNum == 2) {
    for (var i = 0; i < people.length; i++) {
      if (people[i].GL.toLowerCase() == "yes" && answers[1] == 0) {
        people[i].Match[qNum] = people[i].Match[qNum - 1] + 2.5
      }
      else if (people[i].GL.toLowerCase() == "no" && answers[1] == 1) {
        people[i].Match[qNum] = people[i].Match[qNum - 1] + 2.5
      }
      else if (answers[1] == 2) {
        people[i].Match[qNum] = people[i].Match[qNum - 1]
      }
      else if (people[i].GL.toLowerCase() == "yes" && answers[1] == 3) {
        people[i].Match[qNum] = people[i].Match[qNum - 1] + 1.3
      }
      else if (people[i].GL.toLowerCase() == "no" && answers[1] == 4) {
        people[i].Match[qNum] = people[i].Match[qNum - 1] + 1.3
      }
      else {
        people[i].Match[qNum] = people[i].Match[qNum - 1] - 2.5
      }
    }
  }
}