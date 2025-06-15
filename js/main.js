const mouseCircle = document.querySelector('.mouse-circle')
const mouseDot = document.querySelector('.mouse-dot')

let mouseCircleBool = true

const mouseCircleFn = (x, y) => {
  mouseCircleBool && (
    mouseCircle.style.cssText = `
      top: ${y}px; left: ${x}px; opacity: 1
    `
  )

  mouseDot.style.cssText = `
      top: ${y}px; left: ${x}px; opacity: 1
    `
}

const circles = document.querySelectorAll('.circle')
const mainImg = document.querySelector('.main-circle img')

let mX = 0
let mY = 0
const z = 100

const animateCircles = (e, x, y) => {
  if (x < mX) {
    circles.forEach((circle) => {
      circle.style.left = `${z}px`
    })
    mainImg.style.left = `${z}px`
  } else if (x > mX) {
    circles.forEach((circle) => {
      circle.style.left = `-${z}px`
    })
    mainImg.style.left = `-${z}px`
  }
  
  if (x < mY) {
    circles.forEach((circle) => {
      circle.style.top = `${z}px`
    })
    mainImg.style.top = `${z}px`
  } else if (x > mY) {
    circles.forEach((circle) => {
      circle.style.top = `-${z}px`
    })
    mainImg.style.top = `-${z}px`
  }
  mX = e.clientX
  mY = e.clientY
}

let hoveredElPosition = []

const stickyElement = (x, y, hoveredEl) => {
  if (hoveredEl.classList.contains('sticky')) {
    hoveredElPosition.length < 1 && (
      hoveredElPosition = [hoveredEl.offsetTop, hoveredEl.offsetLeft]
    )
    hoveredEl.style.cssText = `top: ${y}px; left: ${x}px`

    if (
      hoveredEl.offsetTop <= hoveredElPosition[0] - 100 ||
      hoveredEl.offsetTop >= hoveredElPosition[0] + 100 ||
      hoveredEl.offsetLeft <= hoveredElPosition[1] - 100 ||
      hoveredEl.offsetLeft >= hoveredElPosition[1] + 100
    ) {
      hoveredEl.style.cssText = ''
      hoveredElPosition = []
    }

    hoveredEl.onmouseleave = () => {
      hoveredEl.style.cssText = ''
      hoveredElPosition = []
    }
  }
}

const mouseCircleTransform = (hoveredEl) => {
  if (hoveredEl.classList.contains ('pointer-event')) {
    hoveredEl.onmousemove = () => {
      mouseCircleBool = false
      mouseCircle.style.cssText = `
        width: ${hoveredEl.getBoundingClientRect().width}px
        height: ${hoveredEl.getBoundingClientRect().height}px
        top: ${hoveredEl.getBoundingClientRect().top}px
        left: ${hoveredEl.getBoundingClientRect().left}px
        opacity: 1
        transform: translate(0, 0)
        animation:none;
        border-radius: ${getComputedStyle(hoveredEl).borderBottomLeftRadius}
        transition: width 0.5s, height 0.5s, top: 0.5s. left 0.5s, transform 0.5s, border-radius 0.5s
      `
    }
    hoveredEl.onmouseleave = () => {
      mouseCircleBool = true
    }
    document.onscroll = () => {
      if (!mouseCircleBool) {
        mouseCircle.style.top = `
          ${hoveredEl.getBoundingClientRect().top}px
        `
      }
    }
  }
}

document.body.addEventListener('mousemove', (e) => {
  let x = e.clientX
  let y = e.clientY

  mouseCircleFn(x, y)
  animateCircles(e, x, y)

  const hoveredEl = document.elementFromPoint(x, y)

  stickyElement(x, y, hoveredEl)
  mouseCircleTransform(hoveredEl)
})

document.body.addEventListener('mouseleave', () => {
  mouseCircle.style.opacity = '0'
  mouseDot.style.opacity = '0'
})

const mainBtns = document.querySelectorAll('.main-btn')

mainBtns.forEach((btn) => {
  let ripple

  btn.addEventListener('mouseenter', (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left
    const top = e.clientY - e.target.getBoundingClientRect().top
  
    ripple = document.createElement('div')
    ripple.classList.add('ripple')
    ripple.style.left = `${left}px`
    ripple.style.top = `${top}px`
    btn.prepend(ripple)
  })

  btn.addEventListener('mouseleave', () => {
    btn.removeChild(ripple)
  })
})

const sections = document.querySelectorAll('section')
const progressBar = document.querySelector('.progress-bar')
const halfCircles = document.querySelectorAll('.half-circle')
const halfCircleTop = document.querySelector('.half-circle-top')
const progressBarCircle = document.querySelector('.progress-bar-circle')

let scrolledPortion = 0
let scrollBool = false
let imageWrapper = false

const progressBarFn = (bigImgWrapper) => {
  imageWrapper = bigImgWrapper
  let pageHeight = 0
  const pageViewportHeight = window.innerHeight

  if (!imageWrapper) {
    pageHeight = document.documentElement.scrollHeight
    scrolledPortion = window.pageYOffset
  } else {
    pageHeight = imageWrapper.firstElementChild.scrollHeight
    scrolledPortion = imageWrapper.scrolling
  }

  const scrolledPortionDegree = (scrolledPortion / (pageHeight - pageViewportHeight)) * 300

  halfCircles.forEach((el) => {
    el.style.transform - `rotate(${scrolledPortionDegree}deg)`

    if(scrolledPortionDegree >= 180) {
      halfCircles[0].style.transform = 'rotate(180deg)'
      halfCircleTop.style.opacoty = '0'
    } else {
      halfCircleTop.style.opacity = '1'
    }
  })

  
}