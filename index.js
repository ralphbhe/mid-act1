var randomPicture1= Math.floor(Math.random() * 6) + 1;
var randomPicture2= Math.floor(Math.random() * 6) + 1;

var randomImage1 = `images/d${randomPicture1}.png`;
var randomImage2 = `images/d${randomPicture2}.png`;

var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];

image1.setAttribute('src', randomImage1);
image2.setAttribute('src', randomImage2);

var dice1 = 'images/d1.png';
var dice2 = 'images/d2.png';
var dice3 = 'images/d3.png';
var dice4 = 'images/d4.png';
var dice5 = 'images/d5.png';
var dice6 = 'images/d6.png';

//dice 6
if (randomImage1 > randomImage2 && randomImage1 === dice6) {
    document.querySelector('h1').textContent = "DICE #6 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').style.textDecoration='line-through';
}
else if (randomImage1 === randomImage2 && randomImage1 === dice6){
    document.querySelector('h1').textContent = "DRAW!";
}
else if (randomImage2 > randomImage1 && randomImage2 === dice6) {
    document.querySelector('h1').textContent = "DICE #6 WINS!";
    document.querySelector('.p1').style.textDecoration='line-through';
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
}
else if (randomImage2 === randomImage1 && randomImage2 === dice6){
    document.querySelector('h1').textContent = "DRAW!";
}
//dice 5
else if (randomImage1 > randomImage2 && randomImage1 === dice5) {
    document.querySelector('h1').textContent = "DICE #5 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').style.textDecoration='line-through';
}
else if (randomImage1 === randomImage2 && randomImage1 === dice5){
    document.querySelector('h1').textContent = "DRAW!";
}
else if (randomImage2 > randomImage1 && randomImage2 === dice5) {
    document.querySelector('h1').textContent = "DICE #5 WINS!";
    document.querySelector('.p1').style.textDecoration='line-through';
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
}
else if (randomImage2 === randomImage1 && randomImage2 === dice5){
    document.querySelector('h1').textContent = "DRAW!";
}

//dice 4
else if (randomImage1 > randomImage2 && randomImage1 === dice4) {
    document.querySelector('h1').textContent = "DICE #4 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').style.textDecoration='line-through';
}
else if (randomImage1 === randomImage2 && randomImage1 === dice4){
    document.querySelector('h1').textContent = "DRAW!";
}
else if (randomImage2 > randomImage1 && randomImage2 === dice4) {
    document.querySelector('h1').textContent = "DICE #4 WINS!";
    document.querySelector('.p1').style.textDecoration='line-through';
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
}
else if (randomImage2 === randomImage1 && randomImage2 === dice4){
    document.querySelector('h1').textContent = "DRAW!";
}

//dice 3
else if (randomImage1 > randomImage2 && randomImage1 === dice3) {
    document.querySelector('h1').textContent = "DICE #3 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').style.textDecoration='line-through';
}
else if (randomImage1 === randomImage2 && randomImage1 === dice3){
    document.querySelector('h1').textContent = "DRAW!";
}
else if (randomImage2 > randomImage1 && randomImage2 === dice3) {
    document.querySelector('h1').textContent = "DICE #3 WINS!";
    document.querySelector('.p1').style.textDecoration='line-through';
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
}
else if (randomImage2 === randomImage1 && randomImage2 === dice3){
    document.querySelector('h1').textContent = "DRAW!";
}

//dice 2
else if (randomImage1 > randomImage2 && randomImage1 === dice2) {
    document.querySelector('h1').textContent = "DICE #2 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').style.textDecoration='line-through';
}
else if (randomImage1 === randomImage2 && randomImage1 === dice2){
    document.querySelector('h1').textContent = "DRAW!";
}
else if (randomImage2 > randomImage1 && randomImage2 === dice2) {
    document.querySelector('h1').textContent = "DICE #2 WINS!";
    document.querySelector('.p1').style.textDecoration='line-through';
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
}
else if (randomImage2 === randomImage1 && randomImage2 === dice2){
    document.querySelector('h1').textContent = "DRAW!";
}

//dice 1
else if (randomImage1 > randomImage2 && randomImage1 === dice1) {
    document.querySelector('h1').textContent = "DICE #1 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS!";
    document.querySelector('.p2').style.textDecoration='line-through';
}
else if (randomImage1 === randomImage2 && randomImage1 === dice1){
    document.querySelector('h1').textContent = "DRAW!";
}
else if (randomImage2 > randomImage1 && randomImage2 === dice1) {
    document.querySelector('h1').textContent = "DICE #1 WINS!";
    document.querySelector('.p1').style.textDecoration='line-through';
    document.querySelector('.p2').textContent = "PLAYER 2 WINS!";
}
else if (randomImage2 === randomImage1 && randomImage2 === dice1){
    document.querySelector('h1').textContent = "DRAW!";
}

function refresh(){
    window.location.reload("Refresh")
  }