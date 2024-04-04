

let menu = document.querySelector(".menu");

let hiddenDivChild = document.querySelector(".hiddenDivChild");
let hiddenDiv= document.querySelector(".hiddenDiv");

let var2 = true ;

menu.addEventListener("click" , () => {


    if ( var2 === true ){
        hiddenDiv.style.display ="block";
        hiddenDiv.style.display ="flex";
        hiddenDivChild.style.display ="block";
        
        hiddenDivChild.style.display ="flex";

        


        var2 = false ;
    }


    else {
        hiddenDiv.style.display ="none";
        hiddenDivChild.style.display ="none";
        var2 = true ;
    }


} );