let getName
let peoples
let person = 29
let possibles = []
let current_data = ['LN', "Last Name", true]

// Go to next human
function next(){
    // If there is no next human, loop back
    if(person > 0){
        person -= 1
    }else{
        person = people.length-1
    }
    
    // Name slide in/out animation
    getName.style = "animation: slide-right 0.5s"
    
    setTimeout(function(){
        getName.value = people[person].FN
        getName.style = "animation: slide-left 0.5s reverse"
    }, 370);
    setTimeout(()=>{
        getName.style = "animation: none"
        search()
    }, 900)


    // Play woosh
    play("audio/intro_opt_5.wav")
}

// Go to previous human
function back(){
    // If there is no previous human, loop back
    if(person < people.length-1){
        person += 1
    }else{
        person = 0
    }
    

    // Name slide in/out animation
    getName.style = "animation: slide-left 0.5s"
    
    setTimeout(()=>{
        getName.value = people[person].FN
        getName.style = "animation: slide-right 0.5s reverse"
    }, 370);
    setTimeout(()=>{
        getName.style = "animation: none"
        search()
    }, 900)


    // Play woosh
    play("audio/intro_opt_5.wav")
}


// Search for human
function search(){
    // If user entered a name
    if(getName.value != ""){
        possibles = []
        // Get possible matches
        for(var i = 0; i < people.length; i++){
            if(people[i].FN.toLowerCase().includes(getName.value.toLowerCase()) || people[i].LN.toLowerCase().includes(getName.value.toLowerCase()) || getName.value.toLowerCase().includes(people[i].FN.toLowerCase()) || getName.value.toLowerCase().includes(people[i].LN.toLowerCase())){
                possibles.push(people[i])
            }
            if(getName.value == people[i].FN + people[i].LN){
                possibles = people[i]
            }
        }

        let temp = []
        for(var i = 0; i < possibles.length; i++){
            temp.push(possibles[i].FN)
            peoples.innerHTML = temp
        }
        
        
        if(possibles.length > 1){
            // If there is more than 1 possible match
            mult_result()
        }else if(possibles.length == 1){
            // If there is only 1 match
            person = people.indexOf(possibles[0])
            show(current_data[0], current_data[1], current_data[2])
        }else if(possibles.length < 1){
            // If there are no results
            no_result()
        }
        
    }else{
        // if user didn't enter a name
        empty()
    }
    
}


// Show human data
function show(data, description, normal){
    // Make everything visible and correct size
    document.getElementById("q_box").style.visibility = "visible"
    document.getElementById("a_box").style.width = "83%"
    // set Answer text to humans data
    document.getElementById("answer").innerText = people[person][data]

    
    if(normal == true){
        // If the answer follows the format of "Your Human's " + description + " is:"
        document.getElementById("info").innerText = "Your Human's " + description + " is:"
    }else{
        // Special cases
        if(data == "IN"){
            document.getElementById("info").innerText = "Your Human's " + description + " are:"
        }
        if(data == "EA"){
            document.getElementById("info").innerText = "Your Human's ears are:"
        }
        if(data == "GL"){
            document.getElementById("info").innerText = "Does your Human wear glasses?"
        }
        if(data == "WS"){
            document.getElementById("info").innerText = "Does your Human mostly wear shorts?"
        }
        if(data == "SP"){
            document.getElementById("info").innerText = "Does your Human play sports?"
        }
    }
    current_data = [data, description, normal]
}

// No results found
function no_result(){
    // Hide question table
    document.getElementById("q_box").style.visibility = "hidden"
    // Hide answer
    document.getElementById("answer").innerText = ""
    // Say No Results Found
    document.getElementById("info").innerText = "No results found"
    // Maximize the answer box size
    document.getElementById("a_box").style.width = "100%"
}

// Multiple answers found
function mult_result(){
    // Hide question table
    document.getElementById("q_box").style.visibility = "hidden"
    // Tell user to check top left for list of detected people
    document.getElementById("answer").innerText = "(Check Top Left)"
    // Tip for finding correct human
    document.getElementById("info").innerText = "Multiple People Detected. Try adding or removing surname"
    // Maximize the answer box size
    document.getElementById("a_box").style.width = "100%"
}

// if input is empty
function empty(){
    peoples.innerHTML = "Erm... Please type something"
    document.getElementById("q_box").style.visibility = "hidden"
    document.getElementById("answer").innerText = ""
    document.getElementById("info").innerText = "Please Type a Name"
    document.getElementById("a_box").style.width = "100%"
}


// Play sound effect on key press
document.onkeydown = function (key) {
    // On regular key characters
    if(key.keyCode > 64 && key.keyCode < 91){
        play("audio/typing.mp3")
    }
    // on backspace
    if(key.keyCode == 8){
        play("audio/backspace.mp3")
    }
};