function enterTardis() {
  const exterior = document.getElementById('exterior')
  const interior = document.getElementById('interior')
  
  exterior.style.visibility = 'hidden'
  interior.style.visibility = 'visible'
  interior.style.transform = 'rotateY(0deg)'
}

function exitTardis() {
  const exterior = document.getElementById('exterior')
  const interior = document.getElementById('interior')

  interior.style.transform = 'rotateY(-180deg)'
  setTimeout(() => {
    interior.style.visibility = 'hidden'
    exterior.style.visibility = 'visible'
  }, 1000)
}
