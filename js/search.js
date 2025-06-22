// Search filter
const searchBox = document.getElementById('searchBox');
searchBox.addEventListener('input', () => {
  const term = searchBox.value.toLowerCase();
  document.querySelectorAll('.benchmark-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(term) ? '' : 'none';
  });
});