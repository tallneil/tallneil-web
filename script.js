/* https://tweakpane.github.io/docs/ */
import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.3/dist/tweakpane.min.js';

var r = document.querySelector(':root');



const pane = new Pane({
    title: 'Experiment',
    expanded: true,
});

const levers = {
    theme: 'Dusk',
    accent: '#5667FF',
  };
  
function makePane() {
    pane.addBinding(levers, 'theme', {options: {Dusk: 'Dusk', Zap: 'Zap', Grass: 'Grass'}})
        .on('change', newValue => {setTheme(newValue.value)}
    );
    pane.addBinding(levers, 'accent', {view: 'color'})
        .on('change', newValue => {setVar('--color-accent', newValue.value)}
    );
}

function setTheme(v) {
    if (v == 'Dusk') {
        setThemeVars('#080808', '#ffffff', "#5667FF");
        $(".wordmark").addClass("hidden");
        $("#w1").removeClass("hidden");
    } else if (v == 'Zap') { 
        setThemeVars('#DBFF00', '#000000', "#000000");
        $(".wordmark").addClass("hidden");
        $("#w2").removeClass("hidden");
    } else if (v == 'Grass') {
        setThemeVars('#BFEFC1', '#000000', "#00AE11");
        $(".wordmark").addClass("hidden");
        $("#w3").removeClass("hidden");
    } else { 
        setThemeVars('#080808', '#ffffff', "#5667FF");
    }
}

function setThemeVars(bg, fg, a) {
    r.style.setProperty('--color-bg', bg);
    r.style.setProperty('--color-fg', fg);
    r.style.setProperty('--color-accent', a);
    levers.accent = a;
    pane.refresh();
}

function setVar(v, c) {
    r.style.setProperty(v, c);
}

document.addEventListener('DOMContentLoaded', function () {
    makePane();
});






