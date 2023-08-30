var mod = false;
var mul = false;
var div = false;
var add = false;
var sub = false;
var numbers;
function sq() {
    let sq = document.getElementById('inp').value;
    document.getElementById('inp').value = sq * sq;
}
function modulo() {
    var inp1 = document.getElementById('inp').value; 
    document.getElementById('inp').value += "%";
    numbers = inp1.split('%');
    mod = true;
}
function multiplication() {
    var inp1 = document.getElementById('inp').value; 
    document.getElementById('inp').value += "x";
    numbers = inp1.split('x');
    mul = true;
}
function division() {
    var inp1 = document.getElementById('inp').value; 
    document.getElementById('inp').value += "/";
    numbers = inp1.split('/');
    div = true;
}
function subtraction() {
    var inp1 = document.getElementById('inp').value; 
    document.getElementById('inp').value += "-";
    numbers = inp1.split('-');
    sub = true;
}
function addition() {
    var inp1 = document.getElementById('inp').value; 
    document.getElementById('inp').value += "+";
    numbers = inp1.split('+');
    add = true;
}
function fun(){
if (mod) {
    var button = document.getElementById('modulo');
    button.click();
    let n = numbers[0]%numbers[1];
    n = Math.round(n);
    document.getElementById('inp').value = isNaN(n) ? '0' : n;
    // mod = false;
}
if (mul) {
    var button = document.getElementById('multi');
    button.click();
    document.getElementById('inp').value = numbers[0] * numbers[1];
}
if (div) {
    var button = document.getElementById('div');
    button.click();
    document.getElementById('inp').value = numbers[0] / numbers[1];
}
if (sub) {
    var button = document.getElementById('sub');
    button.click();
    document.getElementById('inp').value = numbers[0] - numbers[1];
}
if (add) {
    var button = document.getElementById('add');
    button.click();
    document.getElementById('inp').value = (parseFloat(numbers[0]) + parseFloat(numbers[1]));
}
}
function one() {
    document.getElementById('inp').value +=1;
}
function one() {
    document.getElementById('inp').value +=1;
}
function two() {
    document.getElementById('inp').value +=2;
}
function three() {
    document.getElementById('inp').value +=3;
}
function four() {
    document.getElementById('inp').value +=4;
}
function five() {
    document.getElementById('inp').value +=5;
}
function six() {
    document.getElementById('inp').value +=6;
}
function sev() {
    document.getElementById('inp').value +=7;
}
function eight() {
    document.getElementById('inp').value +=8;
}
function nine() {
    document.getElementById('inp').value +=9;
}
function zero() {
    document.getElementById('inp').value +=0;
}
document.getElementById('ans').addEventListener('click', fun);
function clearInput(){
    document.getElementById('inp').value ="";
}
function clearonce(){
    let n = document.getElementById('inp').value;
        var str = n.toString();
        var newValueString = str.slice(0, -1);
        var newValue = parseInt(newValueString);
        document.getElementById('inp').value = newValue;
}
