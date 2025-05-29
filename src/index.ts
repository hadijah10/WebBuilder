import './style.scss';
import data from './assets/index.json';
import { tool } from './tools';
const main = document.querySelector('main') as HTMLElement
const theme = document.querySelector('.theme') as HTMLElement
theme.addEventListener('click',()=> {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        theme.style.justifyContent = 'flex-end'
        theme.style.backgroundColor = 'rgba(0,0,0,70%)'
    }
    else{
          theme.style.justifyContent = 'flex-start';
          theme.style.backgroundColor = '#ffffff';
    }
})
data.forEach((element: tool) => {
    const tool = document.createElement('div')as HTMLDivElement;
    tool.innerHTML = `
    <h2>${element.name}</h2>
    <p>Released on ${element.released}</p>
    <p>${element.summary}</p>
    `
    main.appendChild(tool)
})
