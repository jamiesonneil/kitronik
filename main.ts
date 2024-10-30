input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P8, 0)
    pins.servoWritePin(AnalogPin.P16, 180)
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P12, 0)
    basic.pause(1000)
})
