// import {useControls} from 'https://cdn.skypack.dev/leva@0.9.35';
// https://www.npmjs.com/package/leva

document.addEventListener('DOMContentLoaded', function () {
    const { Leva, useControls } = window.Leva;

    const colors = useControls({
        myFooColor: '#fff',
        myBarColor: { r: 200, b: 125, g: 106, a: 0.4 },
    })

});