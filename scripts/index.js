document.querySelectorAll('[data-background]').forEach(container => {
  const url = container.getAttribute('data-background');
  container.style.backgroundImage = `url(${url})`;
});
