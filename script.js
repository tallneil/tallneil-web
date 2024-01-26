var n = 0; // tracks current colorway 
var ripples = 0; // temp
var gui;

var colors = 
[
  ["#ff4f00", "#f96b29", "#ff00c6", "#5fff99"], 
  ["#ff4f00", "#13BBAF", "#ff4f00", "#13BBAF"],
  ["#ff4f00", "#13BBAF", "#79ddd6", "#ffcbb3"], 
];

var intensity = 
[
  [1.0, 1.0, 2.0, 1.0], 
  [1.5, 1.0, 0.0, 0.0],
  [1.0, 2.0, 0.5, 1.2], 
];

var obj = {
  speed: 0.5,
  colorway: 0,
  color0: colors[0][0], 
  color1: colors[0][1],
  color2: colors[0][2],
  color3: colors[0][3],
  intensity_0: intensity[0][0],
  intensity_1: intensity[0][1],
  intensity_2: intensity[0][2],
  intensity_3: intensity[0][3],
  ripples: 1,
};

function makeControls() {
  gui = new dat.gui.GUI();
  gui.remember(obj);

  gui.add(obj, 'colorway', [0, 1, 2, 3, 4, 5]).onChange(newValue => {changeColorway(newValue)});

  var folder_c = gui.addFolder('colors');
  folder_c.addColor(obj, 'color0').onChange(newValue => {changeColor(newValue)}).listen();
  folder_c.add(obj, 'intensity_0').min(0.0).max(10.0).step(0.1);

  gui.add(obj, 'ripples').min(0.1).max(8).step(0.01).onChange(newValue => {ripples = newValue}).listen();

}

function changeColorway(num) {
    // do something
}

function changeColor(arr) {
    var c = hexToRGB(arr.toString(16));
  }


document.addEventListener('DOMContentLoaded', function () {
    makeControls();
});






