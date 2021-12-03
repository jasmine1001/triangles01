const sides = document.querySelectorAll('.side-input');
const CalculateBtn = document.querySelector('#Calculate-btn');
const outputE2 = document.querySelector('#output1');

function calculateArea(a,b,c) {
    const Area = (a+b+c) /2;
    const rr = (Area*((Area-a)*(Area-b)*(Area-c)));
    return rr;

}

function calculateAreaoftriangle(){
    const rr = calculateArea(Number(sides[0].value), Number(sides[1].value) ,Number(sides[2].value));
    const lengthOfArea = Math.sqrt(rr);
    console.log(lengthOfArea);
    outputE2.innerText = "The length of Area is " + lengthOfArea;

}

CalculateBtn.addEventListener('click', calculateAreaoftriangle);