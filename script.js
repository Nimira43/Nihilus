function enterTardis() {
  const exterior = document.getElementById('exterior')
  const interior = document.getElementById('interior')
  
  exterior.style.visibility = 'hidden'
  exterior.style.opacity = '0'
  interior.style.visibility = 'visible'
  interior.style.opacity = '1'
}

function exitTardis() {
  const exterior = document.getElementById('exterior')
  const interior = document.getElementById('interior')

  interior.style.opacity = '0'
  setTimeout(() => {
    interior.style.visibility = 'hidden'
    exterior.style.visibility = 'visible'
    exterior.style.opacity = '1'
  }, 1000)
}
