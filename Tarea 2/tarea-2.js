const $infoButton = document.querySelector("#info-show")

$infoButton.onclick = function(){
  const $infoShow = document.querySelectorAll(".info")
  let arrayPusher = []
  for ( let i = 0; i < $infoShow.length; i++){
  arrayPusher += $infoShow[i].value + "\n"
  }         
  document.querySelector("#info-textarea").value = arrayPusher
  document.querySelector("h1").textContent = "I'm glad to see you"
  document.querySelector("h2").textContent = $infoShow[0].value
}




// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

