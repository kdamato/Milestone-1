const category1 = 'category1'
const category2= 'category2'
const category3 = 'category3'
const category4 = 'category4'
const category5 = 'category5'

var userScore = 0;

const levels = ['500', '400', '300', '200', '100']

const questions = {
    level500: [
        {
        text: `This movie depicts a jewish father hiding the horrors of the holocaust from his son by turning their time at concentration camps into a game.
        A. Life is Beautiful
        B. Schindler's list
        C. The Pianist
        D. The Boy in the Striped Pajamas`, 
        category: category1,
        correctAnswer: 'A',
        score: 500,
        },
        {
            text: `This movie is about a man who learns the men in his family can travel beginning on their 21st birthday.
            A. About time
            B. In time
            C. The Adam Project
            D. The Tomorrow War`,
            category: category2,
            correctAnswer: 'A',
            score: 400,
        },
        {
            text: `A christmas rom-com about a father meeting his rich, future son-in-law for the first time. Little does the father know, his daughters fiancee is his biggest nightmare and he does not approve.
            A. Why Him?
            B. Just Friends
            C. Four Christmases
            D. Holidate`,
            correctAnswer: 'A',
            category: category3,
            correctAnswer: 'C',
            score: 300,
        },
        {
            text: `Not your typical superhero movie of a red suited vigilante?
            A. Deadpool
            B. Green Lantern
            C. Thor
            D. Spider-Man`,
            category: category4,
            correctAnswer: 'A',
            score: 200,
        },
        {
            text: `What childrens movie stars the greek demi-god, the son of Zeus?
            A. Hercules
            B. Toy Story
            C. A Bug's Life
            D. The Lion King`,
            category: category5,
            correctAnswer: 'C',
            score: 100,
        }
    ],
    level400: [
        {
            text: `Who voiced Stuart Little in the 1999 family-film "Stuart Little?
            A. Michael J. Fox
            B. Mark Hamill
            C. Robin Williams
            D. Jim Carrey`,
            category: category1,
            correctAnswer: 'A',
            score: 500,
        },
        {
            text: `Who played Mrs. Doubtfire in the movie "Mrs. Doubtfire"?
            A. Robin Williams
            B. Martin Lawrence
            C. Will Ferrell
            D. Eddie Murphy`,
            category: category2,
            correctAnswer: 'A',
            score: 400,
        },
        {
            text: `Who plays Rasputia in Norbit?
            A. Robin Williams
            B. Martin Lawrence
            C. Eddie Murphy
            D. Will Ferrell`,
            category: category3,
            correctAnswer: 'C',
            score: 300,
        },
        {
            text: `Which voices Darth Vader?
            A. James Earl Jones
            B. Hayden Christensen
            C. David Prowse
            D. Spencer Wilding`,
            category: category4,
            correctAnswer: 'A',
            score: 200,
        },
        {
            text: `Who plays Jack Sparrow in the Pirates of the Carribean franchise?
            A. Johnny Depp
            B. Hugh Jackman
            C. Matthew McConaughey
            D. Jim Carrey`,
            category: category5,
            correctAnswer: 'C',
            score: 100,
        }
    ],
    level300: [  {
        text: `What movie won the 2003 best visual effects Academy Award?
            A. Master and Commander: The Far Side of the World
            B. Pirates of the Caribbean: The Curse of the Black Pearl
            C. The Lord of the Rings: The Return of the King
            D. King Kong`,
        category: category1,
        correctAnswer: 'A',
        score: 500,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category4,
        correctAnswer: 'A',
        score: 200,
    },
    {
        text: `What movie has the most won and nominated Academy Awards?
        A. Harry Potter and the Sorcerer's Stone
        B. Avatar
        C. Titanic
        D. The Lord of the Rings: The Fellowship of the Ring`,
        category: category5,
        correctAnswer: 'C',
        score: 100,
    }],
    level200: [  {
        text: `What year was Terminator 2: Judgement Day released?
        A. 1991
        B. 1993
        C. 1995
        D. 1997`, 
        category: category1,
        correctAnswer: 'A',
        score: 500,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category4,
        correctAnswer: 'A',
        score: 200,
    },
    {
        text: `What year was Spider-Man: No Way Home released?
        A. 2021
        B. 2019
        C. 2017
        D. 2022`,
        category: category5,
        correctAnswer: 'C',
        score: 100,
    }],
    level100: [  {
        text: `Where was The Forest Moon of Endor shot?
        A. Australia
        B. Africa
        C. California
        D. Florida`, 
        category: category1,
        correctAnswer: 'A',
        score: 500,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category4,
        correctAnswer: 'A',
        score: 200,
    },
    {
        text: `Where was Anchorman: The Legend of Ron Burgundy filmed?
        A. New Jersey
        B. Japan
        C. California
        D. Italy`,
        category: category5,
        correctAnswer: 'C',
        score: 100,
    }],
}

function displayScore(){
    document.getElementById('score').innerHTML = 'Score:' + ' ' + userScore
}

function checkAnswer(userAnswer, correctAnswer, checkScore){
    if(userAnswer === correctAnswer){
        alert('Well Done. Correct answer')
        userScore+= checkScore
        displayScore()
    }
    else{
        alert('Sorry, your answer is incorrect')
    }
}

function getUserAnswerFromQuestion(question) {
    const userAnswer = prompt(question)
    return userAnswer
}

function createBoard() {
    const level500 = questions.level500
    for (let i = 0 ; i < level500.length ; i++){    
        const question = level500[i]    
            let td = document.createElement('td')
            td.addEventListener('click', function(){
                const userAnswer = getUserAnswerFromQuestion(question.text)
                //return to this later to account for null//
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer, question.score)
                }
                console.log(userAnswer)
                td.style.backgroundColor = 'black'
                td.style.color = 'black'
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)     
    }

    const level400 = questions.level400
    for (let i = 0 ; i < level400.length ; i++){    
        const question = level400[i]    
            let td = document.createElement('td')
            td.addEventListener('click', function(){               
                const userAnswer = getUserAnswerFromQuestion(question.text)
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer, question.score)
                }
                console.log(userAnswer)
                td.style.backgroundColor = 'black'
                td.style.color = 'black'
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)      
    }

    const level300 = questions.level300
    for (let i = 0 ; i < level300.length ; i++){    
        const question = level300[i]   
            let td = document.createElement('td')
            td.addEventListener('click', function(){
                const userAnswer = getUserAnswerFromQuestion(question.text)
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer, question.score)
                }
                console.log(userAnswer)
                td.style.backgroundColor = 'black'
                td.style.color = 'black'
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)     
    }

    const level200 = questions.level200
    for (let i = 0 ; i < level200.length ; i++){    
        const question = level200[i]    
            let td = document.createElement('td')
            td.addEventListener('click', function(){
                const userAnswer = getUserAnswerFromQuestion(question.text)
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer, question.score)
                }
                console.log(userAnswer)
                td.style.backgroundColor = 'black'
                td.style.color = 'black'
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)     
    }

    const level100 = questions.level100
    for (let i = 0 ; i < level100.length ; i++){    
        const question = level100[i]    
            let td = document.createElement('td')
            td.addEventListener('click', function(){
                const userAnswer = getUserAnswerFromQuestion(question.text)
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer, question.score)
                }
                console.log(userAnswer)
                td.style.backgroundColor = 'black'
                td.style.color = 'black'
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)    
    }
}

displayScore()

createBoard()