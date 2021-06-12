input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
	
})
