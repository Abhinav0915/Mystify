function mystery(){
    var user_input = parseInt(document.getElementById("number").value);
    if(user_input === 1){
        document.getElementById("mystery").innerHTML = "The Number " + user_input +" symbolizes unity and the origin of all things!";
    }
    else if(user_input === 2){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " is the number of Eve, the first woman."
    }
    else if(user_input === 3){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " was considered as the perfect number, the number of harmony, wisdom and understanding."
    }
    else if(user_input === 4){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " is an outstanding symbol of wholeness and universality."
    }
    else if(user_input === 5){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " represents freedom, curiosity, and change – a desire to have adventures and explore new possibilities."
    }
    else if(user_input === 6){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " in Bible says that throughout the period of his separation to the LORD he must not go near a dead body."
    }
    else if(user_input === 7){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " believes in seeing beyond the face and understanding the hidden truth."
    }
    else if(user_input === 8){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " represents victory, prosperity and overcoming."
    }
    else if(user_input === 9){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " wisdom and experience."
    }
    else if(user_input === 10){
        document.getElementById("mystery").innerHTML = "The Number "+ user_input + " symbolizes the completion of a cycle."
    }
    else{
        document.getElementById("mystery").style.display = block;
    }
}

//make a clear function
function clearFields() {
    document.getElementById("number").value = "";
    document.getElementById("mystery").innerHTML = "";
}