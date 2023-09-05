music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.newLine()
    OLED.writeString("distance: ")
    OLED.writeNum(smarthome.ultrasoundSensor(DigitalPin.P1, smarthome.Distance_Unit_List.Distance_Unit_cm))
})
