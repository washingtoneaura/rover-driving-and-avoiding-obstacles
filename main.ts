input.onButtonPressed(Button.A, function () {
    isMoving = 1
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    100,
    0
    )
    hummingbird.setRotationServo(FourPort.One, 50)
    hummingbird.setRotationServo(FourPort.Two, -50)
})
input.onButtonPressed(Button.B, function () {
    isMoving = 0
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    0,
    100
    )
    hummingbird.setRotationServo(FourPort.One, 0)
    hummingbird.setRotationServo(FourPort.Two, 0)
})
let isMoving = 0
hummingbird.startHummingbird()
basic.forever(function () {
    if (isMoving == 1) {
        if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) < 15) {
            hummingbird.setTriLED(
            TwoPort.One,
            100,
            0,
            0
            )
            hummingbird.setRotationServo(FourPort.One, -50)
            hummingbird.setRotationServo(FourPort.Two, 50)
            basic.pause(1000)
            hummingbird.setRotationServo(FourPort.One, 0)
            hummingbird.setRotationServo(FourPort.Two, 0)
            isMoving = 0
        }
    } else {
        if (hummingbird.getSensor(SensorType.Distance, ThreePort.One) >= 15) {
            hummingbird.setTriLED(
            TwoPort.One,
            0,
            100,
            0
            )
            hummingbird.setRotationServo(FourPort.One, 50)
            hummingbird.setRotationServo(FourPort.Two, -50)
            isMoving = 1
        } else {
            hummingbird.setRotationServo(FourPort.One, 0)
            hummingbird.setRotationServo(FourPort.Two, 0)
        }
    }
})
