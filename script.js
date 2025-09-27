let display= document.getElementById("display");
let btn=document.getElementById("basicbtns");
function appendValue(value){
        display.value +=value;
        
        }
        // function setOp(op){
        //     operator=op;
        //     display.value+=


        // }
function clearDisplay(){
            display.value="";
        }
function del(){
            display.value=display.value.slice(0,-1);
        }
function calculate(){
           display.value=eval(display.value);
        }

// currency convertor
let currency=document.getElementById("currency")
// currency.addEventListener("click",currencyConvert())
let calc= document.getElementById("calc");
function currencyConvert(){
    //  alert("btn clicked")
    

}
let adv=document.getElementById("currency")
let age=document.getElementById("currency")
