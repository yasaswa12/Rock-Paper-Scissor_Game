let user_count = 0;
let com_count = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const comp_score = document.querySelector("#com_score");
const user_score = document.querySelector("#user_score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};
const draw = () => {
    msg.innerText = "game was draw play again !!";
    msg.style.backgroundColor = "yellow";
};
const showwinner = (userwin, comchoice, userchoice) => {
    if (userwin) {
        user_count++;
        user_score.innerText = user_count;
        msg.innerText = `you win!! your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        com_count++;
        comp_score.innerText = com_count;
        msg.innerText = `you lost!! ${comchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const comchoice = gencompchoice();
    if (comchoice === userchoice) {
        draw();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            //paper scissor
            userwin = comchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock scissor
            userwin = comchoice === "scissor" ? false : true;
        }
        else {//rock paper
            userwin = comchoice === "rock" ? false : true;
        }
        showwinner(userwin, comchoice, userchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        playgame(user_choice);
    });
});
