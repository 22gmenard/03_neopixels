input.onButtonPressed(Button.A, function () {
    ring.setBrightness(75)
})
input.onButtonPressed(Button.AB, function () {
    ring.setBrightness(0)
})
input.onButtonPressed(Button.B, function () {
    ring.setBrightness(255)
})
let ring: neopixel.Strip = null
ring = neopixel.create(DigitalPin.P2, 12, NeoPixelMode.RGB)
ring.setBrightness(225)
basic.forever(function () {
    for (let index = 0; index <= 12; index++) {
        ring.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        ring.show()
    }
})
