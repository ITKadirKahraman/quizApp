let currentCategory = "";
let currentQuestion = 0;
let rightAnswers = 0;
let AUDIO_RIGHT = new Audio('./assets/audio/success.mp3');
let AUDIO_FAILED = new Audio('./assets/audio/failed.mp3');

function init() {
    document.getElementById('nextBtn').disabled = true;
    document.getElementById('quizScreen').style.display = 'none';
}

function selectCategory(category) {
    currentCategory = category;
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'flex';
    showQuestion();
    updateProgressBar();
}

function showStartseite() {
    document.getElementById('startScreen').style.display = 'block';
    document.getElementById('quizScreen').style.display = "none";
    resetAnswers();
}

function showQuestion() {
    resetAnswers();
    let question = questions[currentCategory][currentQuestion];
    document.getElementById('questionsTitle').innerHTML = question.question;
    document.getElementById('answer1').innerHTML = question.answer1;
    document.getElementById('answer2').innerHTML = question.answer2;
    document.getElementById('answer3').innerHTML = question.answer3;
    document.getElementById('answer4').innerHTML = question.answer4;
    document.getElementById('position').innerHTML = currentQuestion + 1;
    document.getElementById('allQuestions').innerHTML = questions[currentCategory].length;
    document.getElementById('nextBtn').disabled = true;
}

function answer(selection) {
    let question = questions[currentCategory][currentQuestion];
    let selectedAnswerNumber = selection.slice(-1);
    let idOfRightAnswer = `answer${question.rightAnswer}`;

    if (selectedAnswerNumber == question.rightAnswer) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightAnswers++;
        AUDIO_RIGHT.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_FAILED.play();
    }
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions[currentCategory].length) {

        alert(
            `Quiz beendet!\n\nRichtige Antworten: ${rightAnswers} von ${questions[currentCategory].length}`
        );

        return;
    }
    showQuestion();
    updateProgressBar();
}

function resetAnswers() {
    document.getElementById('answer1').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer2').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer3').parentNode.classList.remove('bg-success', 'bg-danger');
    document.getElementById('answer4').parentNode.classList.remove('bg-success', 'bg-danger');
}


function updateProgressBar() {
    let percent = ((currentQuestion + 1) / questions[currentCategory].length) * 100;
    percent = Math.round(percent);
    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressBar').innerHTML = `${percent}%`;
}