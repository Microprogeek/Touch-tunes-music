input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.OnceInBackground)
})
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.OnceInBackground)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.OnceInBackground)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.OnceInBackground)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.EigthNote)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.OnceInBackground)
})
