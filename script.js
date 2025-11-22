// State
let currentMode = 'quiz';
let flashcardIndex = 0;
let shuffledData = []; // New array for shuffled cards
let quizScore = 0;
let quizTotal = 10; // total questions per quiz session
let quizAsked = 0; // how many questions have been presented
let questionsAnswered = 0; // how many questions have been answered
let quizFinished = false;
let currentQuestion = null;
let isQuizAnswered = false;
let quizQuestions = []; // New state for quiz questions

// DOM Elements
const flashcardSection = document.getElementById('flashcard-section');
const quizSection = document.getElementById('quiz-section');
const tabFlashcards = document.getElementById('tab-flashcards');
const tabQuiz = document.getElementById('tab-quiz');

// Flashcard Elements
const cardElement = document.getElementById('flashcard');
const cardCommand = document.getElementById('card-command');
const cardDescription = document.getElementById('card-description');
const cardCounter = document.getElementById('card-counter');

// Quiz Elements
const scoreElement = document.getElementById('score');
const progressFill = document.getElementById('progress-fill');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const quizFeedback = document.getElementById('quiz-feedback');
const feedbackText = document.getElementById('feedback-text');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    shuffledData = [...commandData]; // Initialize with original order
    renderFlashcard();

    // Initialize quiz questions if available
    if (typeof quizData !== 'undefined') {
        resetQuiz();
        nextQuestion();
    }
});

// Mode Switching
function switchMode(mode) {
    currentMode = mode;

    if (mode === 'flashcards') {
        flashcardSection.classList.add('active-section');
        quizSection.classList.remove('active-section');
        tabFlashcards.classList.add('active');
        tabQuiz.classList.remove('active');
    } else {
        flashcardSection.classList.remove('active-section');
        quizSection.classList.add('active-section');
        tabFlashcards.classList.remove('active');
        tabQuiz.classList.add('active');
        if (quizAsked === 0 && !quizFinished) {
            resetQuiz();
            nextQuestion(); // Start quiz
        }
    }
}

function resetQuiz() {
    quizScore = 0;
    quizAsked = 0;
    questionsAnswered = 0;
    quizFinished = false;
    scoreElement.textContent = `${quizScore} / ${quizTotal}`;
    progressFill.style.width = `0%`;
    quizFeedback.classList.add('hidden');
    const nextBtn = document.querySelector('.next-question-btn');
    if (nextBtn) nextBtn.textContent = 'Next Question';

    // Select new random questions with difficulty progression
    if (typeof quizData !== 'undefined') {
        const allQuestions = [...quizData.questions];

        // Group by difficulty
        const easy = allQuestions.filter(q => q.difficulty_level === 'Easy');
        const medium = allQuestions.filter(q => q.difficulty_level === 'Medium');
        const hard = allQuestions.filter(q => q.difficulty_level === 'Hard');

        // Shuffle each group
        shuffleArray(easy);
        shuffleArray(medium);
        shuffleArray(hard);

        // Select a mix: e.g., 3 Easy, 4 Medium, 3 Hard (or as available)
        // Adjust numbers based on availability
        const selectedEasy = easy.slice(0, 3);
        const selectedMedium = medium.slice(0, 4);
        const selectedHard = hard.slice(0, 3);

        // If we don't have enough, fill up from others? 
        // For simplicity, let's just concatenate what we have and maybe fill the rest if needed.
        // But given the file size, we likely have enough.

        // Create progression: Easy -> Medium -> Hard
        let progression = [...selectedEasy, ...selectedMedium, ...selectedHard];

        // If we still need more to reach quizTotal (10), fill with remaining mixed
        if (progression.length < quizTotal) {
            const usedIds = new Set(progression.map(q => q.question));
            const remaining = allQuestions.filter(q => !usedIds.has(q.question));
            shuffleArray(remaining);
            progression = [...progression, ...remaining.slice(0, quizTotal - progression.length)];
        }

        // Sort by difficulty level value for consistent progression
        const difficultyValue = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
        progression.sort((a, b) => difficultyValue[a.difficulty_level] - difficultyValue[b.difficulty_level]);

        quizQuestions = progression.slice(0, quizTotal);
    }
}


function shuffleCards() {
    shuffleArray(shuffledData);
    flashcardIndex = 0;
    renderFlashcard();

    // Visual feedback
    const btn = document.querySelector('button[title="Shuffle"]');
    if (btn) {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        setTimeout(() => btn.innerHTML = originalHtml, 1000);
    }
}

// Keyboard navigation for flashcards
document.addEventListener('keydown', (e) => {
    if (currentMode !== 'flashcards') return;

    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
    if (e.key === ' ' || e.key === 'Enter') flipCard();
});

// --- Quiz Logic ---

