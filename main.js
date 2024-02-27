// // console.log(jeopardyQuestions.length)
// let count = 0
// let rightAnswer = ""
// let score = 0
// let reward = 0
// const clickables = $(".tiles")
// const questions = $("#question")
// const yourScore = $('#dollarAmount')
// const categories = $(".newCat")
// let randomShow = jeopardyQuestions[Math.ceil(Math.random()*jeopardyQuestions.length)].showNumber
// //finds a random shownumber
// let randomShowGroup = jeopardyQuestions.filter((obj) => obj.showNumber === randomShow)
// //this is an array that contains the show
// //loops through the show and seperates it by categories


// clickables.on("click",(event)=>{
//     console.log(event.target.innerHTML)
//     if(count === 0){
//         reward = event.target.innerHTML
//         //price range
//         let targetQuestions = []
//         //an array of questions that has the price range of the event clicked
//         for(let obj of randomShowGroup){
//             if(obj.value === reward){
//                 targetQuestions.push(obj)
//             }
//         }
//         //pools specific questions for the generator to give
//         let randomize = Math.floor(Math.random()*targetQuestions.length)
//         let newQuestion = targetQuestions[randomize-1].question
//         rightAnswer =`${targetQuestions[randomize-1].answer}`
//         //selects one of the multiple questions within range and also the right answer for the question
//         console.log(newQuestion)
//         questions.text(newQuestion)
//         console.log(rightAnswer)
//         //adds the question to the browser
//         targetQuestions.length = 0
//         //resets the questions
//         event.target.innerHTML = ""
//         event.target.style.pointerEvents = "none"
//     }
//     count++
// })

// $("button").on("click",()=>{
//     if(count>0){
//         if($("input").val() === rightAnswer){
//             questions.text("Correct!!")
//             score += parseInt(reward.split("$")[1])
//             yourScore.text(`YOUR SCORE:$${score}`)
//         } else {
//             questions.text("InCorrect!!")
//             score -= parseInt(reward.split("$")[1])
//             yourScore.text(`YOUR SCORE:$${score}`)
//         }
//     }
//     count = 0
// })




//next thing to do is to generate random categories for each of the 100 - 500
//og copy
let count = 0
let rightAnswer = ""
let score = 0
let reward = 0
const clickables = $(".tiles")
const questions = $("#question")
const yourScore = $('#dollarAmount')

clickables.on("click",(event)=>{
    console.log(event.target.innerHTML)
    if(count === 0){
        reward = event.target.innerHTML
        //price range
        let targetQuestions = []
        //an array of questions that has the price range of the event clicked
        for(let obj of jeopardyQuestions){
            if(obj.value === reward){
                targetQuestions.push(obj)
            }
        }
        //pools specific questions for the generator to give
        let randomize = Math.floor(Math.random()*targetQuestions.length)
        let newQuestion = targetQuestions[randomize-1].question
        rightAnswer =`${targetQuestions[randomize-1].answer}`
        //selects one of the multiple questions within range and also the right answer for the question
        console.log(newQuestion)
        questions.text(newQuestion)
        console.log(rightAnswer)
        //adds the question to the browser
        targetQuestions.length = 0
        //resets the questions
        event.target.innerHTML = ""
        event.target.style.pointerEvents = "none"
    }
    count++
})

$("button").on("click",()=>{
    if(count>0){
        if($("input").val() === rightAnswer){
            questions.text("Correct!!")
            score += parseInt(reward.split("$")[1])
            yourScore.text(`YOUR SCORE:$${score}`)
        } else {
            questions.text("InCorrect!!")
            score -= parseInt(reward.split("$")[1])
            yourScore.text(`YOUR SCORE:$${score}`)
        }
    }
    count = 0
})