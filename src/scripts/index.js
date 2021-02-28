import '../stylesheets/style.scss'

(() => {
  let canvas
  let context
  const state = {
    particles: [],
  }

  const $ = (selector) => {
    return document.querySelector(selector)
  }

  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const render = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    // ...
  }

  const tick = () => {
    render()
    window.requestAnimationFrame(tick)
  }

  const init = () => {
    canvas = $('canvas')
    context = canvas.getContext('2d')

    canvas.width = 1920
    canvas.height = 1080

    tick()
  }

  init()
})()
