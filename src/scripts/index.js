import '../stylesheets/style.scss'

const $ = (selector) => {
  return document.querySelector(selector)
}

(() => {
  let canvas
  let context
  const state = {
    particles: [],
  }

  const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const createParticle = () => {
    state.particles.push({
      size: randomBetween(1, 10),
      x: randomBetween(0, canvas.height),
      y: randomBetween(0, canvas.width),
      color: 'red',
    })
  }

  const render = () => {
    state.particles.forEach(particle => {
      context.beginPath()
      context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI, false)
      context.fillStyle = particle.color
      context.fill()
    })
  }

  const tick = () => {
    if (randomBetween(0, 100) === 0) {
      createParticle()
    }

    render()

    window.requestAnimationFrame(tick)
  }

  const init = () => {
    canvas = $('canvas')
    context = canvas.getContext('2d')

    canvas.width = 1440
    canvas.height = 900

    tick()
  }

  init()
})()
