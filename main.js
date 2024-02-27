// console.log(jeopardyQuestions.length)
let count = 0
let rightAnswer = ""
const clickables = $(".tiles")
const questions = $("#question")
clickables.on("click",(event)=>{
    console.log(event.target.innerHTML)
    if(count === 0){
        let reward = event.target.innerHTML
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
        console.log(targetQuestions)
        let newQuestion = $(`<p>${targetQuestions[randomize-1].question}</p>`)
        rightAnswer =`${targetQuestions[randomize-1].answer}`
        console.log(rightAnswer)

        //selects one of the multiple questions within range and also the right answer for the question
        console.log(newQuestion)
        questions.append(newQuestion)
        //adds the question to the browser
    }
    count++
})

// $("button").on("click",()=>{
//     count= 0
    
// })