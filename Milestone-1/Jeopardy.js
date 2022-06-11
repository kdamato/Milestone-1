const category1 = 'category1'
const category2= 'category2'
const category3 = 'category3'
const category4 = 'category4'
const category5 = 'category5'

function checkAnswer(userAnswer, correctAnswer){
    if(userAnswer === correctAnswer){
        alert('Well Done. Correct answer')
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
}

function createBoard() {
    // const category1tr = document.getElementById('category1')
    const level500 = questions.level500
    for (let i = 0 ; i < level500.length ; i++){    
        const question = level500[i]    
        // if (question.level === levels[i]){
            let td = document.createElement('td')
            td.addEventListener('click', function(){
                const userAnswer = getUserAnswerFromQuestion(question.text)
                //return to this later to account for null//
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer)
                }
                console.log(userAnswer)
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)
        // }      
    }

    const level400 = questions.level400
    for (let i = 0 ; i < level400.length ; i++){    
        const question = level400[i]    
        // if (question.level === levels[i]){
            let td = document.createElement('td')
            td.addEventListener('click', function(){               
                const userAnswer = getUserAnswerFromQuestion(question.text)
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer)
                }
                console.log(userAnswer)
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)
        // }      
    }

    const level300 = questions.level300
    for (let i = 0 ; i < level300.length ; i++){    
        const question = level300[i]    
        // if (question.level === levels[i]){
            let td = document.createElement('td')
            td.addEventListener('click', function(){
                const userAnswer = getUserAnswerFromQuestion(question.text)
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer)
                }
                console.log(userAnswer)
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)
        // }      
    }

    const level200 = questions.level200
    for (let i = 0 ; i < level200.length ; i++){    
        const question = level200[i]    
        // if (question.level === levels[i]){
            let td = document.createElement('td')
            td.addEventListener('click', function(){
                const userAnswer = getUserAnswerFromQuestion(question.text)
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer)
                }
                console.log(userAnswer)
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)
        // }      
    }

    const level100 = questions.level100
    for (let i = 0 ; i < level100.length ; i++){    
        const question = level100[i]    
        // if (question.level === levels[i]){
            let td = document.createElement('td')
            td.addEventListener('click', function(){
                const userAnswer = getUserAnswerFromQuestion(question.text)
                if (userAnswer !== null){
                    checkAnswer(userAnswer, question.correctAnswer)
                }
                console.log(userAnswer)
            })
            td.innerHTML = levels[i]
            document.getElementById(question.category).appendChild(td)
        // }      
    }
}

createBoard()

// function removeButton(){

// }