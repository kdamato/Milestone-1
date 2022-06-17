const category1 = 'category1'
const category2= 'category2'
const category3 = 'category3'
const category4 = 'category4'
const category5 = 'category5'

var userScore = 0;

const levels = ['500', '400', '300', '200', '100']

const questions = {
    //plot//
    level500: [
        {
        text: `This supernatural thriller depicts a baby-sitter hired to take care of an 8-year old boy to find that it is just a life size doll. Or is it?...
        A. Puppet Master
        B. Chucky
        C. The Boy
        D. Annabelle`, 
        category: category1,
        correctAnswer: 'C',
        score: 500,
        },
        {
            text: `This 2019 horror-thriller is a late sequel to Stephen King's 1980, "The Shining"
            A. Doctor Sleep
            B. It
            C. The Stand
            D. Pet Sematary`,
            category: category2,
            correctAnswer: 'A',
            score: 400,
        },
        {
            text: `This 2007 horror-thriller stars Thomas Jane with his young son after a powerful storm hits their home in Maine. This movies well known for its shocking twist-ending.
            A. Twister
            B. The Mist
            C. Cloverfield
            D. Crawl`,
            category: category3,
            correctAnswer: 'B',
            score: 300,
        },
        {
            text: `This action-horror film shows a former U-N investigator portrayed by Brad Pitt as he tries to find a cure for a lethal virus.
            A. World War Z
            B. Resident Evil
            C. ZombieLand
            D. Dawn of The Dead`,
            category: category4,
            correctAnswer: 'A',
            score: 200,
        },
        {
            text: `Dont say his name three times in the mirror! This supernatural, hook handed killer will unleash a terrifying wave of violence in the 1992 film "_______"
            A. Sleepwalkers
            B. The Ring
            C. The Grudge
            D. Candyman`,
            category: category5,
            correctAnswer: 'D',
            score: 100,
        }
    ],
    //actors//
    level400: [
        {
            text: `Which actress has played in both "The Grudge" and in "Insidious"?
            A. Lin Shaye
            B. Andrea Riseborough
            C. Zoe Fish
            D. Tara Westwood`,
            category: category1,
            correctAnswer: 'A',
            score: 500,
        },
        {
            text: `Who played Lt Ripley in the 1986 film, "Aliens"?
            A. Colette Hiller
            B. Jenette Goldstein
            C. Carrie Henn
            D. Sigourney Weaver`,
            category: category2,
            correctAnswer: 'D',
            score: 400,
        },
        {
            text: `Who plays the main protagonist in the 1978 "Halloween" Film?
            A. Donald Pleasence
            B. Nancy Kyes
            C. Jamie Lee Curtis
            D. Tony Moran`,
            category: category3,
            correctAnswer: 'C',
            score: 300,
        },
        {
            text: `Which plays Jason in the "Friday the 13th" franchise?
            A. Rob Englund
            B. Arie Lehman
            C. Derek Mears
            D. Walt Gorney`,
            category: category4,
            correctAnswer: 'B',
            score: 200,
        },
        {
            text: `The 1984 "Nightmare on Elm Street" was who's first acting debut?
            A. Robert Englund
            B. Heather Langenkamp
            C. Johnny Depp
            D. Amanda Wyss`,
            category: category5,
            correctAnswer: 'C',
            score: 100,
        }
    ],
    //awards//
    level300: [  {
        text: `This record breaking psychological horror was the first to ever win Best Picture in 1991.
            A. Silent Hill
            B. Silence of the Lambs
            C. The grudge
            D. The Ring`,
        category: category1,
        correctAnswer: 'B',
        score: 500,
    },
    {
        text: `This M. Night Shyamalan horror starring Haley Joel Osment earned 6 oscar nominations?
        A. The Sixth Sense
        B. The Shining
        C. Split
        D. Devil`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `What horror film won best screen-play in 2017?
        A. It
        B. In the Deep
        C. Get Out
        D. Happy Death Day`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `This Steven Spielberg movie won Best Sound, Best Film Editing and Best Music: Original Dramatic Score in 1976.
        A. The Twilight Zone
        B. Jaws
        C. Duel
        D. Jurrasic Park`,
        category: category4,
        correctAnswer: 'B',
        score: 200,
    },
    {
        text: `What 1973 horror film was nominated for 10 awards?
        A. The Wicker Man
        B. The Crazies
        C. The Exorcist
        D. The Hanging Woman`,
        category: category5,
        correctAnswer: 'C',
        score: 100,
    }],
    //years//
    level200: [  {
        text: `What year was the exorcist released?
        A. 1973
        B. 1981
        C. 1989
        D. 1979`, 
        category: category1,
        correctAnswer: 'A',
        score: 500,
    },
    {
        text: `What year was "Us" released?
        A. 2019
        B. 2020
        C. 2018
        D. 2017`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `What year was "Insidious" released?
        A. 2008
        B. 2005
        C. 2010
        D. 2015`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `What year was "Unborn" released?
        A. 2007
        B. 2014
        C. 2009
        D. 2005`,
        category: category4,
        correctAnswer: 'C',
        score: 200,
    },
    {
        text: `What year was "Children of the Corn" released?
        A. 2010
        B. 1999
        C. 2005
        D. 1984`,
        category: category5,
        correctAnswer: 'D',
        score: 100,
    }],
    //location//
    level100: [  {
        text: `Where was "The Overlook Hotel" filmed?
        A. Russia
        B. Colorado
        C. California
        D. Maine`, 
        category: category1,
        correctAnswer: 'B',
        score: 500,
    },
    {
        text: `Where was the scene in the 2001 horror "Hannibal" in which Hannibal Lecter pretends to be Doctor Fell before his most gruesome kill shot?
        A. Florence
        B. France
        C. Rome
        D. England`,
        category: category2,
        correctAnswer: 'A',
        score: 400,
    },
    {
        text: `Where are the cemetary scenes from the 1968 "Night of the Living Dead" filmed?
        A. New Jersey
        B. New York
        C. Pennsylvania
        D. Virginia`,
        category: category3,
        correctAnswer: 'C',
        score: 300,
    },
    {
        text: `Where is the Crystal Lake Diner, used for scenes in the 1980 film "Friday the 13th" located?
        A. New Jersey
        B. Maine
        C. California
        D. Texas`,
        category: category4,
        correctAnswer: 'A',
        score: 200,
    },
    {
        text: `Where were the shots in the library of the movie "It" located?
        A. United States
        B. Europe
        C. Canada
        D. Mexico`,
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