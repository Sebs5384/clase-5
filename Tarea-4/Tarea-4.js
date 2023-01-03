let liArray = document.querySelectorAll("li")

let min = Infinity
let max = 0
let avg = 0
let mostFrequent = 0
let mostRepeated;

for (let i = 0; i < liArray.length; i++){
   
    let int = (parseInt(liArray[i].innerText))
    min = Math.min(min, int)
    max = Math.max(max, int)
    avg += int
    let frequency = 0;
    for ( let j = 0; j < liArray.length; j++){
        
        if (liArray[i].innerText === liArray[j].innerText){
            frequency++
        }
        if (frequency > mostFrequent){
            mostFrequent = frequency
            mostRepeated = parseInt(liArray[i].innerText)
        }
    }
}
let average = avg / liArray.length
document.querySelector("#calculate").innerText = `The min value in this <li> is ${min}, the max value is ${max}, the average is ${average.toFixed(1)} and the most frequent is ${mostRepeated}`
