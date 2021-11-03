input.onButtonPressed(Button.A, function () {
    Go()
    pins.digitalWritePin(DigitalPin.P14, 1)
})
function Moteur () {
    pins.analogWritePin(AnalogPin.P2, Vitesse)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
function Go () {
    basic.showNumber(5)
    basic.pause(500)
    basic.showNumber(4)
    basic.pause(500)
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(1)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Vitesse = 200
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 4)
        basic.pause(2000)
    }
    Vitesse = 400
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 3)
        basic.pause(2000)
    }
    Vitesse = 600
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        basic.pause(2000)
    }
    Vitesse = 800
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 1)
        basic.pause(2000)
    }
    Vitesse = 1000
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(2000)
    }
    Vitesse = 0
    Moteur()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
let Vitesse = 0
basic.showIcon(IconNames.No)
pins.digitalWritePin(DigitalPin.P14, 1)
