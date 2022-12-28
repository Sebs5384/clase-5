const $infoButton = document.querySelector("#info-show")

$infoButton.onclick = function(){
  const $infoShow = document.querySelectorAll(".info")
  let userInfo = []
  for ( let i = 0; i < $infoShow.length; i++){
  userInfo += $infoShow[i].value + "\n"
  }         
  document.querySelector("#info-textarea").value = userInfo
  document.querySelector("h1").textContent = "I'm glad to see you"
  document.querySelector("h2").textContent = $infoShow[0].value
}
