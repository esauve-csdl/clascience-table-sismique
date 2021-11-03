function Stage4 () {
    Vitesse = 800
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 1)
        basic.pause(2000)
    }
}
function Stage3 () {
    Vitesse = 600
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        basic.pause(2000)
    }
}
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    Go = 1
})
function Moteur () {
    pins.analogWritePin(AnalogPin.P2, Vitesse)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function Stage2 () {
    Vitesse = 400
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 3)
        basic.pause(2000)
    }
}
function Stage5 () {
    Vitesse = 1000
    Moteur()
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(2000)
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    Go = 0
    pins.digitalWritePin(DigitalPin.P14, 0)
})
function Stage1 () {
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
}
let Vitesse = 0
let Go = 0
basic.showString("Tremblement")
pins.digitalWritePin(DigitalPin.P14, 1)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
Go = 0
basic.forever(function () {
    if (Go == 1) {
        Stage1()
    }
    if (Go == 1) {
        Stage2()
    }
    if (Go == 1) {
        Stage3()
    }
    if (Go == 1) {
        Stage4()
    }
    if (Go == 1) {
        Stage5()
    }
    Vitesse = 0
    Go = 0
    pins.digitalWritePin(DigitalPin.P14, 0)
    Moteur()
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
