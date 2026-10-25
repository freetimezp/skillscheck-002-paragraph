/* =========================================
   SKILLSCHECK 002 — PARAGRAPH TYPOGRAPHY
========================================= */

const questions = [
    {
        type: "single",
        question: "Which HTML element represents a paragraph?",
        hint: "Choose the standard semantic HTML element.",
        code: "<p>Learning HTML takes practice.</p>",
        options: ["<text>", "<p>", "<paragraph>", "<body-text>"],
        answers: [1],
        explanation:
            "The <p> element represents a paragraph of related content.",
    },
    {
        type: "single",
        question:
            "What normally happens when two paragraph elements are placed one after another?",
        hint: "Consider the browser's default styling.",
        code: "<p>First thought.</p>\n<p>Second thought.</p>",
        options: [
            "They become one heading.",
            "The second paragraph is hidden.",
            "They appear as separate blocks with default spacing.",
            "They are displayed side by side automatically.",
        ],
        answers: [2],
        explanation:
            "Paragraphs are block-level elements. Browsers normally display vertical space between adjacent paragraphs.",
    },
    {
        type: "single",
        question: "Which CSS property controls the size of text?",
        hint: "It can use values such as 16px, 1rem, or 1.25em.",
        code: "p {\n    font-size: 18px;\n}",
        options: ["font-weight", "text-width", "line-height", "font-size"],
        answers: [3],
        explanation: "font-size determines the size of the text characters.",
    },
    {
        type: "single",
        question: "What does a unitless line-height value of 1.6 mean?",
        hint: "Multiply the font size by the line-height number.",
        code: "p {\n    font-size: 20px;\n    line-height: 1.6;\n}",
        options: [
            "Every line is 1.6px high.",
            "The line box height is 1.6 times the font size.",
            "The paragraph is 1.6px wide.",
            "The font weight is 1.6.",
        ],
        answers: [1],
        explanation:
            "A unitless line-height is a multiplier. At 20px font size, 1.6 gives a preferred line-box height of 32px.",
    },
    {
        type: "single",
        question:
            "Which line-height is a useful starting point for many body-text paragraphs?",
        hint: "Text often needs more vertical space than tightly packed lines.",
        code: "p {\n    font-size: 16px;\n    line-height: ?;\n}",
        options: ["0.5", "1.0", "1.6", "0"],
        answers: [2],
        explanation:
            "A unitless line-height around 1.5–1.7 is a common starting point for readable body text. The ideal value depends on the font and design.",
    },
    {
        type: "multiple",
        question: "Which are valid CSS properties used to style typography?",
        hint: "Select all valid properties.",
        code: "p {\n    font-size: 18px;\n    font-family: Arial, sans-serif;\n    font-weight: 400;\n}",
        options: ["font-size", "font-family", "font-weight", "text-font-size"],
        answers: [0, 1, 2],
        explanation:
            "font-size, font-family, and font-weight are valid CSS properties. text-font-size is not a standard CSS property.",
    },
    {
        type: "single",
        question: "What is the purpose of max-width on a paragraph?",
        hint: "Think about long lines on a wide screen.",
        code: "p {\n    max-width: 600px;\n}",
        options: [
            "To set an upper limit on the paragraph's width",
            "To force every paragraph to be exactly 600px wide",
            "To increase the line height",
            "To make the text bold",
        ],
        answers: [0],
        explanation:
            "max-width limits the element's width. The paragraph can remain narrower when its container is narrower.",
    },
    {
        type: "single",
        question: "What does this CSS declaration do?",
        hint: "The ch unit is related to the width of a character.",
        code: "article p {\n    max-width: 65ch;\n}",
        options: [
            "Sets the paragraph to 65 pixels high",
            "Limits the paragraph's maximum width using the ch unit",
            "Sets the font weight to 65",
            "Creates 65 paragraphs",
        ],
        answers: [1],
        explanation:
            "The ch unit is based on the width of the 0 glyph in the element's font. max-width: 65ch can help limit line length.",
    },
    {
        type: "multiple",
        question: "Which practices can improve paragraph readability?",
        hint: "Select all useful approaches.",
        code: "p {\n    font-size: 18px;\n    line-height: 1.6;\n    max-width: 65ch;\n}",
        options: [
            "Use comfortable line spacing.",
            "Choose an appropriate text width.",
            "Ensure text has sufficient contrast.",
            "Make every paragraph a single extremely long line.",
        ],
        answers: [0, 1, 2],
        explanation:
            "Comfortable spacing, sensible line length, and adequate contrast all contribute to readability.",
    },
    {
        type: "single",
        question: "Which CSS property controls the space outside an element?",
        hint: "This property is often used to separate paragraphs.",
        code: "p {\n    margin-bottom: 24px;\n}",
        options: ["padding", "font-size", "margin", "line-height"],
        answers: [2],
        explanation:
            "margin creates space outside an element's border. margin-bottom adds space below a paragraph.",
    },
    {
        type: "single",
        question: "What is the difference between margin and padding?",
        hint: "One is outside the border; the other is inside.",
        code: "p {\n    margin: 20px;\n    padding: 12px;\n}",
        options: [
            "They always do exactly the same thing.",
            "Margin is outside the border; padding is inside.",
            "Padding controls font size.",
            "Margin controls line height.",
        ],
        answers: [1],
        explanation:
            "Margin creates external spacing around an element. Padding creates internal spacing between its content and border.",
    },
    {
        type: "multiple",
        question: "Which CSS values can be used with font-size?",
        hint: "Select the valid examples.",
        code: "p {\n    font-size: 18px;\n}",
        options: ["18px", "1.125rem", "120%", "large-text"],
        answers: [0, 1, 2],
        explanation:
            "px, rem, and percentage values are valid font-size values. large-text is not a standard font-size value.",
    },
    {
        type: "single",
        question: "What does font-weight: 700 commonly represent?",
        hint: "Think about the thickness of the characters.",
        code: "p {\n    font-weight: 700;\n}",
        options: [
            "Very small text",
            "Bold text",
            "A line-height of 700",
            "A paragraph width of 700px",
        ],
        answers: [1],
        explanation:
            "700 commonly corresponds to bold weight, although the exact rendered appearance depends on the font.",
    },
    {
        type: "single",
        question: "Which declaration selects the typeface?",
        hint: "It can contain a list of fonts and a generic fallback.",
        code: "p {\n    font-family: Arial, sans-serif;\n}",
        options: ["font-weight", "font-style", "font-family", "font-size"],
        answers: [2],
        explanation:
            "font-family specifies the preferred typeface and fallback font families.",
    },
    {
        type: "single",
        question:
            "Why should you avoid using empty paragraphs to create vertical space?",
        hint: "Consider semantic HTML and assistive technology.",
        code: "<p>First paragraph.</p>\n<p></p>\n<p>Second paragraph.</p>",
        options: [
            "Empty paragraphs are always displayed as headings.",
            "They automatically change the font.",
            "They can create confusing, meaningless content; use CSS spacing instead.",
            "Browsers cannot render multiple paragraphs.",
        ],
        answers: [2],
        explanation:
            "Empty paragraphs misuse semantic markup and can confuse screen-reader users. Use margin or another appropriate CSS layout property for spacing.",
    },
    {
        type: "single",
        question: "Which declaration changes text color?",
        hint: "Use the CSS property for the foreground color.",
        code: "p {\n    color: #444444;\n}",
        options: ["background-width", "color", "font-weight", "line-height"],
        answers: [1],
        explanation:
            "The color property sets the foreground color, usually the text color.",
    },
    {
        type: "single",
        question: "What is a likely effect of setting line-height too low?",
        hint: "Think about the vertical space between lines.",
        code: "p {\n    font-size: 18px;\n    line-height: 0.9;\n}",
        options: [
            "The paragraph becomes wider.",
            "The text always becomes bold.",
            "Lines can look crowded and may overlap.",
            "The text automatically becomes a heading.",
        ],
        answers: [2],
        explanation:
            "Very tight line spacing can make text crowded and, depending on the font, cause adjacent lines to overlap visually.",
    },
    {
        type: "multiple",
        question: "Which statements about line-height are true?",
        hint: "Choose all the correct statements.",
        code: "p {\n    font-size: 20px;\n    line-height: 1.5;\n}",
        options: [
            "A unitless value acts as a multiplier.",
            "The preferred line-box height here is 30px.",
            "line-height sets the paragraph's maximum width.",
            "Line height can affect readability.",
        ],
        answers: [0, 1, 3],
        explanation:
            "1.5 × 20px gives a 30px preferred line-box height. Line height affects vertical rhythm, not the paragraph's maximum width.",
    },
    {
        type: "single",
        question:
            "Which CSS declaration is the best choice to keep a paragraph from becoming too wide?",
        hint: "The goal is to set a maximum rather than an inflexible width.",
        code: "article p {\n    /* Choose a declaration */\n}",
        options: [
            "font-weight: 600;",
            "line-height: 1.8;",
            "max-width: 65ch;",
            "color: 65ch;",
        ],
        answers: [2],
        explanation:
            "max-width: 65ch limits line length while allowing the paragraph to shrink on narrower screens.",
    },
    {
        type: "multiple",
        question: "Which choices help create a responsive, readable paragraph?",
        hint: "Select all useful techniques.",
        code: "p {\n    max-width: 65ch;\n    line-height: 1.6;\n    margin-bottom: 1.5rem;\n}",
        options: [
            "Use a sensible maximum line length.",
            "Set a comfortable line-height.",
            "Use CSS margins for paragraph spacing.",
            "Force every paragraph to width: 1200px on all devices.",
        ],
        answers: [0, 1, 2],
        explanation:
            "A sensible maximum width, readable line spacing, and consistent margins help create a flexible reading experience.",
    },
    {
        type: "single",
        question: "What is the main purpose of the HTML p element?",
        hint: "Choose the semantic purpose, not a visual effect.",
        code: "<p>Every great interface begins with clear content.</p>",
        options: [
            "To define a paragraph of related content",
            "To create a navigation menu",
            "To define the page's metadata",
            "To create a form button",
        ],
        answers: [0],
        explanation:
            "The p element semantically represents a paragraph. CSS can then control its appearance and spacing.",
    },
];

