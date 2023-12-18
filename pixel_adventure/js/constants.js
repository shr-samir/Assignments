let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = 1360
canvas.height = 720

const gravity = 0.8
// ------ sprite slider ------
let positionInSprite

// ------- map image ----------

let level = 1
const mapImage = new Image()
if (level === 3) {
  mapImage.src = './assets/mapXL-3.png'
} else if (level === 2) {
  mapImage.src = './assets/mapXL-2.png'
} else {
  level = 1
  mapImage.src = './assets/mapXL-1.png'
}
// mapImage.src = '../assets/mapXL.png'

// mapImage.onload = () => {
//   ctx.drawImage(mapImage, 0, 0)
// }

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  jump: {
    pressed: false,
  },
}

// to delay frames
const staggerFrames = 3

let collectedFruits = []

let fruits = [
  {
    name: 'apple',
    sprite: function (x, y) {
      return new Sprite(
        './assets/Items/Fruits/Apple.png',
        x,
        y,
        32,
        32,
        32 * 1.5,
        32 * 1.5
      )
    },
  },
  {
    name: 'banana',
    sprite: function (x, y) {
      return new Sprite(
        './assets/Items/Fruits/Bananas.png',
        x,
        y,
        32,
        32,
        32 * 1.5,
        32 * 1.5
      )
    },
  },
  {
    name: 'orange',
    sprite: function (x, y) {
      return new Sprite(
        './assets/Items/Fruits/Orange.png',
        x,
        y,
        32,
        32,
        32 * 1.5,
        32 * 1.5
      )
    },
  },
  {
    name: 'pineapple',
    sprite: function (x, y) {
      return new Sprite(
        './assets/Items/Fruits/Pineapple.png',
        x,
        y,
        32,
        32,
        32 * 1.5,
        32 * 1.5
      )
    },
  },
  {
    name: 'strawberry',
    sprite: function (x, y) {
      return new Sprite(
        './assets/Items/Fruits/Strawberry.png',
        x,
        y,
        32,
        32,
        32 * 1.5,
        32 * 1.5
      )
    },
  },
  {
    name: 'watermelon',
    sprite: function (x, y) {
      return new Sprite(
        './assets/Items/Fruits/Melon.png',
        x,
        y,
        32,
        32,
        32 * 1.5,
        32 * 1.5
      )
    },
  },
  {
    name: 'kiwi',
    sprite: function (x, y) {
      return new Sprite(
        './assets/Items/Fruits/Kiwi.png',
        x,
        y,
        32,
        32,
        32 * 1.5,
        32 * 1.5
      )
    },
  },
  {
    name: 'cherries',
    sprite: function (x, y) {
      return new Sprite(
        './assets/Items/Fruits/Cherries.png',
        x,
        y,
        32,
        32,
        32 * 1.5,
        32 * 1.5
      )
    },
  },
]

//Need to change this to dynamic

let fruitsCordinates = [
  {
    index: 1,
    x1: 220,
    y1: 375,
  },
  {
    index: 1,
    x1: 220,
    y1: 305,
  },
  {
    index: 1,
    x1: 348,
    y1: 375,
  },
  {
    index: 1,
    x1: 284,
    y1: 305,
  },
  {
    index: 1,
    x1: 284,
    y1: 375,
  },
  {
    index: 1,
    x1: 348,
    y1: 305,
  },
  {
    index: 0,
    x1: 450,
    y1: 250,
  },
  {
    index: 0,
    x1: 520,
    y1: 250,
  },
  {
    index: 0,
    x1: 590,
    y1: 250,
  },
  {
    index: 3,
    x1: 700,
    y1: 200,
  },
  {
    index: 3,
    x1: 770,
    y1: 200,
  },
  {
    index: 3,
    x1: 925,
    y1: 250,
  },
  {
    index: 4,
    x1: 1000,
    y1: 400,
  },
  {
    index: 4,
    x1: 1070,
    y1: 500,
  },
  {
    index: 4,
    x1: 1000,
    y1: 500,
  },
  {
    index: 4,
    x1: 1140,
    y1: 500,
  },
]
