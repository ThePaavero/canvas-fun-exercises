import '../stylesheets/style.scss'

(() => {
  let canvas
  let context

  let maxBuildings = 0
  let floor = 0

  const levelsAmount = 3

  const state = {
    buildings: [],
    currentLevel: 1,
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
    drawFloor()
  }

  const drawBuildings = () => {
    state.buildings.forEach((building) => {
      context.fillStyle = building.color;
      context.fillRect(building.x, building.y, building.width, building.height)
    })
  }

  const drawFloor = () => {
    context.fillStyle = 'black';
    context.fillRect(0, floor, canvas.width, canvas.height - floor)
  }

  const levelToColor = (levelNumber) => {
    switch (levelNumber) {
      case 1:
        return '#363636'
      case 2:
        return '#262626'
      case 3:
        return '#000'
    }
  }

  const createRandomBuilding = () => {
    const level = state.currentLevel
    if ((state.buildings.length > maxBuildings / levelsAmount) && state.currentLevel < levelsAmount) {
      state.currentLevel++
    }

    maxBuildings -= state.currentLevel / 2

    const height = randomBetween(10, 150)
    const width = randomBetween(20, 40)
    const y = floor - height
    const x = randomBetween(-10, canvas.width)
    const color = levelToColor(level)
    const building = {
      x,
      y,
      width,
      height,
      color,
      level,
    }
    console.log(building)
    state.buildings.push(building)
  }

  const tick = () => {
    if (state.buildings.length < maxBuildings) {
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
    maxBuildings = canvas.width / 3
    floor = canvas.height - 140
    tick()
  }

  init()
})()
