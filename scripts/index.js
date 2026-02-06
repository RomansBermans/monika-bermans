document.querySelectorAll('[data-background]').forEach(container => {
  const url = container.getAttribute('data-background')
  container.style.backgroundImage = `url(${url})`
})

const navigation = document.getElementById('navigation')
window.addEventListener('scroll', () => {
  if (!navigation) return
  if (window.scrollY > navigation.clientHeight / 2) {
    navigation.classList.add('scrolled')
  } else {
    navigation.classList.remove('scrolled')
  }
})