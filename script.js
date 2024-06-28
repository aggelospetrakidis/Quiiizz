const questions =[
    {question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:false},
            {text:"Blue Whale ",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false}
        ]
    }, {question:"Which is the largest desert in the world?",
        answers:[
            {text:"Gobi",correct:false},
            {text:"Antarctica ",correct:true},
            {text:"Sahara",correct:false},
            {text:"Kalahari",correct:false}
        ]
    }, {question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Africa",correct:false},
            {text:"Australia ",correct:true},
            {text:"Arctic",correct:false},
            {text:"Asia",correct:false}
        ]
    }, {question:"Which is the most wealthy country",
        answers:[
            {text:"Germany",correct:false},
            {text:"Sweden",correct:false},
            {text:"Switzerland",correct:false},
            {text:"Luxembourg",correct:true}
        ]
    },

];


const questionElement = document.getElementById("question");
const answerBtn=document.getElementById("answer-buttons");
const nextBtn= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score   =0;

 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextBtn.innerHTML = "Next"
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question   
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    });
 }

function resetState(){
    nextBtn.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

    function selectAnswer(e){
        const selectedBtn = e.target ;
        const isCorrect = selectedBtn.dataset.correct=="true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }Array.from(answerBtn.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }button.disabled=true
        });
        nextBtn.style.display="block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=" you scored "+ score+" out of 4 questions"
        nextBtn.innerHTML="play again";
        nextBtn.style.diplay="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


 startQuiz();