/* =========================================
   DOM REFERENCES
========================================= */

const quizCard = document.getElementById("quizCard");
const resultsCard = document.getElementById("resultsCard");
const questionArea = document.getElementById("questionArea");

const currentNumber = document.getElementById("currentNumber");
const scoreElement = document.getElementById("score");
const progressFill = document.getElementById("progressFill");
const progressTrack = document.getElementById("progressTrack");

const checkBtn = document.getElementById("checkBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const feedback = document.getElementById("feedback");
const nextRow = document.getElementById("nextRow");
const answerStatus = document.getElementById("answerStatus");
const footerHint = document.getElementById("footerHint");

/* =========================================
   QUIZ STATE
========================================= */

let quizQuestions = [];
let currentIndex = 0;
let score = 0;
let hasAnswered = false;

/* =========================================
   SHUFFLE
   Fisher-Yates gives a uniformly randomized order.
========================================= */

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

/* =========================================
   ESCAPE HTML
   Question text and code examples are inserted
   into the DOM as text, not executable markup.
========================================= */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
        };

        return entities[character];
    });
}

/* =========================================
   CREATE A RANDOMIZED QUIZ
========================================= */

function startQuiz() {
    quizQuestions = shuffleArray(questions).map((question) => {
        // Keep each option's original index while shuffling.
        const shuffledOptions = shuffleArray(
            question.options.map((text, originalIndex) => ({
                text,
                originalIndex,
            })),
        );

        // Convert the correct original indexes into their new
        // positions in the randomized options.
        const shuffledAnswers = shuffledOptions
            .map((option, index) =>
                question.answers.includes(option.originalIndex) ? index : -1,
            )
            .filter((index) => index !== -1);

        return {
            ...question,
            options: shuffledOptions.map((option) => option.text),
            answers: shuffledAnswers,
        };
    });

    currentIndex = 0;
    score = 0;
    hasAnswered = false;

    scoreElement.textContent = "0";

    quizCard.hidden = false;
    resultsCard.hidden = true;

    renderQuestion();
}

