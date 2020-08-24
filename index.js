// Import stylesheets
import './style.css';

// Canvas Basics
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');

ctx1.fillStyle = 'green';
ctx1.fillRect(10, 10, 200, 200);

ctx1.fillStyle = 'red';
ctx1.fillRect(100, 100, 200, 200);

// Rectangles & Text

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

ctx2.fillStyle = 'green';
ctx2.fillRect(10, 10, 200, 200);
ctx2.clearRect(45, 45, 60, 60);
ctx2.strokeRect(50, 50, 50, 50);

ctx2.strokeStyle = 'blue';
ctx2.strokeRect(220, 40, 200, 170);
ctx2.fillStyle = 'blue';
ctx2.fillRect(219, 10, 100, 30);

ctx2.font = "16px Arial";
ctx2.fillStyle = "white";
ctx2.fillText("Div Title", 230, 30);

// Paths
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');

ctx3.beginPath();
ctx3.moveTo(75, 50);
ctx3.lineTo(100, 75);
ctx3.lineTo(100, 25);
ctx3.fill();

ctx3.beginPath();
ctx3.moveTo(120, 25);
ctx3.lineTo(180, 25);
ctx3.lineTo(180, 75);
ctx3.lineTo(120, 75);
ctx3.closePath();
ctx3.stroke();

ctx3.beginPath();
ctx3.moveTo(200, 25);
ctx3.lineTo(225, 50);
ctx3.lineTo(200, 75);
ctx3.fill();