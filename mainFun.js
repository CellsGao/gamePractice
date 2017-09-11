var imageFromPath=function(path){
    var image = new Image()
    image.src = path
    return image
}

var Paddle=function(){
    var image=imageFromPath('paddle.png')
    var o={
        image:image,
        x:randomPosition(),
        y:850,
        speed:5,
    }
    return o
}

//随机产生位置
var randomPosition = function () {
    xPosition=Math.random()*1000
    xPosition=Math.floor(xPosition) 
    return xPosition
 }





var _main=function(){
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    var paddle=Paddle()
    
    context.drawImage(paddle.image, paddle.x, paddle.y)
    
    var leftPressed = false
    var rightPressed = false
    var upPressed = false
    var downPressed = false
    //events
    window.addEventListener('keydown', function (event) {
        var key = event.key
        var log = console.log.bind(event)
        log(key)
        if (key == 'a') {
            leftPressed = true
        } else if (key == 'd') {
            rightPressed = true
        } else if (key == 'w') {
            upPressed = true
        } else if (key == 's') {
            downPressed = true
        }
    })
    window.addEventListener('keyup', function (event) {
        var key = event.key
        if (key == 'a') {
            leftPressed = false
        } else if (key == 'd') {
            rightPressed = false
        } else if (key == 'w') {
            upPressed = false
        } else if (key == 's') {
            downPressed = false
        }
    })

    setInterval(function () {
        if (leftPressed) {
            paddle.x -= paddle.speed
        } else if (rightPressed) {
            paddle.x += paddle.speed
        } else if (upPressed) {
            paddle.y -= paddle.speed
        } else if (downPressed) {
            paddle.y += paddle.speed
        }
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.drawImage(paddle.image, paddle.x, paddle.y)

    }, 1000 / 60)


}

_main()