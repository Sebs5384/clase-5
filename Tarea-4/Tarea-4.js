let elements = document.querySelectorAll("li")

let min = Infinity
let max = 0
let avg = 0
let mostFrequent = 0
let mostRepeated;

for (let i = 0; i < elements.length; i++){
   
    let number = (parseInt(elements[i].innerText))
    min = Math.min(min, number)
    max = Math.max(max, number)
    avg += number
    let frequency = 0;
    for ( let j = 0; j < elements.length; j++){
        
        if (elements[i].innerText === elements[j].innerText){
            frequency++
        }
        if (frequency > mostFrequent){
            mostFrequent = frequency
            mostRepeated = number
        }
    }
}
let average = avg / elements.length
document.querySelector("#calculate").innerText = `The min value in this <li> is ${min}, the max value is ${max}, the average is ${average.toFixed(1)} and the most frequent is ${mostRepeated}`
