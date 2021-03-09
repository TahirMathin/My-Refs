function compute();

{
 
 var p = document.getElementById("Principle").value;

 if(P<=0)


{

alert('Please Enter a positive number greater than 0');
document.getElementById("Principle").focus();
document.getElementById("Principle").click();
return null;

}

var r = document.getElementById("Rate").value;

var y = document.getElementById('Years').value;

console.log('Y');

var interest = P*R*Y/100;

console.log(P*R); 

var ndate = new Date();

newdate = ndate.getFullYear();

newdate+= parseInt('Y')

document.getElementById("result").InnerHTML - "<br>" + "<br>"

"+" 'If you deposit' + "<span class-'highlight'>" "+p+" '</span>' '+''<br>' '+' 'at the rate of' + "<span class='highlight'>" +r+ '</span>' +'%' + '<br>' + 
'you will recive an amount of' + "<span class='highlight'>"+interest+ '<span>' + 'in the year' + "<span class='highlight'>"+newdate +'</span>';


}


function Ratechange()

{
  
  var rchange = 
  document.getElementById('Rate').value;
  document.getElementById('rate-displayer').InnerHTML = rchange + '%';


}