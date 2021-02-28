import '../stylesheets/style.scss'
import Piece from './Piece'

(() => {

  let piece
  let canvas
  let context

  const $ = (selector) => {
    return document.querySelector(selector)
  }

  const clearCanvas = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  const render = () => {
    clearCanvas()
    piece.draw()
  }

  const tick = () => {
    piece.stateTick()
    render()
    window.requestAnimationFrame(tick)
  }

  const init = () => {
    canvas = $('canvas')
    context = canvas.getContext('2d')

    canvas.width = 1920
    canvas.height = 1080

    piece = Piece(canvas, context)

    tick()
  }

  init()
})()
