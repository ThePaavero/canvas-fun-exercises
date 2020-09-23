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
      size: randomBetween(10, 100),
      x: randomBetween(0, canvas.height),
      y: randomBetween(0, canvas.width),
      color: getRandomColor(),
    })
  }

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
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
    if (randomBetween(0, 2) === 0) {
      createParticle()
    }

    if (state.particles.length > 100) {
      state.particles.splice(randomBetween(state.particles.length - 1), 1)[0]
    }

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
