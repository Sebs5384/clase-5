const $buttonCalculate = document.querySelector("#button-calculate")
$buttonCalculate.onclick = function(){

    let videoTime = document.querySelector(".time")
    let totalTime = 0
    for (let i = 0; i <videoTime.length; i += 3){
      let hours = parseInt(videoTime[i].value || 0)
      let minutes = parseInt(videoTime[i + 1].value || 0)
      let seconds = parseInt(videoTime[i + 2].value || 0)
      totalTime += (hours * 3600) + (minutes * 60) + seconds
    }
    let totalHours = Math.floor(totalTime / 3600);
    let totalMinutes = Math.floor((totalTime % 3600) / 60)
    let totalSeconds = totalTime % 60

    document.querySelector("#total-duration").textContent = `${totalHours} hours ${totalMinutes} minutes and ${totalSeconds} seconds`
}




