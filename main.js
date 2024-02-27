// console.log(jeopardyQuestions.length)
let count = 0
const clickables = $(".tiles")
const question = $("#question")
clickables.on("click",()=>{
    if(count === 0){
        let randomize = Math.floor(Math.random()*jeopardyQuestions.length)
        console.log(randomize)
        let newElement = $("<p>hello</p>")
        question.append(newElement)
    }
    count++
})