import { Colors } from "react-native/Libraries/NewAppScreen";

const colors = {
    turquoise: '#1abc9c',
    emerald: '#2ecc71',
    peterriver: '#3498db',
    amethyst: '#9b59b6',
    wetasphalt: '#34495e',
    greensea: '#16a085',
    nephritis: '#27ae60',
    belizehole: '#2980b9',
    wisteria: '#8e44ad',
    midnightblue: '#2c3e50',
    sunflower: '#f1c40f',
    carrot: '#e67e22',
    alizarin: '#e74c3c',
    clouds: '#ecf0f1',
    concrete: '#95a5a6',
    orange: '#f39c12',
    pumpkin: '#d35400',
    pomegranate: '#c0392b',
    silver: '#bdc3c7',
    asbestos: '#7f8c8d',
    electromagnetic: '#2f3640',
}


var item = colors[Math.floor(Math.random() * colors.length)];


export default colors;