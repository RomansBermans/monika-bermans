document.querySelectorAll('[data-background]').forEach(container => {
  const url = container.getAttribute('data-background')
  container.style.backgroundImage = `url(${url})`
})

const navigation = document.getElementById('navigation')
window.addEventListener('scroll', () => {
  if (window.scrollY > navigation.clientHeight) {
    navigation.classList.add('scrolled')
  } else {
    navigation.classList.remove('scrolled')
  }
})