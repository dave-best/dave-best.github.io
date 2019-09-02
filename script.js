function one(e){

calculator.display.value += e
}


function operate(f){
 calculator.display.value += f
}


function fire(){
  calculator.display.value = ""
}

function equals(){
  calculator.display.value=eval(calculator.display.value)
}