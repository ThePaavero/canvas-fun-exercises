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

  const createParticle = () => {
    state.particles.push({
      size: randomBetween(30, 100),
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      color: getRandomColor(),
    })
  }

  const getRandomColor = () => {
    // var letters = '0123456789ABCDEF'
    const letters = '56789ABCDEF'
    let color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const drawEyes = (particle) => {
    const left = particle.x + (particle.size / 6)
    const eyes = {
      top: particle.y + (particle.size / 6),
      left,
      right: left + (particle.size / 6),
      size: particle.size / 6,
    }

    context.beginPath()
    context.arc(eyes.left, eyes.top, eyes.size, 0, 2 * Math.PI, false)
    context.fillStyle = '#fff'
    context.fill()

    context.beginPath()
    context.arc(eyes.right, eyes.top, eyes.size, 0, 2 * Math.PI, false)
    context.fillStyle = '#fff'
    context.fill()
  }

  const render = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    state.particles.forEach(particle => {
      context.beginPath()
      context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI, false)
      context.fillStyle = particle.color
      context.fill()

      // drawEyes(particle)
    })
  }

  const tick = () => {
    if (randomBetween(0, 1) === 0) {
      createParticle()
    }

    if (state.particles.length > 1000) {
      state.particles.splice(randomBetween(state.particles.length - 1), 1)[0]
    }

    state.particles.forEach(particle => {
      particle.x += randomBetween(-5, 5)
      particle.y += randomBetween(-5, 5)
    })

    render()

    window.requestAnimationFrame(tick)
  }

  const init = () => {
    canvas = $('canvas')
    context = canvas.getContext('2d')

    canvas.width = 1920
    canvas.height = 1080

    for (let i = 0; i < 1000; i++) {
      createParticle()
    }

    tick()
  }

  init()
})()
