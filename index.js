var dice1Number;
var dice1ImgPath;
var dice1Img;
var dice2Number;
var dice2ImgPath;
var dice2Img;

function rollTheDice(){
    dice1Number= Math.floor(Math.random()*6)+1;
    dice1ImgPath="images/dice"+dice1Number+".png";
    dice1Img= document.querySelectorAll("img")[0];
    dice1Img.setAttribute("src",dice1ImgPath);

    dice2Number= Math.floor(Math.random()*6)+1;
    dice2ImgPath="images/dice"+dice2Number+".png";
    dice2Img= document.querySelectorAll("img")[1];
    dice2Img.setAttribute("src",dice2ImgPath);

    if(dice1Number===dice2Number){
        document.querySelector("div h1").textContent="Draw!";
    }
    else if(dice1Number<dice2Number){
        document.querySelector("div h1").textContent="Player 2 Won!";
        document.querySelectorAll("p")[1].textContent="Player 2 🚩";
    }
    else{
        document.querySelector("div h1").textContent="Player 1 Won!";
        document.querySelectorAll("p")[0].textContent="Player 1 🚩";
    }
}

rollTheDice();