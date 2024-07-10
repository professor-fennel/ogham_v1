input.onButtonPressed(Button.A, function () {
    if (current_ogham > 0) {
        current_ogham += -1
        glyphs[current_ogham].showImage(0)
        music.play(music.tonePlayable(tones[current_ogham], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.tonePlayable(40, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    if (current_ogham < 19) {
        current_ogham += 1
        glyphs[current_ogham].showImage(0)
        music.play(music.tonePlayable(tones[current_ogham], music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.tonePlayable(40, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
})
let glyphs: Image[] = []
let tones: number[] = []
let current_ogham = 0
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # .
    `)
current_ogham = 0
let numbers = [
1,
2,
3,
4,
5,
6,
7,
8,
9,
10,
11,
12,
13,
14,
15,
16,
17,
18,
19,
20
]
let letters = [
"B",
"L",
"N",
"F",
"S",
"H",
"D",
"T",
"K",
"Qw",
"M",
"G",
"Ng",
"St",
"R",
"A",
"O",
"U",
"E",
"I"
]
tones = [
98,
110,
123.47,
146.83,
164.81,
98 * 2,
110 * 2,
123.47 * 2,
146.83 * 2,
164.81 * 2,
98 * 4,
110 * 4,
123.47 * 4,
146.83 * 4,
164.81 * 4,
98 * 8,
110 * 8,
123.47 * 8,
146.83 * 8,
164.81 * 8
]
glyphs = [
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # # .
    . . # # .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # # .
    . . # # .
    . . # # .
    `),
images.createImage(`
    . . # . .
    . . # # .
    . . # # .
    . . # # .
    . . # # .
    `),
images.createImage(`
    . . # # .
    . . # # .
    . . # # .
    . . # # .
    . . # # .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . # # . .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    . # # . .
    `),
images.createImage(`
    . . # . .
    . # # . .
    . # # . .
    . # # . .
    . # # . .
    `),
images.createImage(`
    . # # . .
    . # # . .
    . # # . .
    . # # . .
    . # # . .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    # # # # #
    `),
images.createImage(`
    . . # . .
    . . # . .
    # # # # #
    # # # # #
    # # # # #
    `),
images.createImage(`
    . . # . .
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `),
images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    . # # # .
    `),
images.createImage(`
    . . # . .
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    `),
images.createImage(`
    . . # . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `),
images.createImage(`
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
]
basic.forever(function () {
	
})
