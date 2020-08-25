$(document).ready(function () {
var answers = ["-", "på", "i", "om"];

$('button').prop('disabled', true);

var tralivali = [{
    question: `Mariann tränar sig tre gånger _______ veckan.`,
    answers: answers,
    correct: 2
},

    {question: 'Varje gång tränar hon _______ två timmar ungefär.',
    answers: answers,
    correct: 2
},
    {question: 'Hon springer snabbt, 5 kilometer _______ 15 minuter.',
    answers: answers,
    correct: 1,
},
    {question: 'Bengt lyssnar på sportnyheter flera gånger _______ dagen.',
    answers: answers,
    correct: 3,
},
    {question: 'I dag talar de om en man som har sprungit 100 meter _______ 9 sekunder.',
    answers: answers,
    correct: 1,
},
    {question: 'Örjan har tränat karate _______ 3 år.',
    answers: answers,
    correct: 0,
},
    {question: 'Han tränar 4 gånger _______ veckan.',
    answers: answers,
    correct: 2,
},
    {question: 'Eva rider. Hon rider två gånger _______ veckan på en ridskola.',
    answers: answers,
    correct: 2,
},
    {question: 'Några gånger _______ månader rider hon en kompis häst.',
    answers: answers,
    correct: 2,
},
    {question: 'Minst två gånger _______ året åker hon på ridresa till något exotiskt ställe.',
    answers: answers,
    correct: 3,
},
    {question: '_______ vintern åker jag skidor.',
    answers: answers,
    correct: 1,
},
    {question: 'Jag vare jätteduktig _______ styrketräning.',
    answers: answers,
    correct: 1,
},
    {question: 'Om du vill gå ner _______ vikt bör du gå på gympa.',
    answers: answers,
    correct: 2,
},
    {question: 'Man kan försöka skära ner på fettet _______ maten ock röra på sig mer.',
    answers: answers,
    correct: 2,
},
    {question: 'På morgonen är hans barn så långsamma. Han säger: Skynda _______! , men de lyssnar inte.',
    answers: answers,
    correct: 1,
},
    {question: 'Jag tycker inte att gå _______ simhallen.',
    answers: answers,
    correct: 2,
},
    {question: 'Jag har blivit kär _______ min bäst väns flickvän.',
    answers: answers,
    correct: 2,
},
    {question: 'Bry dig inte _______ att han luktar.',
    answers: answers,
    correct: 3,
},
   {question: 'Har du gott _______ pengar?',
    answers: answers,
    correct: 3,
},
    {question: 'Min kompis och jag har känt varandra _______ mer än tjugo år.',
    answers: answers,
    correct: 2,
}];

console.log(tralivali);

var currentQuestionIndex = 0;
$('.expression-number').text(`Номер вопроса: ${currentQuestionIndex + 1} из ${tralivali.length}`);


var correctAnswer = 0; // НЕПРАВИЛЬНАЯ ЛОГИКА ПРИСВОЕНИЯ ЧИСЛА
var result = {
    correct: 0,
    incorrect: 0
}

// текущая_книга = 0
// книги = [1,2,3]

// фукнция ЧИТАТЬ_КНИГУ {
//   если книга последная
//     обнули счётчик
//   иначе
//     читать книги[текущая_книга]
// }


function showQuestion() {

    if (currentQuestionIndex === tralivali.length) {
        currentQuestionIndex = 0;
        // alert("Правильных ответов " + correctAnswer + "Неправильных ответов " + (tralivali.length - correctAnswer));

    }

    var questionToShow = selectQuestion();
    addQuestionToSite(questionToShow);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

        // поменять элементы местами
        // мы используем для этого синтаксис "деструктурирующее присваивание"
        // подробнее о нём - в следующих главах
        // то же самое можно записать как:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var tralivaliShuffled = shuffle(tralivali);


function selectQuestion() {
    return tralivali[currentQuestionIndex];
    // return tralivaliShuffled[currentQuestionIndex];
}

function addQuestionToSite(question) {
    $('.question').html(question.question);

    // question.answers.forEach(function (answer, index) {
    //     $('.answers').append("<button onClick='nextQuestion(" + question.correct + ", " + index + ")'>" + answer + "</button> &nbsp;")
    // })

}

function checkVisibility() {
    $('.checking').each(function () {
        if ($(this).css("display", "block")) {
            $(this).css("display", "none");
        }
    });
}


function nextQuestion(correct, index) {
    checkVisibility();

    var y = tralivali[currentQuestionIndex].question.split('_______');
    y.splice(1, 0, answers[index].toUpperCase());
    $('.question').html(y);

    if (correct == index) {
        $('.checking-correct').slideDown();
        correctAnswer++; //
        if ($('button.nextButton').prop('disabled', true)) {
            $('button.nextButton').prop('disabled', false);
        }

        // clearAnswersHTML();
        // currentQuestionIndex++;
        // showQuestion();
    } else {
        // alert("Incorrect((((((((((( Try again");
        $('.checking-incorrect').slideDown();
        // $('button').prop('disabled', true);
        if ($('button.nextButton').prop('disabled', false)) {
            $('button.nextButton').prop('disabled', true);
        }
    }
}

function nextButtonClickHandler() {
    clearAnswersHTML();
    currentQuestionIndex++;
    $('.expression-number').text(`Номер вопроса: ${currentQuestionIndex + 1} из ${tralivali.length}`);
    checkVisibility();
    showQuestion();
    // console.log(currentQuestionIndex);
}

function clearAnswersHTML() {
    $('.answers').html("")
}

$('.nextButton').on('click', function (event) {
    nextButtonClickHandler();
})

showQuestion();
});