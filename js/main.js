// Dinamicko ucitavanje nav
let nizHref = ["#top", "#section_2", "#section_3", "#section_4", "https://bogdanv44.github.io/portfolio/"];
let nizText = ["Početna", "O nama", "Ciljevi", "Volontiraj", "Autor"];

let divNavigacija = document.querySelector("#navbarNav");

let ispisNav = '<ul class="navbar-nav ms-auto">';
for(let i = 0; i < nizHref.length; i++){
    if(i == nizHref.length - 2){
        ispisNav += `<li class="nav-item"><a class="nav-link custom-btn custom-border-btn btn" id="dugmeSpecijalno"
        href="${nizHref[i]}">${nizText[i]}</a></li>`;
    }
    else if(i == nizHref.length - 1){
        ispisNav += `<li class="nav-item"><a class="nav-link"
        href="${nizHref[i]}"><small>${nizText[i]}</small></a></li>`;
    }
    else{
        ispisNav += `<li class="nav-item"><a class="nav-link click-scroll"
        href="${nizHref[i]}">${nizText[i]}</a></li>`;
    }
}
ispisNav += '</ul>';
divNavigacija.innerHTML = ispisNav;

// Responzivnost predposlednjeg dugmeta menija putem jQuery-a 
if ($(window).width() < 991) {
    $("#dugmeSpecijalno").removeClass('ms-2');
}
else {
    $("#dugmeSpecijalno").addClass('ms-2');
}

// Dinamicko ucitavanje polja Dobrodosli
let nizIkonice = ["images/icons/hands.png", "images/icons/heart.png", "images/icons/receive.png", "images/icons/scholarship.png"];
let nizIkoniceAlt = ["postani_volonter", "cuvajmo_zemlju", "sirite_ljubav", "besplatna_edukacija"];

let nizNaslovi = ["Postani <strong>volonter</strong>", "<strong>Čuvajmo</strong> Zemlju", "Širite <strong>Ljubav</strong>", "<strong>Besplatna</strong> Edukacija"];

for(let i=0; i < nizIkonice.length; i++){
    var divPoljeDobrodosli = document.querySelector("#poljeDobrodosli");

    var createDiv = document.createElement("div");
    createDiv.setAttribute("class", "col-lg-3 col-md-6 col-12 mb-4 mb-lg-0");

    var createDiv2 = document.createElement("div");
    createDiv2.setAttribute("class", "featured-block d-flex justify-content-center align-items-center")

    var createDiv3 = document.createElement("div");
    createDiv3.setAttribute("class", "d-block")

    createDiv3.innerHTML = `<img src="${nizIkonice[i]}" class="featured-block-image img-fluid"
    alt="${nizIkoniceAlt[i]}"/>
    <p class="featured-block-tex mt-2 h4">${nizNaslovi[i]}</p>`;

    createDiv2.appendChild(createDiv3);
    createDiv.appendChild(createDiv2);
    divPoljeDobrodosli.appendChild(createDiv);

}

// Obrada forme
document.querySelector("#dugmePosalji_id").addEventListener("click", provera);

function provera() {
    var objImePrezime, objEmail, objSlobodnoVreme;

    objImePrezime = document.querySelector("#tbImePrezime");
     objEmail = document.querySelector("#tbEmail");
    objSlobodnoVreme = document.querySelector("#listaSlobodanSam");

    var brojacGresaka = 0;

    //provera za Ime i Prezime
    if (objImePrezime.value.length < 4) {
        objImePrezime.nextElementSibling.classList.add("prikazGreske");
        brojacGresaka++;
    }
    else {
        objImePrezime.nextElementSibling.classList.remove("prikazGreske");
    }

    //provera za Email adresu
    if (objEmail.value.indexOf("@") == -1) {
        objEmail.nextElementSibling.classList.add("prikazGreske");
        brojacGresaka++;
    }
    else {
        objEmail.nextElementSibling.classList.remove("prikazGreske");
    }

    //provera padajuce liste
    if (objSlobodnoVreme.options[objSlobodnoVreme.options.selectedIndex].value == "0") {
        objSlobodnoVreme.parentElement.parentElement.lastElementChild.classList.add("prikazGreske");
        brojacGresaka++;
    }
    else {
        objSlobodnoVreme.parentElement.parentElement.lastElementChild.classList.remove("prikazGreske");
    }

    if (brojacGresaka == 0) {
        document.querySelector("#ispisProvere").innerHTML = "Hvala Vam što ste Dobro Srce. Naš tim će Vas uskoro kontaktirati!"
    }
    else {
        document.querySelector("#ispisProvere").innerHTML = "";
    }

}

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

// Broj karaktera - poljeKomentar
document.querySelector("#poljeKomentar").addEventListener("keyup", function () {
    var komentar = document.querySelector("#poljeKomentar");
    var vrednostKomentar = komentar.value;
    var brojKaraktera = vrednostKomentar.length;

    if (brojKaraktera <= 200) {
        komentar.classList.remove('border-danger', 'border', 'border-3');
        var ostatakKaraktera = 200 - brojKaraktera;
        document.querySelector("#brojKaraktera").innerHTML = ostatakKaraktera;
    }
    else {
        komentar.value = vrednostKomentar.substring(0, 201);
        komentar.classList.add('border-danger', 'border', 'border-3');
    }
})
// Animacije
$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft').each(function(i){

            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
    
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
    
            }
        });
    });
});
    