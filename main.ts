let points = 0;
let spr = game.createSprite(randint(0, 4), 0);
let sprG = game.createSprite(0, 4);
basic.forever(function () {
    spr.turnRight(90)
    while (true) {
        basic.pause(1000)
        spr.move(1)
        if (spr.get(LedSpriteProperty.Y) == 4) {
            if (sprG.isTouching(spr)) {
                spr.delete();
                spr = game.createSprite(randint(0, 4), 0);
                spr.turnRight(90)
                points++;
            } else {
                spr.delete();
                sprG.delete();
                basic.showNumber(points)
            }
        }
    }
})

input.onButtonPressed(Button.A, function () {
    sprG.move(-1);
});
input.onButtonPressed(Button.B, function () {
    sprG.move(1);
});
