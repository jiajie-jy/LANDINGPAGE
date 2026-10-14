const tabs = [...document.querySelectorAll('nav[role="tablist"] a')];
const hero = document.querySelector('.hero');
const problem = document.querySelector('#problema');
const solution = document.querySelector('#solucion');
const features = document.querySelector('#funciones');
const pricing = document.querySelector('#planes');
const contact = document.querySelector('#contacto');
const panes = [hero, problem, solution, pricing, contact];
function showTab(name) {
  panes.forEach(pane => { pane.hidden = true; });
  solution.querySelector('.solution-text').hidden = name === 'funciones';
  features.hidden = name !== 'funciones';
  const target = { inicio: hero, problema: problem, solucion: solution, funciones: solution, planes: pricing }[name] || hero;
  target.hidden = false;
  tabs.forEach(tab => tab.setAttribute('aria-selected', String(tab.hash === `#${name}`)));
}
tabs.forEach(tab => tab.addEventListener('click', event => {
  event.preventDefault();
  showTab(tab.hash.slice(1));
}));
document.querySelectorAll('a[href="#contacto"]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault(); showTab('contacto');
}));
document.querySelectorAll('a[href="#solucion"], a[href="#funciones"]').forEach(link => {
  if (!tabs.includes(link)) link.addEventListener('click', event => { event.preventDefault(); showTab(link.hash.slice(1)); });
});
showTab('inicio');