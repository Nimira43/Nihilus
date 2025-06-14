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
  const hoveredEl = document.elementFromPoint(x, y)
  mouseCircleTransform(hoveredEl)
})

