//let timerId = setTimeout(sayHello, 3000); // сначала функция , потмо через скольк овыполинится делай
//clearTimeout(timerId); // останвока 

/*
let timerId = setInterval(sayHello, 3000); //будет повторятся каждые 3 секунды 

function sayHello (){
        console.log('hello world');
}
*/
/*
let timerId = setTimeout(function log() { // возможен такой вариант если функция длительная  
    console.log ("Hello");
    setTimeout(log, 2000);
});
*/
let btn = document.querySelector(".btn"),
    elem = document.querySelector(".box");

function myAnimation () { 
    let pos = 0 ; // изначальная позиция 
    let id = setInterval(frame, 10); // каждый 10 секунд запускаем 
    function frame () { 
        if (pos == 300){ // если будет 300 останавливаем таймер 
            clearInterval();
        } else { // увелевчени движения 
            pos++;
            elem.style.top = pos + "px"; //верх 
            elem.style.left = pos + "px"; // лево
        }
    }
}
btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector(".btn-block"),
    btns = document.getElementsByTagName("button");

btnBlock.addEventListener("click", function(event){
   // if (event.target && event.target.tagName == 'BUTTON'){
    if (event.target && event.target.matches ("button.first")) {
        console.log ("Hello");
    }
});