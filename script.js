

let menu = document.querySelector(".menu");

let hiddenDivChild = document.querySelector(".hiddenDivChild");
let hiddenDiv= document.querySelector(".hiddenDiv");
let image= document.querySelector(".image");

let var2 = true ;




menu.addEventListener("click" , () => {



    if ( var2 === true ){
        hiddenDiv.style.display ="block";
        hiddenDiv.style.display ="flex";
        
        
        hiddenDivChild.style.display ="flex";
        
        image.style.marginTop ="70px";


        
        


        var2 = false ;
    }


    else {
        hiddenDiv.style.display ="none";
        hiddenDivChild.style.display ="none";
        image.style.marginTop ="250px";
        var2 = true ;
    }
}





 );


// if (window.matchMedia("(max-width : 375px )" ).matches) {
    
    
//     hiddenSearchBar.style.display = "none";
// }