def on_button_pressed_a():
    global current_ogham
    if current_ogham > 0:
        current_ogham += -1
        glyphs[current_ogham].show_image(0)
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global current_ogham
    if current_ogham < 19:
        current_ogham += 1
        glyphs[current_ogham].show_image(0)
    else:
        pass
input.on_button_pressed(Button.B, on_button_pressed_b)

glyphs: List[Image] = []
current_ogham = 0
basic.show_leds("""
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # # .
    """)
current_ogham = 0
numbers = [1,
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
    20]
letters = ["B",
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
    "I"]
tones = [98,
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
    164.81 * 8]
glyphs = [images.create_image("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # # .
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . . # . .
        . . # # .
        . . # # .
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . . # # .
        . . # # .
        . . # # .
        """),
    images.create_image("""
        . . # . .
        . . # # .
        . . # # .
        . . # # .
        . . # # .
        """),
    images.create_image("""
        . . # # .
        . . # # .
        . . # # .
        . . # # .
        . . # # .
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . # # . .
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . . # . .
        . # # . .
        . # # . .
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . # # . .
        . # # . .
        . # # . .
        """),
    images.create_image("""
        . . # . .
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        """),
    images.create_image("""
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        . # # . .
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        """),
    images.create_image("""
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        # # # # #
        """),
    images.create_image("""
        . . # . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """),
    images.create_image("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        """),
    images.create_image("""
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        """),
    images.create_image("""
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        """),
    images.create_image("""
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        """)]

def on_forever():
    music.ring_tone(tones[current_ogham])
basic.forever(on_forever)
