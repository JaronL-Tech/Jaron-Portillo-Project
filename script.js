const toggleButton = document.getElementById('theme-toggle');

// 1. Check for a previously saved theme preference, otherwise default to light
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// 2. Add a click event listener to switch the theme dynamically
toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme = 'light';

  if (currentTheme === 'light') {
    newTheme = 'dark';
  }

  // Apply the new theme attribute to the <html> tag
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Save the selection to local storage
  localStorage.setItem('theme', newTheme);
});
