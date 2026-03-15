const text="Frontend Developer"; 
let i=0; function typing(){ 
    if(i<text.length){ 
        document.getElementById("frontend").innerHTML+=text.charAt(i); 
        i++; setTimeout(typing,90);
    } 
} 
typing();
