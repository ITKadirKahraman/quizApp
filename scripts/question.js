function showJavaScriptQuestion() {
    let question = questions.JavaScript[currentQuestion];
    document.getElementById('questionsTitle').innerHTML = question['question'];
}

function showJavaScriptAnswer() {
    let answer = questions.JavaScript[currentQuestion];
    document.getElementById('answer1').innerHTML = answer['answer1'];
    document.getElementById('answer2').innerHTML = answer['answer2'];
    document.getElementById('answer3').innerHTML = answer['answer3'];
    document.getElementById('answer4').innerHTML = answer['answer4'];
}

function showTypeScriptQuestion() {
    let question = questions.TypeScript[currentQuestion];
    document.getElementById('questionsTitle').innerHTML = question['question'];
}

function showTypeScriptAnswer() {
    let answer = questions.TypeScript[currentQuestion];
    document.getElementById('answer1').innerHTML = answer['answer1'];
    document.getElementById('answer2').innerHTML = answer['answer2'];
    document.getElementById('answer3').innerHTML = answer['answer3'];
    document.getElementById('answer4').innerHTML = answer['answer4'];
}

function showPythonQuestion() {
    let question = questions.Python[currentQuestion];
    document.getElementById('questionsTitle').innerHTML = question['question'];
}

function showPythonAnswer() {
    let answer = questions.Python[currentQuestion];
    document.getElementById('answer1').innerHTML = answer['answer1'];
    document.getElementById('answer2').innerHTML = answer['answer2'];
    document.getElementById('answer3').innerHTML = answer['answer3'];
    document.getElementById('answer4').innerHTML = answer['answer4'];
}  

function showRustQuestion() {
    let question = questions.Rust[currentQuestion];
    document.getElementById('questionsTitle').innerHTML = question['question'];
}

function showRustAnswer(){
    let answer = questions.Rust[currentQuestion];
    document.getElementById('answer1').innerHTML = answer['answer1'];
    document.getElementById('answer2').innerHTML = answer['answer2'];
    document.getElementById('answer3').innerHTML = answer['answer3'];
    document.getElementById('answer4').innerHTML = answer['answer4'];
}

function openJSQuetsion() {
    showJavaScriptQuestion();
    showJavaScriptAnswer();
}

function openTypeScriptQuetsion() {
    showTypeScriptQuestion();
    showTypeScriptAnswer();
}

function openPyhtonQuetsion() {
    showPythonQuestion();
    showPythonAnswer();
}

function openRustQuetsion() {
    showRustQuestion();
    showRustAnswer();
}

function javaScriptLength() {
    document.getElementById('allQuestions').innerHTML = questions.JavaScript.length;
}

function typeScriptLength() {
    document.getElementById('allQuestions').innerHTML = questions.TypeScript.length;
}

function pythonLength() {
    document.getElementById('allQuestions').innerHTML = questions.Python.length;
}

function rustLength() {
    document.getElementById('allQuestions').innerHTML = questions.Rust.length;
}