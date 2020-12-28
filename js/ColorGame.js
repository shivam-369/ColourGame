var colors = new Array();
var divs = document.querySelectorAll("div div");
var selected = Math.trunc(6 * Math.random());
var h1 = document.getElementsByTagName("h1")[0];
var head = document.getElementById("head");
var again = document.querySelector("#try") ;
var easy = document.getElementById("easy");
var newColors = document.querySelector("span") ;
var mode = "hard";
var number = 18 ;
var hard = document.querySelector("#hard")


hard.classList.add("selected");
fillColor();
newColors.addEventListener("click",fillColor);

easy.addEventListener("click" , function(){
    mode = "easy" ;
    this.classList.add("selected");
    hard.classList.remove("selected");
    fillColor() ;
})

hard.addEventListener("click" , function(){
     mode = "hard" ;
     this.classList.add("selected");
     easy.classList.remove("selected");
     fillColor() ;
})

function addToColors(mode)
{
    while(colors.length > 0)
    {
        colors.shift();
    }
    if(mode === "easy")
    {
        number = 9 ;
    }else {
        number = 18 ;
        }
    selected = Math.floor(number/3 * Math.random());
    while(colors.length != number)
    {
        var temp = Math.floor(255 * Math.random());
        if(colors.indexOf(temp) === -1)
        {
            colors.push(temp);
        }
    }
}

function Event()
{    this.style.display = "block";

     if(this.style.background == divs[selected].style.background){
          for( var j = 0;j < number/3 ;j++)
           {    divs[j].style.display = "block";
                divs[j].style.background = this.style.background;
           }
           head.style.background = this.style.background ;
           again.textContent = 'Correct!';
           newColors.textContent = "PLAY  AGAIN?"
           easy.style.marginLeft = "10%"
     }else {
            again.innerHTML = "TRY AGAIN" ;
            this.classList.toggle("wrong");
            this.style.display ="none" ;
            easy.style.marginLeft = "10px";
        }
        again.style.color = "black" ;
}

function addEvent()
{
        for( var i = 0 ; i < number/3 ; i++)
        {
            divs[i].style.background = "rgb("+colors[3*i] +","+ colors[3*i + 1]+","+colors[3*i + 2]+")";
            divs[i].addEventListener("click",Event);
        }
        again.textContent = '';
        newColors.textContent = "NEW COLORS";
}

function fillColor(){
    head.style.background = "rgb(40,150,255)";
    addToColors(mode);
    addEvent();
    h1.textContent = divs[selected].style.background.toUpperCase();
    for(var i = number/3 ; i < divs.length ; i++)
    {
        divs[i].style.display = "none";
        //divs[i].removeEventListener("click",Event)
    }
}


