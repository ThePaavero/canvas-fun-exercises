import { randomBetween } from './utils'

const Piece = (canvas, context) => {

  const planeWidth = 50
  const state = {
    plane: {
      x: (canvas.width / 2) + planeWidth / 2,
      y: canvas.height / 7,
      width: planeWidth,
      height: 18,
    },
    targets: []
  }

  const stateTick = () => {
    // ...
  }

  const drawPlane = () => {
    context.fillStyle = '#000'
    context.fillRect(state.plane.x, state.plane.y, state.plane.width, state.plane.height)
  }

  const draw = () => {
    drawPlane()
  }

  return {
    stateTick,
    draw,
  }
}

export default Piece
