

const quizData =[{
       question: "Who developed Java?",
       a: 'Brendan Eich',
       b: 'James Gosling',
       c: 'Steven Blake',
       d: 'Bjarne Stroustroup',
       correct : 'b'
},
{
    question: "How do you display content on screen in javascript?",
    a: 'cout<<',
    b: 'console.log()',
    c: 'System.out.print()',
    d: 'print()',
    correct : 'b'
},
{
    question: "Which is not the property of OOP's?",
    a: 'modularity',
    b: 'polymorphism',
    c: 'functional programming',
    d: 'inheritance',
    correct : 'c'
},
{
    question: "All keywords in C are in",
    a: 'Lower Case letters',
    b: 'Upper Case letters',
    c: 'Camel Case letters',
    d: 'None of the mentioned',
    correct : 'a'
},
{
    question: "Which one of the following is a loop construct that will always be executed once?",
    a: 'for',
    b: 'while',
    c: 'switch',
    d: 'do while',
    correct : 'd'
}
]
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll(".answer");
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
const submitbtn= document.getElementById('submit');

let currentQuiz =0;

let score = 0;
loadQuiz();






function loadQuiz()
{    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
   
}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitbtn.addEventListener("click",()=>
{// check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            
            quiz.innerHTML = `
            
            
            <button onclick="location.reload()">Reload</button>

             <br>
             <br>
             <br>
             <br>
             <br>

            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
        `;
            
        }
    }
});

    