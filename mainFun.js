var imageFromPath = function (path) {
    var image = new Image()
    image.src = path
    return image
}

//随机产生位置
var randomPosition = function () {
    xPosition = Math.random() * 1000
    xPosition = Math.floor(xPosition)
    return xPosition
}

var Paddle = function () {
    var image = imageFromPath('paddle.png')
    var o = {
        image: image,
        x: randomPosition(),
        y: 850,
        speed: 5,
    }
    o.moveLeft = function () {
        o.x -= o.speed
    }
    o.moveRight = function () {
        o.x += o.speed
    }
    o.moveUp = function () {
        o.y -= o.speed
    }
    o.moveDown = function () {
        o.y += o.speed
    }
    return o
}

var Guagame = function () {
    var g = {}
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context
    setInterval(function () {
        //update
        g.update()
        //clear
        context.clearRect(0,0,canvas.width,canvas.height)
        //draw
        g.draw()
    }, 1000 / 60)
    return g
}

var _main = function () {
    var paddle = Paddle()
    var game = Guagame()
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

    game.update = function () {
        if (leftPressed) {
            paddle.moveLeft()
        } else if (rightPressed) {
            paddle.moveRight()
        } else if (upPressed) {
            paddle.moveUp()
        } else if (downPressed) {
            paddle.moveDown()
        }
    }
    game.draw = function () {
        game.context.drawImage(paddle.image, paddle.x, paddle.y)
    }
}

_main()