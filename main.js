statu=""
video= ""
function preload(params) {
    video=createVideo("video.mp4")
    video.hide()
}
function setup(params) {
    canvas=createCanvas(480,380)
    canvas.center()
}
function draw(params) {
    image(video,0,0,480,380)
}
function start(params) {
    objectDetector("cocossd",modelLoad)
    document.getElementById("status").innerHTML="status: detectando objetos"
}
function modelLoad(params) {
    console.log("modelo carregado")
    status=true
    video.loop()
    video.speed(1)
    video.volume(0)
}