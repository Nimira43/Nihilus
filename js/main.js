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