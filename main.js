status=""
objects=""
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
function gotResults(error,results) {
  if (error) {
    console.log(error)
  }
  console.log(results)
  objects=results
}
function draw() {
  image(video, 0, 0, 380, 380);
  if (status != "") {
    objectDetector.detect(video, gotResults);
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML =
        "Status: Objetos Detectados";

      fill("#FF0000");
      percent = floor(objects[i].confidence * 100);
      text(
        objects[i].label + " " + percent + "%",
        objects[i].x + 15,
        objects[i].y + 15
      );
      noFill();
      stroke("#FF0000");
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

      if (objects[i].label == objectName) {
        video.stop();
        objectDetector.detect(gotResult);
        document.getElementById("objectStatus").innerHTML =
          objectName + " Encontrado";
        synth = window.speechSynthesis;
        utterThis = new SpeechSynthesisUtterance(objectName + " Encontrado");
        synth.speak(utterThis);
      } else {
        document.getElementById("objectStatus").innerHTML =
          objectName + " Não Encontrado";
      }
    }
  }
}
