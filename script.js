function enterTardis() {
  const exterior = document.getElementById('exterior')
  const interior = document.getElementById('interior')
  
  exterior.style.visibility = 'hidden'
  interior.style.visibility = 'visible'
}

function exitTardis() {
  const exterior = document.getElementById('exterior')
  const interior = document.getElementById('interior')

  interior.style.visibility = 'hidden'
  setTimeout(() => {
    exterior.style.visibility = 'visible'
  }, 1000)
}
