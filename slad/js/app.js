
// let sekiller=["IMG_0533.JPG","IMG_0911.JPG","IMG_1197.JPG","IMG_1207.JPG","01.JPG","02.JPG","03.JPG","04.JPG"]

let lampa=1;
let emel=document.querySelector("#ireli");

emel.addEventListener("click",function(){
     if (lampa<6) {
      lampa++;
 document.querySelector(".card-img-top").setAttribute('src','image/0'+lampa+'.jpg ' );


}
else {
	lampa=1;
	document.querySelector(".card-img-top").setAttribute('src','image/0'+lampa+'.jpg ' );

}

} )


let azal=6;
let dey=document.querySelector("#geri");

dey.addEventListener("click",function(){
     if (azal<1) {
    
azal=6;
 
}
else {
	document.querySelector(".card-img-top").setAttribute('src','image/0'+azal+'.jpg ' );
	azal--;
}

} )
 

