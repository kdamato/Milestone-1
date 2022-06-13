const category1 = 'category1'
const category2= 'category2'
const category3 = 'category3'
const category4 = 'category4'
const category5 = 'category5'

var userScore = 0;

function displayScore(){
    document.getElementById('score').innerHTML = 'Score:' + ' ' + userScore
}

function checkAnswer(userAnswer, correctAnswer){
    if(userAnswer === correctAnswer){
        alert('Well Done. Correct answer')
        userScore = userScore + 100
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
        },
        {
            text: `Who voiced Stuart Little in the 1999 family-film "Stuart Little?
            A. Michael J. Fox
            B. Mark Hamill
            C. Robin Williams
            D. Jim Carrey`,
            category: category2,
            correctAnswer: 'A',
        },
        {
            text: `What movie won the 2003 best visual effects Academy Award?
            A. Master and Commander: The Far Side of the World
            B. Pirates of the Caribbean: The Curse of the Black Pearl
            C. The Lord of the Rings: The Return of the King
            D. King Kong`,
            category: category3,
            correctAnswer: 'C',
        },
        {
            text: `What year was Terminator 2: Judgement Day released?
            A. 1991
            B. 1993
            C. 1995
            D. 1997`,
            category: category4,
            correctAnswer: 'A',
        },
        {
            text: `Where was The Forest Moon of Endor shot?
            A. Australia
            B. Africa
            C. California
            D. Florida`,
            category: category5,
            correctAnswer: 'C',
        }
    ],
    level400: [
        {
            text: `what dog barks?
            A. dog
            B. cat
            C. bird
            D. fish`, 
            category: category1,
            correctAnswer: 'A',
        },
        {
            text: `what is the color of the sky?
            A. blue
            B. red
            C. green
            D. yellow`,
            category: category2,
            correctAnswer: 'A',
        },
        {
            text: `what childrens game involves two safe spots?
            A. ring around the rosie
            B. tag
            C. running bases
            D. hide and seek`,
            category: category3,
            correctAnswer: 'C',
        },
        {
            text: `what is the color of the sky?
            A. blue
            B. red
            C. green
            D. yellow`,
            category: category4,
            correctAnswer: 'A',
        },
        {
            text: `what childrens game involves two safe spots?
            A. ring around the rosie
            B. tag
            C. running bases
            D. hide and seek`,
            category: category5,
            correctAnswer: 'C',
        }
    ],
    level300: [  {
        text: `what dog barks?
        A. dog
        B. cat
        C. bird
        D. fish`, 
        category: category1,
        correctAnswer: 'A',
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category2,
        correctAnswer: 'A',
    },
    {
        text: `what childrens game involves two safe spots?
        A. ring around the rosie
        B. tag
        C. running bases
        D. hide and seek`,
        category: category3,
        correctAnswer: 'C',
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category4,
        correctAnswer: 'A',
    },
    {
        text: `what childrens game involves two safe spots?
        A. ring around the rosie
        B. tag
        C. running bases
        D. hide and seek`,
        category: category5,
        correctAnswer: 'C',
    }],
    level200: [  {
        text: `what dog barks?
        A. dog
        B. cat
        C. bird
        D. fish`, 
        category: category1,
        correctAnswer: 'A',
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category2,
        correctAnswer: 'A',
    },
    {
        text: `what childrens game involves two safe spots?
        A. ring around the rosie
        B. tag
        C. running bases
        D. hide and seek`,
        category: category3,
        correctAnswer: 'C',
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category4,
        correctAnswer: 'A',
    },
    {
        text: `what childrens game involves two safe spots?
        A. ring around the rosie
        B. tag
        C. running bases
        D. hide and seek`,
        category: category5,
        correctAnswer: 'C',
    }],
    level100: [  {
        text: `What does HTML stand for?
        A. Hyper Text Markup Language
        B. Hyperlinks and Text Markup Language
        C. Home Tool Markup Language`, 
        category: category1,
        correctAnswer: 'A',
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category2,
        correctAnswer: 'A',
    },
    {
        text: `what childrens game involves two safe spots?
        A. ring around the rosie
        B. tag
        C. running bases
        D. hide and seek`,
        category: category3,
        correctAnswer: 'C',
    },
    {
        text: `what is the color of the sky?
        A. blue
        B. red
        C. green
        D. yellow`,
        category: category4,
        correctAnswer: 'A',
    },
    {
        text: `what childrens game involves two safe spots?
        A. ring around the rosie
        B. tag
        C. running bases
        D. hide and seek`,
        category: category5,
        correctAnswer: 'C',
    }],
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
                    checkAnswer(userAnswer, question.correctAnswer)
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
                    checkAnswer(userAnswer, question.correctAnswer)
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
                    checkAnswer(userAnswer, question.correctAnswer)
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
                    checkAnswer(userAnswer, question.correctAnswer)
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
                    checkAnswer(userAnswer, question.correctAnswer)
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