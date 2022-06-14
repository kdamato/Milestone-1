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
            A. Four Christmases
            B. Just Friends
            C. Why Him?
            D. Holidate`,
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
            A. The Lion King
            B. Toy Story
            C. A Bug's Life
            D. Hercules`,
            category: category5,
            correctAnswer: 'D',
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
            A. Matthew McConaughey
            B. Hugh Jackman
            C. Johnny Depp
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
        correctAnswer: 'C',
        score: 500,
    },
    {
        text: `What film won the best cinematography award in 2010?
        A. Avatar
        B. Shuttered Island
        C. Inception
        D. Clash of the Titans`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `What film won best actor in a leading role in 1995?
        A. Billy Madison
        B. Batman Forever
        C. Forrest Gump
        D. Seven`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `Who won best actor in a leading role in the 2015 film, "The Revenant"?
        A. Leonardo DiCaprio
        B. Tom Hardy
        C. Will Poulter
        D. Domhnall Gleeson`,
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
        text: `What year was "James Bond: You Only Live Twice" released?
        A. 1967
        B. 1965
        C. 1969
        D. 1971`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `What year was "Big Fat Liar," starring Frankie Muniz, released?
        A. 2004
        B. 2005
        C. 2002
        D. 1999`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `What year was Disney's "Moana" released?
        A. 2016
        B. 2014
        C. 2018
        D. 2022`,
        category: category4,
        correctAnswer: 'A',
        score: 200,
    },
    {
        text: `What year was Spider-Man: No Way Home released?
        A. 2017
        B. 2019
        C. 2021
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
        correctAnswer: 'C',
        score: 500,
    },
    {
        text: `Where was the Mummy filmed?
        A. Morocco and the United Kingdom
        B. Egypt and the United States
        C. Australia and the United Kingdom
        D. Morocco and the United States`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `Where were the shots for Star Wars' Tattoine located?
        A. Switzerland
        B. Spain
        C. Tunisia
        D. Guatemala`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `Where was the cave of Dragon-Glass in Game of Thrones shot?
        A. Iceland
        B. Greenland
        C. Germany
        D. Australia`,
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