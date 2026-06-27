let score = 0;

let num1;
let num2;

function nextQuestion() {

    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;

    document.getElementById("question").innerHTML =
        num1 + " × " + num2;

    document.getElementById("answer").value = "";

}

nextQuestion();

document.getElementById("submit").onclick = function () {

    let answer = Number(document.getElementById("answer").value);

    if (answer === num1 * num2) {

        score++;

        document.getElementById("score").innerHTML =
            "Score: " + score;

        document.getElementById("result").innerHTML =
            "✅ Correct";

    } else {

        document.getElementById("result").innerHTML =
            "❌ Wrong";

    }

    nextQuestion();

};

document.getElementById("answer").addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        document.getElementById("submit").click();

    }

});

let timeLeft = 60;

let timer = setInterval(function () {

    timeLeft--;

    document.getElementById("timer").innerHTML =
        "Time: " + timeLeft;

    if (timeLeft <= 0) {

        clearInterval(timer);

        document.getElementById("question").innerHTML =
            "🎉 Time's Up!";

        document.getElementById("result").innerHTML =
            "Final Score: " + score;

        document.getElementById("submit").disabled = true;

        document.getElementById("answer").disabled = true;

    }

}, 1000);