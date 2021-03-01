import { randomBetween } from './utils'

const Piece = (canvas, context) => {

  const floorHeight = 40
  const planeWidth = 50
  const state = {
    gameSpeed: 1,
    plane: {
      x: (canvas.width / 2) + planeWidth / 2,
      y: canvas.height / 7,
      width: planeWidth,
      height: 18,
    },
    targets: [],
    lastTargetX: 0,
  }

  const getFloor = () => {
    return canvas.height - floorHeight
  }

  const createTargets = () => {
    for (let i = 0; i < randomBetween(4, 8); i++) {
      const height = randomBetween(20, 80)
      const width = randomBetween(200, 700)
      state.targets.push({
        x: randomBetween(200, 400),
        y: getFloor() - height,
        width,
        height,
      })
      state.lastTargetX += width
    }
  }

  const moveTargets = () => {
    state.targets.forEach(target => {
      target.x += state.gameSpeed
    })
  }

  const stateTick = () => {
    moveTargets()
  }

  const drawPlane = () => {
    context.fillStyle = '#000'
    context.fillRect(state.plane.x, state.plane.y, state.plane.width, state.plane.height)
  }

  const drawFloor = () => {
    context.fillStyle = '#000'
    context.fillRect(0, canvas.height - floorHeight, canvas.width, floorHeight)
  }

  const drawTargets = () => {
    state.targets.forEach(target => {
      context.fillStyle = '#000'
      context.fillRect(target.x, target.y, target.width, target.height)
    })
  }

  const draw = () => {
    drawPlane()
    drawTargets()
    drawFloor()
  }

  const init = () => {
    createTargets()
  }

  init()

  return {
    stateTick,
    draw,
  }
}

export default Piece
