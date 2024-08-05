//Quiz app 
// below is an array of objects
// within an object is a string with the question followed by another array of objects 

//  Data Structures and Algorithms 
const questions1 = [
    {
        question: "What is the time complexity of searching in a sorted array using binary search?",
        answers: [
            {text: "O(1)", correct: false},
            {text: "O(log n)", correct: true},
            {text: "O(n)", correct: false},
            {text: "O(n^2)", correct: false}
        ]
    },
    {
        question: "Which data structure follows the Last In First Out (LIFO) principle?",
        answers: [
            {text: "Stack", correct: true},
            {text: "Queue", correct: false},
            {text: "Linked List", correct: false},
            {text: "Tree", correct: false}
        ]
    },
    {
        question: "Which sorting algorithm has the best worst-case time complexity?",
        answers: [
            {text: "Quick Sort", correct: false},
            {text: "Merge Sort", correct: true},
            {text: "Bubble Sort", correct: false},
            {text: "Insertion Sort", correct: false}
        ]
    },
    {
        question: "Which data structure uses both FIFO and LIFO principles?",
        answers: [
            {text: "Stack", correct: false},
            {text: "Queue", correct: false},
            {text: "Linked List", correct: true},
            {text: "Tree", correct: false}
        ]
    },
    {
        question: "Which algorithm is used for finding the shortest path in a weighted graph?",
        answers: [
            {text: "Breadth-First Search (BFS)", correct: false},
            {text: "Depth-First Search (DFS)", correct: false},
            {text: "Dijkstra's Algorithm", correct: true},
            {text: "Prim's Algorithm", correct: false}
        ]
    },
    {
        question: "Which data structure is suitable for implementing a priority queue?",
        answers: [
            {text: "Array", correct: false},
            {text: "Stack", correct: false},
            {text: "Queue", correct: false},
            {text: "Heap", correct: true}
        ]
    },
    {
        question: "What is the time complexity of inserting an element at the end of an array (assuming no resizing)?",
        answers: [
            {text: "O(1)", correct: true},
            {text: "O(log n)", correct: false},
            {text: "O(n)", correct: false},
            {text: "O(n^2)", correct: false}
        ]
    },
    {
        question: "Which algorithm is used for traversing a binary tree in an inorder manner?",
        answers: [
            {text: "Pre-order traversal", correct: false},
            {text: "Post-order traversal", correct: false},
            {text: "In-order traversal", correct: true},
            {text: "Level-order traversal", correct: false}
        ]
    },
    {
        question: "Which data structure is typically used for implementing a hash table?",
        answers: [
            {text: "Array", correct: true},
            {text: "Stack", correct: false},
            {text: "Queue", correct: false},
            {text: "Linked List", correct: false}
        ]
    },
    {
        question: "Which algorithm is used for finding the minimum spanning tree in a graph?",
        answers: [
            {text: "Breadth-First Search (BFS)", correct: false},
            {text: "Depth-First Search (DFS)", correct: false},
            {text: "Dijkstra's Algorithm", correct: false},
            {text: "Prim's Algorithm", correct: true}
        ]
    }
];


// Operating systems 
const questions2 = [
    {
        question: "What is a file system?",
        answers: [
            {text: "A system for organizing and storing computer files", correct: true},
            {text: "A hardware component that reads and writes data to and from storage devices", correct: false},
            {text: "An operating system kernel module responsible for managing memory", correct: false},
            {text: "A network protocol for transferring files between computers", correct: false}
        ]
    },
    {
        question: "What is multitasking?",
        answers: [
            {text: "A technique used in database management systems", correct: false},
            {text: "The ability of an operating system to execute multiple tasks concurrently", correct: true},
            {text: "A method of managing interrupts in computer systems", correct: false},
            {text: "A feature of computer networks that allows multiple users to access the same resource simultaneously", correct: false}
        ]
    },
    {
        question: "What is a deadlock?",
        answers: [
            {text: "A situation where two or more processes are waiting indefinitely for resources held by each other", correct: true},
            {text: "A security vulnerability in operating systems", correct: false},
            {text: "A type of memory corruption error", correct: false},
            {text: "A condition in computer networks that causes excessive traffic", correct: false}
        ]
    },
    {
        question: "What is a device driver?",
        answers: [
            {text: "A program that translates high-level programming interfaces into low-level hardware commands", correct: true},
            {text: "A hardware component that connects peripheral devices to the computer", correct: false},
            {text: "A file system format used in Unix-like operating systems", correct: false},
            {text: "A protocol used for communication between devices in a computer network", correct: false}
        ]
    }
];


