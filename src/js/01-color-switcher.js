//funkcja kolor losowy
function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

var x;
//funkcja zmiana tła 
function zmianaKoloruTla(){

    document.body.style.backgroundColor=getRandomHexColor()
x= setTimeout(zmianaKoloruTla,1000)

}    
//wybór przycisków 
const startButton =document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');


//wlaczanie przycisku start- zmiany koloru
startButton.addEventListener('click',  function() {
this.disabled=true            // nieaktywny przycisk start
stopButton.disabled= false   // aktywny stop przycisk
 zmianaKoloruTla()
}
)

//wlaczanie przycisku stop
stopButton.addEventListener('click',  function() {
    this.disabled=true            // nieaktywny przycisk stop
    startButton.disabled= false   // aktywny start przycisk
   clearTimeout(x)
    }
    )


