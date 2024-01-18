const container = document.querySelector("#container");
const title = document.querySelector(".title");
const answerEl = document.querySelectorAll(".answer");
const button = document.querySelector("#submit");
const aText = document.querySelector("#a-text");
const bText = document.querySelector("#b-text");
const cText = document.querySelector("#c-text");
const dText = document.querySelector("#d-text");

let currentQuiz = 0;
let score = 0;

const quizData = [
    {
        question: "Türkiyenin Başkenti Neresidir ?",
        a: "İstanbul",
        b: "Ankara",
        c: "İzmir",
        d: "Bursa",
        correct: "b"
    },
    {
        question: "Türkiyenin En Kalabalık İli Hangisidir ?",
        a: "Ankara",
        b: "İzmir",
        c: "İstanbul",
        d: "Manisa",
        correct: "c"
    },
    {
        question: "Hangisi Nato Ülkesi Değildir ?",
        a: "Abd",
        b: "Rusya",
        c: "İngiltere",
        d: "Norveç",
        correct: "b"
    },
];

loadQuiz();

function loadQuiz() {
    deSelectedAnswer();
    const quizAnswer = quizData[currentQuiz];
    title.innerHTML = quizAnswer.question;
    aText.innerHTML = quizAnswer.a;
    bText.innerHTML = quizAnswer.b;
    cText.innerHTML = quizAnswer.c;
    dText.innerHTML = quizAnswer.d;
}

function deSelectedAnswer() {
    answerEl.forEach(answer => answer.checked = false);
}

function getSelected() {
    let answer;
    answerEl.forEach(answerOption => {
        if (answerOption.checked) {
            answer = answerOption.id;
        }
    });
    return answer;
}

button.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            title.innerHTML = `<h2>Sorularının ${score}/${quizData.length} doğru</h2>`;
            const reloadButton = document.createElement("button");
            reloadButton.textContent = "Reload";
            reloadButton.onclick = () => location.reload();
            container.appendChild(reloadButton);
        }
    }
});
