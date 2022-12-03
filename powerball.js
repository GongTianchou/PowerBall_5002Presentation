var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("#clear")
var count = 0;
var btn = document.getElementById("generate");
var disp = document.getElementById("display");

function writepowerball(){
    var password = getRandomInt();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function getRandomInt(min, whiteMax, redMax) {
    password = "White Ball Numbers: ";
    var whiteBallLength = 5
    var min = 1
    var whiteMax = 69
    var redMax = 26
    for (var i = 0; i < whiteBallLength; i++) {
        wMin = Math.ceil(min);
        wMax = Math.floor(whiteMax);
        password += Math.floor(Math.random() * (wMax - wMin + 1) + wMin);
        if (i != whiteBallLength - 1) {
            password += ", ";
        } else {
            password += "\n";
        }
    }
    rMin = Math.ceil(min);
    rMax = Math.floor(redMax);
    password += "Power Ball Number: ";
    password += Math.floor(Math.random() * (rMax - rMin + 1) + rMin);
        
    return password
}

      
btn.onclick = function () {
    count++;
    disp.innerHTML = count;
}
    
function cleartimes(){
    disp.innerHTML = "0";
}

generateBtn.addEventListener("click", writepowerball);
clearBtn.addEventListener("click",cleartimes)
