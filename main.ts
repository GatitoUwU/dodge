let points = 0;
let spr = game.createSprite(randint(0, 4), 0);
let sprG = game.createSprite(2, 4);
let finished = false;
basic.forever(function () {
    spr.turnRight(90)
    while (true) {
        if (!finished) {
            basic.pause(1000)
            spr.move(1)
            if (spr.get(LedSpriteProperty.Y) == 4) {
                if (!sprG.isTouching(spr)) {
                    notTouching()
                } else {
                    touching();
                }
            }
        } else {
            basic.showNumber(points)
        }
    }
})

input.onButtonPressed(Button.A, function () {
    tryReset()
    sprG.move(-1)
});
input.onButtonPressed(Button.B, function () {
    tryReset()
    sprG.move(1)
});

function tryReset() {
    if (!finished) return;
    finished = false;
    spr = game.createSprite(randint(0, 4), 0)
    sprG = game.createSprite(2, 4)
    spr.turnRight(90)
    points = 0
}

function notTouching () {
    spr.delete()
    spr = game.createSprite(randint(0, 4), 0)
    spr.turnRight(90)
    points++
}

function touching() {
    spr.delete()
    sprG.delete()
    basic.showNumber(points)
    finished = true
}
