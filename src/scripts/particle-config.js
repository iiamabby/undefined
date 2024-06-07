import * as arrowLine from 'arrow-line';


let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');


const arrow = arrowLine({source: `${box1}`, destination: `${box2}`, thickness: 3, style: 'dot'});