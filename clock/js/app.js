  

setInterval(function(){ 

 let san=6 * new Date().getSeconds();
  let dy=6* new Date().getMinutes() + san/60;
  let sat= 30 * (new Date().getHours() %12) + dy/12;

 document.getElementById("saat").style.transform = "rotate("+sat+"deg)";
 document.getElementById("deyqe").style.transform = "rotate("+dy+"deg)";
 document.getElementById("saniye").style.transform = "rotate("+san+"deg)";
 
 }, 100);