/* https://tweakpane.github.io/docs/ */
import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.3/dist/tweakpane.min.js';

var r = document.querySelector(':root');



const pane = new Pane({
    title: 'Experiment',
    expanded: true,
});

const levers = {
    percentage: 50,
    theme: 'dark',
    color: '#5667FF',
  };
  
function makePane() {
    pane.addBinding(levers, 'percentage', {min: 0, max: 100, step: 1});
    pane.addBinding(levers, 'theme',{options: {Dark: 'dark', Light: 'light'}});
    pane.addBinding(levers, 'color', {view: 'color',}).on('change',  newValue => {updateColor(newValue)});
    newValue => {changeColor(0, newValue)}
}

function updateColor(c) {
    r.style.setProperty('--color-accent', c.value);
}

document.addEventListener('DOMContentLoaded', function () {
    makePane();
});