/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {
    const question = quizQuestions[currentIndex];

    hasAnswered = false;

    currentNumber.textContent = String(currentIndex + 1).padStart(2, "0");

    scoreElement.textContent = score;

    const progress = ((currentIndex + 1) / quizQuestions.length) * 100;

    progressFill.style.width = `${progress}%`;

    progressTrack.setAttribute("aria-valuenow", currentIndex);

    const inputType = question.type === "multiple" ? "checkbox" : "radio";

    const answerType =
        question.type === "multiple"
            ? "MULTIPLE ANSWERS · SELECT ALL THAT APPLY"
            : "SINGLE ANSWER · SELECT ONE";

    questionArea.innerHTML = `
        <div class="question-enter">
            <div class="answer-type">${answerType}</div>

            <h2 class="question-title">
                ${escapeHTML(question.question)}
            </h2>

            <p class="question-hint">
                ${escapeHTML(question.hint)}
            </p>

            <div class="code-box">
                <div class="code-label">CODE SAMPLE / INSPECT</div>
                <pre>${escapeHTML(question.code)}</pre>
            </div>

            <div class="options">
                ${question.options
                    .map(
                        (option, index) => `
                    <label class="option">
                        <input
                            type="${inputType}"
                            name="answer"
                            value="${index}"
                        >
                        <span class="option-control" aria-hidden="true">✓</span>
                        <span class="option-text">${escapeHTML(option)}</span>
                    </label>
                `,
                    )
                    .join("")}
            </div>
        </div>
    `;

    feedback.hidden = true;
    feedback.innerHTML = "";

    nextRow.hidden = true;
    checkBtn.hidden = false;
    checkBtn.disabled = false;

    footerHint.textContent =
        question.type === "multiple"
            ? "SELECT ALL CORRECT ANSWERS."
            : "TAKE YOUR TIME.";

    checkBtn.innerHTML = "Check answer <span>↗</span>";
}

