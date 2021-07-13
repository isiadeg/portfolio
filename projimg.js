let encompass = document.getElementsByClassName('encompass');
for(let i=0; i<encompass.length; i++){
    
    console.log(i);
    let encompassheight = encompass[i].offsetHeight;
    let encompasswidth = encompass[i].offsetWidth;

    console.log(`encompasswidth = ${encompasswidth}, /n encompassheight = ${encompassheight}`)

    let otherimage = encompass[i].getElementsByClassName('otherimage');
    let middle = encompass[i].getElementsByClassName('middle')[0];
    let xx=20;
    let yy=20;
    let minusxx =20;
    let minusyy=20;
    let otherimagewidth = otherimage[0].offsetWidth+20;
    let otherimageheight = otherimage[0].offsetWidth+20;
    let touseencompassheight = ((otherimagewidth+15) * (otherimageheight+(15)) * otherimage.length)/encompasswidth;
    encompass[i].style.height = touseencompassheight+"px";
    
    let yincrease =1;
    let xdecrease =1;
    let ydecrease = 1;
    for(let i=0;i<otherimage.length; i++ ){
    
    console.log(`This image's width = ${otherimagewidth} 
    and this image's height = ${otherimageheight}
    and to use overall height = ${touseencompassheight}
    since we have ${otherimage.length} images`)
    console.log(encompasswidth-xx)
if((encompassheight-minusyy<otherimageheight || minusyy == 20)&&
    (encompasswidth-minusxx<otherimagewidth || minusxx == 20)&&
    (encompasswidth-xx>=otherimagewidth)&&
    (encompassheight-yy>otherimageheight)){
     
        otherimage[i].style.left=`${xx}px`;
        otherimage[i].style.top=`${yy}px`;
    xx = xx + otherimagewidth;
            shifter(otherimage[i], xx, yy, minusxx, minusyy, encompasswidth, encompassheight,
                otherimagewidth, otherimageheight, middle);
    }
    else if((encompassheight-minusyy<otherimageheight || minusyy == 20)&&
    (encompasswidth-minusxx<otherimagewidth || minusxx == 20)&&
    (encompasswidth-xx<otherimagewidth)&&
    (encompassheight-yy>otherimageheight)){
        otherimage[i].style.left=`${xx-otherimagewidth}px`;
        if(yincrease == 1){
            yy = yy+otherimageheight;
            otherimage[i].style.top=`${yy}px`;
            yy = yy+otherimageheight;
            yincrease++;
            let tousey = yy-otherimageheight;
            
        shifter(otherimage[i], xx, tousey, minusxx, minusyy, encompasswidth, encompassheight,
            otherimagewidth, otherimageheight, middle);
        }else{
            otherimage[i].style.top=`${yy}px`;
            yy = yy+otherimageheight;
            
        shifter(otherimage[i], xx, yy, minusxx, minusyy, encompasswidth, encompassheight,
            otherimagewidth, otherimageheight, middle);
        }
        
        

    }
    
    else if((encompassheight-minusyy<otherimageheight || minusyy == 20)&&
    (encompasswidth-minusxx>=otherimagewidth || minusxx == 20)&&
    (encompasswidth-xx<otherimagewidth || encompasswidth-xx>otherimagewidth)&&
    (encompassheight-yy<otherimageheight)){
        otherimage[i].style.top=`${yy-otherimageheight}px`;
        if(xdecrease == 1){
            xx = xx-otherimagewidth;
            xx = xx-otherimagewidth;
            otherimage[i].style.left=`${xx}px`;
            xx = xx-otherimagewidth;
            xdecrease++;
            minusxx = minusxx+otherimagewidth;
            minusxx = minusxx+otherimagewidth;
        shifter(otherimage[i], xx, yy, minusxx, minusyy, encompasswidth, encompassheight,
            otherimagewidth, otherimageheight, middle);
        }else{
            otherimage[i].style.left=`${xx}px`;
            xx = xx-otherimagewidth;
            minusxx = minusxx+otherimagewidth;
        shifter(otherimage[i], xx, yy, minusxx, minusyy, encompasswidth, encompassheight,
            otherimagewidth, otherimageheight, middle);
        }
        
        

    }

    
    else if((encompassheight-minusyy>otherimageheight || minusyy == 20)&&
    (encompasswidth-minusxx<otherimagewidth)&&
    (encompasswidth-xx<otherimagewidth || encompasswidth-xx>otherimagewidth)&&
    (encompassheight-yy<otherimageheight || encompassheight-yy>otherimageheight)){
        otherimage[i].style.left=`${xx+otherimagewidth}px`;
        if(ydecrease == 1){
            yy = yy-otherimageheight;
            yy = yy-otherimageheight;
            otherimage[i].style.top=`${yy}px`;
            yy = yy-otherimagewidth;
            ydecrease++;
            minusyy = minusyy+otherimageheight;
            minusyy = minusyy+otherimageheight;
            
        shifter(otherimage[i], xx, yy, minusxx, minusyy, encompasswidth, encompassheight,
            otherimagewidth, otherimageheight, middle);
        }else{
            otherimage[i].style.top=`${yy}px`;
            yy = yy-otherimageheight;
            minusyy = minusyy+otherimageheight;
        shifter(otherimage[i], xx, yy, minusxx, minusyy, encompasswidth, encompassheight,
            otherimagewidth, otherimageheight, middle);
        }
        
        

    }

    }
}

