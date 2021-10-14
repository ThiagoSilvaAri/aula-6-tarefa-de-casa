let Contador = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Contador == 1) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    } else if (Contador == 2) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
    } else if (Contador == 3) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
    } else if (Contador == 4) {
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.A, function () {
    if (Contador >= 0) {
        Contador = Contador - 1
        basic.showNumber(Contador)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Contador >= 0) {
        Contador = Contador + 1
        basic.showNumber(Contador)
    }
})
