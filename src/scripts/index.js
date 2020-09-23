import '../stylesheets/style.scss';

const $ = (selector) => {
  return document.querySelector(selector)
}

(() => {
  let canvas
  let context
  const state = {}

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const tick = () => {
    window.requestAnimationFrame(tick)
  }

  const init = () => {
    canvas = $('canvas')
    context = canvas.getContext('2d')

    tick()
  }

  init()
})()
