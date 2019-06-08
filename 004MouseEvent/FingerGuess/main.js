var r;
function rock(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>"
    var cumputerchoice=cumputerChoice();
    judge("rock",cumputerchoice);
}
function scissors(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>"
    var cumputerchoice=cumputerChoice();
    judge("scissors",cumputerchoice);
}
function paper(){
    r = 3*Math.random();
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>"
    var cumputerchoice=cumputerChoice();
    judge("paper",cumputerchoice);
}

function judge(myVal,cumputerVal) {
    if(myVal=="rock"){
        if(cumputerVal=="rock"){
            document.getElementById("result").innerHTML = "Draw";
        }
        else if (cumputerVal=="scissors"){
            document.getElementById("result").innerHTML = "Win";
        }
        else if(cumputerVal=="paper"){
            document.getElementById("result").innerHTML = "Lose";
        }
    }

    else if(myVal=="scissors"){
        if(cumputerVal=="rock"){
            document.getElementById("result").innerHTML = "Lose";
        }
        else if (cumputerVal=="scissors"){
            document.getElementById("result").innerHTML = "Draw";
        }
        else if(cumputerVal=="paper"){
            document.getElementById("result").innerHTML = "Win";
        }
    }

    else{
        if(cumputerVal=="rock"){
            document.getElementById("result").innerHTML = "Win";
        }
        else if (cumputerVal=="scissors"){
            document.getElementById("result").innerHTML = "Lose";
        }
        else if(cumputerVal=="paper"){
            document.getElementById("result").innerHTML = "Draw";
        }
    }
}

function cumputerChoice() {

    if(r<1){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/rock.png\"/>"
        return "rock";
    }
    else if (r<2){
        document.getElementById("computerChoice").innerHTML="<img src=\"images/scissors.png\"/>"
        return "scissors";
    }
    else{
        document.getElementById("computerChoice").innerHTML="<img src=\"images/paper.png\"/>"
        return "paper";
    }
}