// theoretical concepts 
const questions3 = [
    {
        question: "What is Turing completeness?",
        answers: [
            {text: "A property of programming languages that allows them to simulate a Turing machine", correct: true},
            {text: "A measure of computational complexity", correct: false},
            {text: "A method for achieving parallelism in computer systems", correct: false},
            {text: "A technique for optimizing algorithms", correct: false}
        ]
    },
    {
        question: "What is the Church-Turing thesis?",
        answers: [
            {text: "A conjecture stating that every effectively calculable function is computable by a Turing machine", correct: true},
            {text: "A theorem proving the existence of an undecidable problem", correct: false},
            {text: "A principle in cryptography ensuring the security of encryption algorithms", correct: false},
            {text: "A method for reducing the time complexity of algorithms", correct: false}
        ]
    },
    {
        question: "What is the difference between decidability and semi-decidability?",
        answers: [
            {text: "Decidability refers to problems for which there exists an algorithm that always halts and gives a correct answer, while semi-decidability refers to problems for which there exists an algorithm that halts and gives a correct answer if the answer is 'yes'", correct: true},
            {text: "Decidability refers to problems that can be solved using a decision tree, while semi-decidability refers to problems that require backtracking", correct: false},
            {text: "Decidability refers to problems with polynomial time complexity, while semi-decidability refers to problems with exponential time complexity", correct: false},
            {text: "Decidability refers to problems that can be solved using dynamic programming, while semi-decidability refers to problems that require greedy algorithms", correct: false}
        ]
    },
    {
        question: "What is a context-free grammar?",
        answers: [
            {text: "A formal grammar in which every production rule consists of a single nonterminal symbol followed by a string of terminal symbols", correct: true},
            {text: "A formal grammar that allows recursion in production rules", correct: false},
            {text: "A formal grammar that describes regular languages", correct: false},
            {text: "A formal grammar that allows ambiguity in production rules", correct: false}
        ]
    }
];



let questions;

const selectionButtons = document.querySelectorAll('.begin');
selectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const topic = button.value;
        loadQuestions(topic);
        startQuiz();
    });
});

function loadQuestions(topic) {
    switch (topic) {
        case '0':
            questions = questions1;
            break;
        case '1':
            questions = questions2;
            break;
        case '2':
            questions = questions3;
            break;
        default:
            questions = [];
    }

    // Now you have the questions for the selected topic, do whatever you need to do with them
    console.log(questions);
    // You can use these questions to display them on the page or for any other purpose
}






// selecting html elements 
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Task needed to do 
// must iterate through questions array constantly updating the question 
// will need a count to count the number of correct questions 

let currentQuestionIndex = 0;
let score = 0;

// function to Start Quiz 
function startQuiz() {
    // whenever quiz starts, it should restart currentQuestionIndex as well as the score 
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = "Next";
     showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1; // if index is zero current question number would be 1 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // here we have gotten the first question
    
    // code to display the answers 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn"); // this adds the CSS property to each button created 
        answerButtons.appendChild(button); // it then appends buttons to answerButtons 

        if(answer.correct) // checks if current answer is truthy 
        {
            button.dataset.correct = answer.correct; // button.dataset.correct now holds the correct answer to the question 
        }
        button.addEventListener("click",selectAnswer)
    });

}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild); // this will remove all the previous answers 
    } 

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"; // checking if button user selected is true
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }

    // checks if we have selected the right answer and if not 
    // it will find the answer with the correct value and add css property of correct to it 
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true") {
           button.classList.add("correct");
        }
        button.disabled = true; // disable clicking on buttons 
    });
    nextButton.style.display = "block"; // adter user clicks on a button the next button will display 
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}. If you wish select another topic or play again`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length)
    {
        handleNextButton();
    } else {
        startQuiz();
    }
})



/*
git remote add origin https://github.com/oJomiloju/quiz-app.git
git branch -M main
git push -u origin main
*/