/* =========================================
   CHECK THE ANSWER
========================================= */

function checkAnswer() {
    if (hasAnswered) return;

    const question = quizQuestions[currentIndex];

    const selected = [
        ...questionArea.querySelectorAll('input[name="answer"]:checked'),
    ];

    const selectedAnswers = selected
        .map((input) => Number(input.value))
        .sort((a, b) => a - b);

    if (selectedAnswers.length === 0) {
        feedback.hidden = false;
        feedback.innerHTML = `
            <div class="feedback-title">Choose an answer first.</div>
            <p>Select at least one option before checking.</p>
        `;
        return;
    }

    hasAnswered = true;

    const correctAnswers = [...question.answers].sort((a, b) => a - b);

    // A multiple-answer question is correct only when the
    // complete set of selected indexes matches the correct set.
    const isCorrect =
        selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every(
            (answer, index) => answer === correctAnswers[index],
        );

    if (isCorrect) {
        score++;
    }

    scoreElement.textContent = score;

    // Highlight every correct option and any selected wrong option.
    questionArea.querySelectorAll(".option").forEach((label, index) => {
        const input = label.querySelector("input");

        input.disabled = true;

        if (correctAnswers.includes(index)) {
            label.classList.add("correct");
        } else if (input.checked) {
            label.classList.add("incorrect");
        }
    });

    feedback.hidden = false;
    feedback.innerHTML = `
        <div class="feedback-title ${isCorrect ? "good" : "bad"}">
            ${isCorrect ? "✓ Correct answer!" : "✕ Not quite!"}
        </div>
        <p>${escapeHTML(question.explanation)}</p>
    `;

    nextRow.hidden = false;
    checkBtn.hidden = true;

    answerStatus.textContent = isCorrect ? "+1 POINT" : "0 POINTS";

    nextBtn.textContent =
        currentIndex === quizQuestions.length - 1
            ? "View results ↗"
            : "Next question →";
}

/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {
    if (!hasAnswered) return;

    currentIndex++;

    if (currentIndex >= quizQuestions.length) {
        showResults();
        return;
    }

    renderQuestion();
}

/* =========================================
   RESULTS
========================================= */

function showResults() {
    quizCard.hidden = true;
    resultsCard.hidden = false;

    const total = quizQuestions.length;
    const percentage = Math.round((score / total) * 100);

    document.getElementById("finalScore").textContent = `${score} / ${total}`;

    document.getElementById("accuracy").textContent = `${percentage}%`;

    document.getElementById("correctTotal").textContent = `${score} / ${total}`;

    let title;
    let description;
    let symbol;
    let recommendation;

    if (percentage >= 90) {
        title = "TYPOGRAPHY MASTER.";
        description =
            "Excellent work. You understand the building blocks of readable paragraph design.";
        symbol = "✳";
        recommendation =
            "Next step: apply these principles to a complete article layout.";
    } else if (percentage >= 70) {
        title = "SOLID FOUNDATION.";
        description =
            "You understand most of the fundamentals. Review the questions you missed and keep practicing.";
        symbol = "↗";
        recommendation =
            "Next step: experiment with line height and max-width in the typography playground.";
    } else if (percentage >= 50) {
        title = "KEEP REFINING.";
        description =
            "You're making progress. Spend a little more time with paragraph structure, CSS spacing, and line height.";
        symbol = "↻";
        recommendation =
            "Next step: revisit School 002 and try the examples again.";
    } else {
        title = "EVERY LINE COUNTS.";
        description =
            "This is the beginning. Review the fundamentals, experiment with the code, and give it another try.";
        symbol = "¶";
        recommendation =
            "Next step: start with the HTML p element, then learn font-size, line-height, and max-width.";
    }

    document.getElementById("resultTitle").textContent = title;
    document.getElementById("resultCopy").textContent = description;
    document.getElementById("resultSymbol").textContent = symbol;
    document.getElementById("resultMessage").textContent = recommendation;

    resultsCard.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        block: "center",
    });
}

/* =========================================
   BUTTON EVENTS
========================================= */

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", startQuiz);

/* =========================================
   START THE APP
========================================= */

startQuiz();
