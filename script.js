let position = 1;
let currentQuestion = 0;

function init() {
    positionQuestion();
    quizsLength();
    showPage();
}

function positionQuestion() {
    document.getElementById('position').innerHTML = position;
    position++;
}

function showPage() {
    openJSQuetsion();
    openTypeScriptQuetsion();
    openPyhtonQuetsion();
    openRustQuetsion();
    updateProcessbar();
}

function updateProcessbar() {
    let percent = (currentQuestion + 1) / questions.JavaScript.length;
    percent = Math.round(percent * 100);
    document.getElementById('progressBar').innerHTML = `${percent} %`;
    document.getElementById('progressBar').style = `width: ${percent}%`; 
}

function quizsLength() {
    javaScriptLength();
    typeScriptLength();
    pythonLength();
    rustLength();
}

function prevQuestion() {

}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next').disable = true;
    showPage();
    positionQuestion();
}