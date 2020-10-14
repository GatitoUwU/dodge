let points = 0;
let player = game.createSprite(2, 4);
let enemy = game.createSprite(randint(0, 4), 0);
let isRunning = true;
enemy.turnRight(90)

basic.forever(function () {
    pause(500)
    console.log("Points are: " +points+", player location= X:"+ player.get(LedSpriteProperty.X)+ " and Y: "+player.get(LedSpriteProperty.Y)+ ", enemy location= X:"+ enemy.get(LedSpriteProperty.X)+ " and Y: "+enemy.get(LedSpriteProperty.Y));
})

basic.forever(function () {
    pause((points > 5) ? (points > 10) ? (points > 15) ? 100 : 250 : 350 : 500)
    if (isRunning) {
        enemy.move(1)
        if (enemy.get(LedSpriteProperty.Y) == 4) {
            if (enemy.isTouching(player)) {
                console.log("The player has touched the enemy, that means that the game is over :(")
                enemy.delete();
                player.delete();
                isRunning = false;
            } else {
                console.log("The player has dodged the enemy, nice, he'll get a point.")
                points++;
                enemy.delete();
                enemy = game.createSprite(randint(0, 4), 0);
                enemy.turnRight(90)
                console.log("Updating points of player to "+points)
            }
        }
    } else {
       basic.showNumber(points);
    }
})

input.onButtonPressed(Button.A, function () {
    tryReset();
    if (player.get(LedSpriteProperty.X) == 0) {
        player.set(LedSpriteProperty.X, 4);
    } else {
        player.move(-1);
    }
})

input.onButtonPressed(Button.B, function () {
    tryReset();
    if (player.get(LedSpriteProperty.X) == 4) {
        player.set(LedSpriteProperty.X, 0);
    } else {
        player.move(1);
    }
})

function tryReset () {
    if (!isRunning) {
        reset();
    }
}

function reset() {
    points = 0;
    player = game.createSprite(2, 4);
    enemy = game.createSprite(randint(0, 4), 0);
    enemy.turnRight(90)
    isRunning = true;
}
