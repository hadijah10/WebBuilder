// src/themeToggle.test.ts
import { setupThemeToggle, data } from './buildtest';
import tools from '../index.json';

describe('Theme toggle', () => {
  let themeDiv: HTMLElement;

  beforeEach(() => {
    document.body.innerHTML = `
      <main></main>
      <div class="theme" style="justify-content: flex-start; background-color: #ffffff;"></div>
    `;

    setupThemeToggle();
    themeDiv = document.querySelector('.theme') as HTMLElement;
  });

  test('toggles dark theme and styles on click', () => {
    expect(document.body.classList.contains('dark-theme')).toBe(false);

    themeDiv.click(); // first click → activate dark theme

    expect(document.body.classList.contains('dark-theme')).toBe(true);
    expect(themeDiv.style.justifyContent).toBe('flex-end');
    expect(themeDiv.style.backgroundColor).toBe('rgba(0, 0, 0, 0.7)');

    themeDiv.click(); // second click → remove dark theme

    expect(document.body.classList.contains('dark-theme')).toBe(false);
    expect(themeDiv.style.justifyContent).toBe('flex-start');
    expect(themeDiv.style.backgroundColor).toBe('rgb(255, 255, 255)');
  });
});
describe('Fetch and display data', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <main></main>
    `;
  });
  it('fetching data ', () => {
    const main = document.querySelector('main') as HTMLElement;
    data(main, tools);
    //counting the number of displayed elements and verifying.
    expect(main.children.length).toBe(tools.length);
    expect(main.children[1].textContent).toContain('Vue');
    expect(main.children[12].textContent).toContain('Figma')
  });
});
