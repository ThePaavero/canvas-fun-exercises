import '../stylesheets/style.scss'

(() => {
  let canvas
  let context

  let maxBuildings = 0
  let floor = 0

  const state = {
    buildings: [],
  }

  const $ = (selector) => {
    return document.querySelector(selector)
  }

  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const render = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawBuildings()
  }

  const drawBuildings = () => {
    state.buildings.forEach((building) => {
      context.fillStyle = building.color;
      context.fillRect(building.x, building.y, building.width, building.height)
    })
  }

  const createRandomBuilding = () => {
    const height = randomBetween(10, 150)
    const width = randomBetween(20, 40)
    const y = floor - height
    const building = {
      x: randomBetween(-10, canvas.width),
      y,
      width,
      height,
      color: 'black',
    }
    console.log(building)
    state.buildings.push(building)
  }

  const tick = () => {

    if (randomBetween(0, 10) === 0 && state.buildings.length < maxBuildings) {
      createRandomBuilding()
    }

    render()

    window.requestAnimationFrame(tick)
  }

  const init = () => {
    canvas = $('canvas')
    context = canvas.getContext('2d')
    canvas.width = 1920
    canvas.height = 1080
    maxBuildings = 20
    floor = canvas.height - 140
    tick()
  }

  init()
})()
