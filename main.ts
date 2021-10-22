function _3番目 (flg: boolean) {
    if (flg == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        i = 0
        for (let index = 0; index < 5; index++) {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
            i += 1
        }
    } else {
        strip.rotate(506)
        strip.show()
    }
}
function _2番目 (flg: boolean) {
    if (flg == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        i = 0
        for (let index = 0; index < 5; index++) {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Blue))
            i += 1
        }
        strip.show()
    } else {
        strip.rotate(5)
        strip.show()
    }
}
function _4番目 (flg: boolean) {
    if (flg == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(0, neopixel.rgb(0, 50, 203))
        strip.setPixelColor(1, neopixel.rgb(0, 152, 203))
        strip.setPixelColor(2, neopixel.rgb(0, 203, 152))
        strip.setPixelColor(3, neopixel.rgb(0, 203, 50))
        strip.setPixelColor(4, neopixel.rgb(203, 203, 0))
    } else {
        strip.rotate(706)
        strip.show()
    }
}
input.onButtonPressed(Button.A, function () {
    変更時()
})
function _1番目 (flg: boolean) {
    if (flg == true) {
        strip.showRainbow(1, 360)
    } else {
        strip.rotate(13)
        strip.show()
    }
}
function 変更時 () {
    モード += 1
    if (モード == 1) {
        _1番目(true)
    } else if (モード == 2) {
        _2番目(true)
    } else if (モード == 3) {
        _3番目(true)
    } else if (モード == 4) {
        _4番目(true)
    } else {
        モード = 0
        変更時()
    }
}
input.onSound(DetectedSound.Loud, function () {
    変更時()
})
function ぐるぐる () {
    if (モード == 1) {
        _1番目(false)
    } else if (モード == 2) {
        _2番目(false)
    } else if (モード == 3) {
        _3番目(false)
    } else if (モード == 4) {
        _4番目(false)
    } else {
    	
    }
}
let i = 0
let モード = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 144, NeoPixelMode.RGB)
モード = 0
変更時()
basic.forever(function () {
    ぐるぐる()
})
