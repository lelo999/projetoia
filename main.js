status=""

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(480,380)
    video.hide();
  }
  function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status: Detectando Objetos";
  ObjectName=document.getElementById("objectName").value
}
function modelLoaded() {
    console.log("Modelo Carregado!")
    status = true;
}