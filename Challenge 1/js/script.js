window.addEventListener('load', start);
window.addEventListener('input', handleInput);


var redRange = null;
var greenRange = null;
var blueRange = null;
var colorRGB = null;

function start(){
    console.log('The page has been loaded successfully!')
}

function handleInput(){

    //Text
    valueRed = document.querySelector('#valueRed');
    valueGreen = document.querySelector('#valueGreen');
    valueBlue = document.querySelector('#valueBlue');

    //Range
    redRange = document.querySelector('#rangeRed');
    greenRange = document.querySelector('#rangeGreen');
    blueRange = document.querySelector('#rangeBlue');

    // Moving range value to the text
    valueRed.value = redRange.value;
    valueGreen.value = greenRange.value;
    valueBlue.value = blueRange.value;

    colorRGB = document.querySelector('.colorRGB');

    colorRGB.style.backgroundColor = 'RGB(' + valueRed.value + ',' + valueGreen.value + ',' + valueBlue.value + ')';
    
    console.log(valueRed);


}

