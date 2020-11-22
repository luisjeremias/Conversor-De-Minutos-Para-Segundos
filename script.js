


function converter() {
let convert = document.querySelector('#convert').value;
Converted =  convert * 60;

 let result  = document.getElementById('result');
    if(convert == 1){
      result.innerHTML = convert + " minuto = " + Converted + " Segundos";
     
}else{
   result.innerHTML = convert + " minutos = " + Converted + " Segundos";
}
}

function clicker(buttonName) {
  if(buttonName.keyCode == 13){
 converter()
  
  }
}
