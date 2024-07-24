document.addEventListener('DOMContentLoaded', () => {
    const toggleContrastButton = document.getElementById('toggleContrast');
    toggleContrastButton.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });
  });
  