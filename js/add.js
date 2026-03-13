// Function to add new human data (initially used php, but php is hard)
function add_user(){
    // Get form data from the input fields
    let inputs = document.getElementsByTagName("input")

    // Add form data to an object
    let person = {
        "FN": inputs[0].value,
        "LN": inputs[1].value,
        "BD": inputs[2].value,
        "HC": inputs[3].value,
        "EC": inputs[4].value,
        "HT": inputs[5].value,
        "SC": inputs[6].value,
        "NS": inputs[7].value,
        "PR": inputs[8].value,
        "NG": inputs[9].value,
        "HA": inputs[10].value,
        "BF": inputs[11].value,
        "IN": [inputs[12].value, inputs[13].value, inputs[14].value],
        "GL": inputs[15].value,
        "SX": inputs[16].value,
        "AT": inputs[17].value,
        "SP": inputs[18].value,
        "WS": inputs[19].value,
        "HR": inputs[20].value,
        "EA": inputs[21].value,
        "Match": [0]
    }

    // Add the new human to local storage
    localStorage.setItem("user-additions", localStorage.getItem("user-additions") + "," + (JSON.stringify(person)))
}