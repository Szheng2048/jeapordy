// console.log(jeopardyQuestions.length)
let count = 0
let rightAnswer = ""
let score = 0
let reward = 0
const clickables = $(".tiles")
const questions = $("#question")
const yourScore = $('p')
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
        let newQuestion = $(`<p>${targetQuestions[randomize-1].question}</p>`)
        rightAnswer =`${targetQuestions[randomize-1].answer}`
        //selects one of the multiple questions within range and also the right answer for the question
        questions.append(newQuestion)
        console.log(rightAnswer)
        //adds the question to the browser
        targetQuestions.length = 0
        //resets the questions
    }
    count++

})

$("button").on("click",()=>{
    if(count>0){
        if($("input").val() === "m"){
            questions.text("Correct!!")
            score += parseInt(reward.split("$")[1])
            console.log(score)
            yourScore.text(`Your Score:$${score}`)
        } else {
            questions.text("InCorrect!!")
            score -= parseInt(reward.split("$")[1])
            yourScore.text(`Your Score:$${score}`)
        }
    }
    count = 0
})