function shifter(image, xx, yy, minusxx, minusyy, encompasswidth, encompassheight,
   otherimagewidth, otherimageheight, middle){
       let yincrease = 1;
       let xdecrease =1;
       let ydecrease =1;
       let firstime =1;
    setInterval( function(){
        console.log(encompasswidth-xx)
        console.log(encompassheight-yy)
   if(image.className.includes("centrhhhi")){
image.className = image.className.replace(/\bcentri\b/g, "");
image.style.transform +=`translateX(${otherimagewidth}px)`;

xx = xx + otherimagewidth;
   }else{
       if(xx==-1000  && yy == 20 ){

        image.className += " centri";
        
       middle.getElementsByClassName("middlemiddle")[0].style.animation =`kuru 1s ease-out forwards`;
       setTimeout(function(){
        middle.getElementsByClassName("middlemiddle")[0].innerHTML = image.innerHTML;
             middle.getElementsByClassName("middlemiddle")[0].style.animation =`kuruga 2s ease-in forwards `},500);
        
        
       }else{
        if((encompassheight-minusyy<otherimageheight || minusyy == 20)&&
        (encompasswidth-minusxx<otherimagewidth || minusxx == 20)&&
        (encompasswidth-xx>=otherimagewidth)&&
        (encompassheight-yy>otherimageheight)){
          
console.log(firstime);

console.log(minusxx);
            if(firstime==1 && minusxx != 20){
            image.style.transform +=`translateX(${otherimagewidth}px)`;
            xx=otherimagewidth+20;
            yy=20;
            minusxx=20;
            minusyy=20;
            yincrease=1;
            ydecrease=1;
            xdecrease=1;
            image.className += " centri";
            middle.getElementsByClassName("middlemiddle")[0].style.animation =`kuru 1s ease-out forwards`;
            setTimeout(function(){
             middle.getElementsByClassName("middlemiddle")[0].innerHTML = image.innerHTML;
                  middle.getElementsByClassName("middlemiddle")[0].style.animation =`kuruga 2s ease-in forwards `},500);
           
console.log("condition met");
firstime++;
        xx = xx + otherimagewidth;
        
            }else{
                if(image.className.includes("centri")){
                    image.className = image.className.replace(/\bcentri\b/g, "");
                   
                       }
                image.style.transform +=`translateX(${otherimagewidth}px)`;
                xx = xx + otherimagewidth;
            }
        }
        else if((encompassheight-minusyy<otherimageheight || minusyy == 20)&&
        (encompasswidth-minusxx<otherimagewidth || minusxx == 20)&&
        (encompasswidth-xx<otherimagewidth)&&
        (encompassheight-yy>otherimageheight)){
            
            if(yincrease == 1){
                yy = yy+otherimageheight;
                image.style.transform +=`translateY(${otherimageheight}px)`;
                yy = yy+otherimageheight;
                yincrease++;
                
           
            }else{
                image.style.transform +=`translateY(${otherimageheight}px)`;
                yy = yy+otherimageheight;
                
            }
        }


        
    else if((encompassheight-minusyy<otherimageheight || minusyy == 20)&&
    (encompasswidth-minusxx>=otherimagewidth || minusxx == 20)&&
    (encompasswidth-xx<otherimagewidth || encompasswidth-xx>otherimagewidth)&&
    (encompassheight-yy<otherimageheight)){
        
        if(xdecrease == 1){
            xx = xx-otherimagewidth;
            xx = xx-otherimagewidth;
            minusxx = minusxx+otherimagewidth;
            image.style.transform +=`translateX(-${otherimagewidth}px)`;
            xx = xx-otherimagewidth;
            xdecrease++;
            
            minusxx = minusxx+otherimagewidth;
        }else{
            image.style.transform +=`translateX(-${otherimagewidth}px)`;
            xx = xx-otherimagewidth;
            minusxx = minusxx+otherimagewidth;
        
        

    }}

    
    else if((encompassheight-minusyy>otherimageheight || minusyy == 20)&&
    (encompasswidth-minusxx<otherimagewidth)&&
    (encompasswidth-xx<otherimagewidth || encompasswidth-xx>otherimagewidth)&&
    (encompassheight-yy<otherimageheight || encompassheight-yy>otherimageheight)){
        
        if(ydecrease == 1){
            yy = yy-otherimageheight;
            yy = yy-otherimageheight;
            minusyy = minusyy+otherimageheight;
            image.style.transform +=`translateY(-${otherimageheight}px)`;
            yy = yy-otherimagewidth;
            ydecrease++;
           
            minusyy = minusyy+otherimageheight;
            firstime =1;
    }else{
            image.style.transform +=`translateY(-${otherimageheight}px)`;
            yy = yy-otherimageheight;
            minusyy = minusyy+otherimageheight;
            xx=otherimagewidth;
            firstime =1;
        }
        
        

    }



    }
    }

}, 3000)
}