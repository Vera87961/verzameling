let bestelmaat = 0;
let kleur = "";
 
function colorbg(){
    let x = document.getElementById("selectid");
	kleur= x.value;
    document.select.style.backgroundColor = kleur;
}

function maatKlik(element, maat){
    bestelmaat = maat;
    divs = document.getElementsByClassName("grid-item");
    for (var i = 0; i < divs.length; i++) { 
        divs[i].style.backgroundColor = "#FFFFFF";

    }
    element.style.backgroundColor = "#808080";
}

function bestel() {
    naam = document.getElementById("naam").innerHTML;
    prijs = document.getElementById("prijs").innerHTML;
    window.location.href = '/afrekenpagina/afrekenpagina.php?naam='+ naam +'&prijs=' + prijs +'&maat='+bestelmaat + '&kleur='+kleur;
}
