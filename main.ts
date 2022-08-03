let mySprite: Sprite = null
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.buzzer.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.buzzer.play()
})
forever(function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 9 . . . . 
        . . . . . . . . . . 9 9 . . . . 
        . . . . . . . . . 9 9 . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 . 9 . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite)
})
