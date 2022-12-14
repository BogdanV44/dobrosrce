// Dinamicka ucitavanje padajuce liste
var nizSlobodanSam = new Array("Slobodan sam samo vikendom", "Slobodan sam svaki dan");
var nizVrednostSlobodanSam = new Array("SV", "SS");

var tagSelect = document.createElement("select");
tagSelect.setAttribute("id", "listaSlobodanSam");
tagSelect.setAttribute("class", "form-control");

var tagIzborPrvi = document.createElement("option");
tagIzborPrvi.setAttribute("value", "0");
var contentIzborPrvi = document.createTextNode("Izaberite");

tagIzborPrvi.appendChild(contentIzborPrvi);
tagSelect.appendChild(tagIzborPrvi);

for(let i = 0; i < nizSlobodanSam.length; i++){
    var tagIzborOstali = document.createElement("option");
    tagIzborOstali.setAttribute("value", nizVrednostSlobodanSam[i]);

    var contentIzborOstali = document.createTextNode(nizSlobodanSam[i]);

    tagIzborOstali.appendChild(contentIzborOstali);
    tagSelect.appendChild(tagIzborOstali);
}

document.querySelector("#ddLista").appendChild(tagSelect);

document.querySelector("#dugmePosalji_id").addEventListener("click", function(){
    var objSlobodnoVreme = document.querySelector("#listaSlobodanSam");
});

//Obrada forme
document.querySelector("#dugmePosalji_id").addEventListener("click", provera);

function provera(){
    var objImePrezime, objEmail, objSlobodnoVreme;

    objImePrezime = document.querySelector("#tbImePrezime");
    objEmail = document.querySelector("#tbEmail");
    objSlobodnoVreme = document.querySelector("#listaSlobodanSam");

    var brojacGresaka = 0;

    //provera za Ime i Prezime
    if(objImePrezime.value.length < 4){
        objImePrezime.nextElementSibling.classList.add("prikazGreske");
        brojacGresaka++;
    }
    else{
        objImePrezime.nextElementSibling.classList.remove("prikazGreske");
    }
    
    //provera za Email adresu
    if(objEmail.value.indexOf("@") == -1){
        objEmail.nextElementSibling.classList.add("prikazGreske");
        brojacGresaka++;
    }
    else{
        objEmail.nextElementSibling.classList.remove("prikazGreske");
    }

    //provera padajuce liste
    if(objSlobodnoVreme.options[objSlobodnoVreme.options.selectedIndex].value == "0"){
        objSlobodnoVreme.parentElement.parentElement.lastElementChild.classList.add("prikazGreske");
        brojacGresaka++;
    }
    else{
        objSlobodnoVreme.parentElement.parentElement.lastElementChild.classList.remove("prikazGreske");
    }

    if(brojacGresaka == 0){
        document.querySelector("#ispisProvere").innerHTML = "Hvala Vam što ste Dobro Srce. Naš tim će Vas uskoro kontaktirati!"
    }

}

// Broj karaktera - poljeKomentar
document.querySelector("#poljeKomentar").addEventListener("keyup", function(){
    var komentar = document.querySelector("#poljeKomentar");
    var vrednostKomentar = komentar.value;
    var brojKaraktera = vrednostKomentar.length;

    if(brojKaraktera <= 200){
        komentar.classList.remove('border-danger');
        var ostatakKaraktera = 200 - brojKaraktera;
        document.querySelector("#brojKaraktera").innerHTML = ostatakKaraktera;
    }
    else{
        komentar.value = vrednostKomentar.substring(0, 200);
        komentar.classList.add('border-danger');
    }
})