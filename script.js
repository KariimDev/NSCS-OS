// State
let currentMode = 'flashcards';
let flashcardIndex = 0;
let shuffledData = []; // New array for shuffled cards
let quizScore = 0;
let quizTotal = 10; // total questions per quiz session
let quizAsked = 0; // how many questions have been presented
let questionsAnswered = 0; // how many questions have been answered
let quizFinished = false;
let currentQuestion = null;
let isQuizAnswered = false;

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

    // Increment question counter (we're about to show the next one)
    quizAsked++;

    // Pick a random correct item
    const correctIndex = Math.floor(Math.random() * commandData.length);
    const correctItem = commandData[correctIndex];

    // Randomize Question Type
    const questionType = Math.random() > 0.5 ? 'desc-to-cmd' : 'cmd-to-desc';

    // Build a descriptive question plus a prompt value
    if (questionType === 'desc-to-cmd') {
        currentQuestion = {
            text: `Question ${quizAsked} of ${quizTotal}: Which command matches the following description?`,
            prompt: correctItem.description,
            correctAnswer: correctItem.command
        };
    } else {
        currentQuestion = {
            text: `Question ${quizAsked} of ${quizTotal}: What does the following command do?`,
            prompt: correctItem.command,
            correctAnswer: correctItem.description
        };
    }

    // Generate Distractors
    const options = [currentQuestion.correctAnswer];
    while (options.length < 4) {
        const randomIdx = Math.floor(Math.random() * commandData.length);
        const randomItem = commandData[randomIdx];

        const randomOption = (questionType === 'desc-to-cmd') ? randomItem.command : randomItem.description;
        if (!options.includes(randomOption)) options.push(randomOption);
    }

    // Shuffle Options
    shuffleArray(options);

    // Render question and populate prompt element
    questionText.textContent = currentQuestion.text;
    const promptEl = document.getElementById('question-prompt');
    if (promptEl) promptEl.textContent = currentQuestion.prompt;

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

    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    if (isCorrect) {
        btnElement.classList.add('correct');
        quizScore++;
        feedbackText.textContent = "Correct! 🎉";
        feedbackText.style.color = "var(--success-color)";
    } else {
        btnElement.classList.add('incorrect');
        feedbackText.textContent = `Wrong! The correct answer was: ${currentQuestion.correctAnswer}`;
        feedbackText.style.color = "var(--error-color)";

        // Highlight the correct answer
        const buttons = optionsGrid.querySelectorAll('.option-btn');
        buttons.forEach(b => {
            if (b.textContent === currentQuestion.correctAnswer) {
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
        quizAsked = quizTotal; // ensure nextQuestion shows final summary
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
