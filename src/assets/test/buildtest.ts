// src/themeToggle.ts
/**
 * @jest-environment jsdom
 */
export function setupThemeToggle() {
  const main = document.querySelector('main') as HTMLElement;
  const theme = document.querySelector('.theme') as HTMLElement;

  theme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
      theme.style.justifyContent = 'flex-end';
      theme.style.backgroundColor = 'rgba(0,0,0,0.7)';
    } else {
      theme.style.justifyContent = 'flex-start';
      theme.style.backgroundColor = '#ffffff';
    }
  });
}
