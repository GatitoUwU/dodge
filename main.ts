function tryReset () {
    if (!(finished)) {
        return
    }
    finished = false
    spr = game.createSprite(randint(0, 4), 0)
    sprG = game.createSprite(2, 4)
    spr.turnRight(90)
points = 0
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    tryReset()
    if (sprG.get(LedSpriteProperty.X) == 0) {
        sprG.set(LedSpriteProperty.X, 4)
    } else {
        sprG.move(-1)
    }
})
function notTouching () {
    spr.delete()
    spr = game.createSprite(randint(0, 4), 0)
    spr.turnRight(90)
points += 1
}
input.onButtonPressed(Button.B, function () {
    tryReset()
    if (sprG.get(LedSpriteProperty.X) == 4) {
        sprG.set(LedSpriteProperty.X, 0)
    } else {
        sprG.move(1)
    }
})
function touching () {
    spr.delete()
    sprG.delete()
    basic.showNumber(points)
    finished = true
}
let finished = false
let sprG: game.LedSprite = null
let spr: game.LedSprite = null
let points = 0
spr = game.createSprite(randint(0, 4), 0)
sprG = game.createSprite(2, 4)
basic.forever(function () {
    spr.turnRight(90)
while (true) {
        if (!(finished)) {
            basic.pause((points > 5) ? (points > 10) ? (points > 15) ? 100 : 250 : 500 : 1000)
            spr.move(1)
            if (spr.get(LedSpriteProperty.Y) == 4) {
                if (!(sprG.isTouching(spr))) {
                    notTouching()
                } else {
                    touching()
                }
            }
        } else {
            basic.showNumber(points)
        }
    }
})
