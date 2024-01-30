/* https://tweakpane.github.io/docs/ */
import {Pane} from 'https://cdn.jsdelivr.net/npm/tweakpane@4.0.3/dist/tweakpane.min.js';

var r = document.querySelector(':root');



const pane = new Pane({
    title: 'Experiment',
    expanded: true,
});

const levers = {
    theme: 'Mint',
    accent: '#3AFF95',
    spacing: 24,
  };
  
function makePane() {
    pane.addBinding(levers, 'theme', {options: {Mint: 'Mint', Zap: 'Zap', Cloud: 'Cloud'}})
        .on('change', newValue => {setTheme(newValue.value)}
    );
    pane.addBinding(levers, 'accent', {view: 'color'})
        .on('change', newValue => {setVar('--color-accent', newValue.value)}
    );
    pane.addBinding(levers, 'spacing', {min: 16, max: 40, step: 1})
        .on('change', newValue => {setVar('--spacer', newValue.value + "px")}
    );
}

function setTheme(v) {
    if (v == 'Mint') {
        setThemeVars('#080808', '#ffffff', "#3AFF95", 0);
        $(".wordmark").addClass("hidden");
        $("#w1").removeClass("hidden");
    } else if (v == 'Zap') { 
        setThemeVars('#DBFF00', '#000000', "#000000", 1);
        $(".wordmark").addClass("hidden");
        $("#w2").removeClass("hidden");
    } else if (v == 'Cloud') {
        setThemeVars('#C4D5FF', '#000000', "#001AFF", 1);
        $(".wordmark").addClass("hidden");
        $("#w3").removeClass("hidden");
    } else { 
        setThemeVars('#080808', '#ffffff', "#5667FF", 0);
    }
}

function setThemeVars(bg, fg, a, light) {
    r.style.setProperty('--color-bg', bg);
    r.style.setProperty('--color-fg', fg);
    r.style.setProperty('--color-accent', a);
    levers.accent = a;
    pane.refresh();

    if (light) {
        r.style.setProperty('--color-bg-a', 'rgba(0, 0, 0, 0.02)');
        r.style.setProperty('--color-bg-a-h', 'rgba(0, 0, 0, 0.04)');
        r.style.setProperty('--color-fg-a', 'rgba(0, 0, 0, 0.2)');
    } else {
        r.style.setProperty('--color-bg-a', 'rgba(255, 255, 255, 0.02)');
        r.style.setProperty('--color-bg-a-h', 'rgba(255, 255, 255, 0.04)');
        r.style.setProperty('--color-fg-a', 'rgba(255, 255, 255, 0.2)');
    }
}

function setVar(v, c) {
    r.style.setProperty(v, c);
}

document.addEventListener('DOMContentLoaded', function () {
    makePane();
});






