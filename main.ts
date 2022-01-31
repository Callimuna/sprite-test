let mario = game.createSprite(2, 4)
mario.turn(Direction.Left, 90)
let vogel = game.createSprite(4, 2)
vogel.turn(Direction.Left, 180)
vogel.set(LedSpriteProperty.Blink, 10)
vogel.set(LedSpriteProperty.Brightness, 150)
basic.forever(function () {
    basic.setLedColor(0x00ff00)
    vogel.ifOnEdgeBounce()
    vogel.move(1)
    mario.ifOnEdgeBounce()
    mario.move(1)
    if (mario.isTouching(vogel)) {
        basic.setLedColor(0xff0000)
    }
    basic.pause(500)
})
