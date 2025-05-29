// src/themeToggle.ts
/**
 * @jest-environment jsdom
 */
interface tool {
  name: string;
  released: number;
  summary: string;
}
export function setupThemeToggle() {
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

export function data(main: HTMLElement, data: Array<tool>) {
  data.forEach((element) => {
    const tools = document.createElement('div') as HTMLDivElement;
    tools.innerHTML = `
     <h2>${element.name}</h2>
     <p>${element.released}</p>
     <p>${element.summary}</p>
     `;
    main.appendChild(tools);
  });
}
