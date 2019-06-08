var r,score=8;
function rock(){
    document.getElementById("myChoice").innerHTML="<img src=\"images/rock.png\"/>"
    judge("rock");
}
function scissors(){
    document.getElementById("myChoice").innerHTML="<img src=\"images/scissors.png\"/>"
    judge("scissors");
}
function paper(){
    document.getElementById("myChoice").innerHTML="<img src=\"images/paper.png\"/>"
    judge("paper");
}

function judge(myVal) {
    r = 3*Math.random();
    var cumputerchoice=cumputerChoice();
    if(myVal=="rock"){
        if(cumputerchoice=="rock"){
            ;
        }
        else if (cumputerchoice=="scissors"){
            score+=1;
        }
        else if(cumputerchoice=="paper"){
            score-=1;
        }
    }

    else if(myVal=="scissors"){
        if(cumputerchoice=="rock"){
            score-=1;
        }
        else if (cumputerchoice=="scissors"){
            ;
        }
        else if(cumputerchoice=="paper"){
            score+=1;
        }
    }

    else{
        if(cumputerchoice=="rock"){
            score+=1;
        }
        else if (cumputerchoice=="scissors"){
            score-=1;
        }
        else if(cumputerchoice=="paper"){
            ;
        }
    }
    document.getElementById("result").innerHTML="积分："+score;
    if(score>=10){
        document.getElementById("result").innerHTML="NB,通关了"+score;
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