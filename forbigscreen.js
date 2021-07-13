let encompass = document.getElementsByClassName('encompass');
for(let i=0; i<encompass.length; i++){
    console.log(i);
    let encompassheight = encompass[i].offsetHeight;
    let encompasswidth = encompass[i].offsetWidth;
    
let otherimage = encompass[i].getElementsByClassName("otherimage");
let xx =20;
let yy =20;
let xleft=20;
for(let i=0; i<otherimage.length; i++){
//arrange

let otherimageheight = otherimage[i].offsetHeight;
let otherimagewidth = otherimage[i].offsetWidth;

if(encompasswidth-xx > otherimagewidth &&
    encompassheight-yy > otherimageheight){
otherimage[i].style.position="absolute";
otherimage[i].style.left=xx+"px";
otherimage[i].style.top=yy+"px";

xx = xx+otherimagewidth+20;

yi(otherimage[i], otherimageheight, otherimagewidth,
    encompasswidth, encompassheight, xx, yy);
    
}

else if(encompasswidth-xx < otherimagewidth &&
    encompassheight-yy > otherimageheight){

    otherimage[i].style.position="absolute";
    
    xx = xx-(otherimagewidth+20);

    otherimage[i].style.left=xx+"px";
  
    
    yy = yy+otherimageheight+20;
    otherimage[i].style.top=yy+"px";
    yi(otherimage[i], otherimageheight, otherimagewidth,
        encompasswidth, encompassheight,xx, yy);
}

else if((encompasswidth-xx < otherimagewidth &&
    encompassheight-yy < otherimageheight) ||
    (encompasswidth-xx > otherimagewidth &&
        encompassheight-yy < otherimageheight )){

            if(xx<=20 &&
                yy>20){
                    console.log(i)
                    otherimage[i].style.position="absolute";
                
                   
                    console.log(xx);
                
                    yy = yy-(otherimageheight+20);
                    console.log(yy);
                    otherimage[i].style.left=xx+"px"
                    otherimage[i].style.top=yy+"px";
                }else{
        otherimage[i].style.position="absolute";
    
        otherimage[i].style.top=yy+"px";
        xx = xx-(otherimagewidth+20);
        otherimage[i].style.left=xx+"px";
       
                }
        yi(otherimage[i], otherimageheight, otherimagewidth,
            encompasswidth, encompassheight, xx, yy);
        
}




}
encompass[i].className +=" minheight";
 
}

function yi(otherimage, otherimageheight, otherimagewidth, 
    encompasswidth, encompassheight, xx, yy){
        let i=1;
    setInterval(function(){
console.log(encompasswidth-otherimagewidth+"--"+otherimagewidth )
if(encompasswidth-xx < otherimagewidth &&
    encompassheight-yy > otherimageheight){
        console.log(yy)
    otherimage.style.position="absolute";
    
    
   // otherimage.style.transform="translateX(0"+"px"+")";
  
    
    let oo= otherimageheight+20;
    if(i>1){
    otherimage.style.transform +=" translateY("+oo+"px"+")";}
    else{
        otherimage.style.transform =" translateY("+oo+"px"+")";   
    }
yy=yy+oo;
xx=xx-(otherimagewidth+20)

}

else if((encompasswidth-xx < otherimagewidth &&
    encompassheight-yy < otherimageheight) ||
    (encompasswidth-xx > otherimagewidth &&
        encompassheight-yy < otherimageheight && 
        xx>20 )){
            console.log(yy)
            
           
        otherimage.style.position="absolute";
    
        //otherimage.style.top=otherimageheight+"px";
       // otherimage.style.transform="translateY(0"+"px"+")";
        
       // otherimage.style.left=otherimagewidth+"px";
      
       let oo = otherimagewidth+20;
       if(i>1){
        otherimage.style.transform +=" translateX(-"+oo+"px"+")";
        
       }else{
        otherimage.style.transform =" translateX(-"+oo+"px"+")";
       }
       xx=xx-oo;
        
}

   else if(xx<=20 &&
        yy!=20){
            console.log(i)
            otherimage.style.position="absolute";
        
           console.log(xx+"here");
           console.log(yy);
           
            
        
            //yy = yy-(otherimageheight+20);
           // console.log(yy);
            //otherimage[i].style.left=xx+"px"
            //otherimage[i].style.top=yy+"px";
            let oo = otherimageheight+20
            if(i>1){
            otherimage.style.transform +="translateY(-"+oo+"px"+")";
            }else{
                otherimage.style.transform ="translateY(-"+oo+"px"+")";
            }
            // otherimage.style.left=otherimagewidth+"px";
             //otherimage.style.transform +=" translateX(0"+"px"+")";
             yy= yy-oo;
             xx=xx+(otherimagewidth+20);
        }

else if(encompasswidth-xx > otherimagewidth &&
    encompassheight-yy > otherimageheight){
        console.log(yy)
otherimage.style.position="absolute";
//otherimage.style.left=otherimagewidth+"px";
let oo =otherimagewidth+20;
if(i>1){
otherimage.style.transform +="translateX("+oo+"px"+")";
//otherimage.style.top=otherimageheight+"px";
//otherimage.style.transform +=" translateY("+otherimageheight+"px"+")";
}else{
    otherimage.style.transform +="translateX("+oo+"px"+")";
}
xx=xx+oo;
 }
 i++;
    }, 1000)
   



}