function nextQuestion() {
    // If quiz finished and user clicks next (Restart), reset and start over
    if (quizFinished) {
        resetQuiz();
        // Need to call nextQuestion again to show the first question of the new set
        // But resetQuiz doesn't call nextQuestion anymore, so we do it here?
        // Wait, switchMode calls resetQuiz then nextQuestion.
        // If we are here, it means user clicked "Restart Quiz".
        // So we should proceed to show the first question.
        // Let's just let the flow continue.
        // ResetQuiz sets quizAsked to 0.
    }

    // If we've already presented the total number of questions, show final summary
    if (quizAsked >= quizTotal) {
        quizFinished = true;
        quizFeedback.classList.remove('hidden');
        feedbackText.textContent = `Quiz complete! Your score: ${quizScore} / ${quizTotal}`;
        feedbackText.style.color = "var(--accent-color)";
        const nextBtn = document.querySelector('.next-question-btn');
        if (nextBtn) nextBtn.textContent = 'Restart Quiz';
        return;
    }

    isQuizAnswered = false;
    quizFeedback.classList.add('hidden');
    optionsGrid.innerHTML = ''; // Clear previous options

    // Get current question
    if (quizQuestions.length === 0) {
        // Fallback if no questions loaded
        questionText.textContent = "Error: No questions available.";
        return;
    }

    currentQuestion = quizQuestions[quizAsked];

    // Increment question counter
    quizAsked++;

    // Render question
    // Render question
    const difficultyColor = {
        'Easy': '#2ecc71',
        'Medium': '#f1c40f',
        'Hard': '#e74c3c'
    };
    const difficultyHtml = `<span style="
        display: inline-block;
        font-size: 0.8rem;
        padding: 2px 8px;
        border-radius: 12px;
        background-color: ${difficultyColor[currentQuestion.difficulty_level] || '#ccc'};
        color: white;
        margin-bottom: 8px;
    ">${currentQuestion.difficulty_level}</span>`;

    questionText.innerHTML = `${difficultyHtml}<br>Question ${quizAsked} of ${quizTotal}: ${currentQuestion.question}`;
    const promptEl = document.getElementById('question-prompt');
    if (promptEl) promptEl.textContent = ""; // Clear prompt as it's in the question text now

    // Options
    const options = [...currentQuestion.options];
    // Shuffle options for better experience
    shuffleArray(options);

    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option, btn);
        optionsGrid.appendChild(btn);
    });
}

function checkAnswer(selectedOption, btnElement) {
    if (isQuizAnswered) return;
    isQuizAnswered = true;

    const isCorrect = selectedOption === currentQuestion.right_option;

    if (isCorrect) {
        btnElement.classList.add('correct');
        quizScore++;
        feedbackText.innerHTML = `Correct! 🎉<br><br>${currentQuestion.explanation}`;
        feedbackText.style.color = "var(--success-color)";
    } else {
        btnElement.classList.add('incorrect');
        feedbackText.innerHTML = `Wrong! The correct answer was: <strong>${currentQuestion.right_option}</strong>.<br><br>${currentQuestion.explanation}`;
        feedbackText.style.color = "var(--error-color)";

        // Highlight the correct answer
        const buttons = optionsGrid.querySelectorAll('.option-btn');
        buttons.forEach(b => {
            if (b.textContent === currentQuestion.right_option) {
                b.classList.add('correct');
            }
        });
    }

    scoreElement.textContent = quizScore;
    quizFeedback.classList.remove('hidden');

    // Update answered count and progress bar
    questionsAnswered++;
    scoreElement.textContent = `${quizScore} / ${quizTotal}`;
    const progress = Math.round((questionsAnswered / quizTotal) * 100);
    progressFill.style.width = `${progress}%`;
    // If we've answered all questions, show final message on nextQuestion call
    if (questionsAnswered >= quizTotal) {
        // quizAsked is already incremented when showing the question.
        // So if questionsAnswered == quizTotal, we are done.
        // Next click on "Next Question" will trigger the completion screen.
    }
}

// Utility
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Flashcard Rendering & Controls ---
function renderFlashcard() {
    if (!shuffledData || shuffledData.length === 0) return;

    // Clamp index
    if (flashcardIndex < 0) flashcardIndex = 0;
    if (flashcardIndex >= shuffledData.length) flashcardIndex = shuffledData.length - 1;

    const item = shuffledData[flashcardIndex];
    if (!item) return;

    // Ensure the card is not flipped when rendering a new item
    if (cardElement) cardElement.classList.remove('flipped');

    // Populate front and back
    if (cardCommand) cardCommand.textContent = item.command;
    if (cardDescription) cardDescription.textContent = item.description;

    // Update counter
    if (cardCounter) cardCounter.textContent = `${flashcardIndex + 1} / ${shuffledData.length}`;
}

function flipCard() {
    if (!cardElement) return;
    cardElement.classList.toggle('flipped');
}

function nextCard() {
    if (!shuffledData || shuffledData.length === 0) return;
    flashcardIndex = (flashcardIndex + 1) % shuffledData.length;
    renderFlashcard();
}

function prevCard() {
    if (!shuffledData || shuffledData.length === 0) return;
    flashcardIndex = (flashcardIndex - 1 + shuffledData.length) % shuffledData.length;
    renderFlashcard();
}

// Ensure initial render if DOMContentLoaded already fired
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    if (!shuffledData || shuffledData.length === 0) shuffledData = [...commandData];
    renderFlashcard();
}
