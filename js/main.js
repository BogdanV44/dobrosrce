// DINAMICKI ISPIS
// Dinamicko ispisivanje nav
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

// Sekcije Pocetna
let nizPocetnaImg = ["images/slide/volunteer-helping-with-donation-box.jpg","images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg",
"images/slide/medium-shot-people-collecting-donations.jpg"]
let nizPocetnaAlt = ["donationbox", "volonter_donira", "prikupljanje_donacija"]
var sekcijaPocetna = document.querySelector("#hero-slide");
var contentPocetna = `<div class="carousel-inner">
<div class="carousel-item active">
    <img src="${nizPocetnaImg[0]}" class="carousel-image img-fluid" alt="${nizPocetnaAlt[0]}">
    
    <div class="carousel-caption d-flex flex-column justify-content-end">
        <h1>budi Dobro Srce</h1>
        
        <p>Postani jedan od volontera</p>
    </div>
</div>

<div class="carousel-item">
    <img src="${nizPocetnaImg[1]}" class="carousel-image img-fluid" alt="${nizPocetnaAlt[1]}">
    
    <div class="carousel-caption d-flex flex-column justify-content-end">
        <h1>Neprofitabilno</h1>
        
        <p>Podržavani od strane građana</p>
    </div>
</div>

<div class="carousel-item">
    <img src="${nizPocetnaImg[2]}" class="carousel-image img-fluid" alt="${nizPocetnaAlt[2]}">
    
    <div class="carousel-caption d-flex flex-column justify-content-end">
        <h1>Humanost</h1>
        
        <p>Recite za nas Vašim prijateljima</p>
    </div>
</div>
</div>

<button class="carousel-control-prev" type="button" data-bs-target="#hero-slide" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>

<button class="carousel-control-next" type="button" data-bs-target="#hero-slide" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>`;
sekcijaPocetna.innerHTML = contentPocetna;

// Dinamicko ispisivanje polja Dobrodosli
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

// Sekcije O Nama
let nizOnamaNaslovi = ["Naša priča", "Naša Misija"]
let nizOnamaTekst = ["Udruženje Dobrog Srca, Neprofitabilno Udruženje",
"Počeli smo kao mala grupa, tokom godina sve više i više ljudi se saoseća sa našom misijom.<br/><br/>Savez je organizovan na teritorijalnom principu i u njegovom sastavu deluje 45 opštinske, međuopštinske i gradske organizacije, od kojih 29 u centralnoj Srbiji, 3 na Kosovu i Metohiji i 13 u Vojvodini. Osim toga, u okviru republičke organizacije deluje i Savez slepih Vojvodine.",
"Pomoći svim nezbrinutim članovima našeg društva kroz:"]
var sekcijaONama = document.querySelector("#section_2");
var contentONama = `<div class="container">
    <div class="row">

        <div class="col-lg-6 col-12 mb-5 mb-lg-0">
            <img src="images/group-people-volunteering-foodbank-poor-people.jpg" class="custom-text-box-image img-fluid" alt="">
        </div>

        <div class="col-lg-6 col-12">
            <div class="custom-text-box">
                <h2 class="mb-2">${nizOnamaNaslovi[0]}</h2>

                <h5 class="mb-3">${nizOnamaTekst[0]}</h5>

                <p class="mb-0">${nizOnamaTekst[1]}</p>
            </div>
            
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                    <div class="custom-text-box mb-lg-0">
                        <h5 class="mb-3">${nizOnamaNaslovi[1]}</h5>

                        <p>${nizOnamaTekst[2]}</p>

                        <ul class="custom-list mt-2">
                            <li class="custom-list-item d-flex">
                                <i class="bi-check custom-text-box-icon me-2"></i>
                                Prosvetni rad
                            </li>

                            <li class="custom-list-item d-flex">
                                <i class="bi-check custom-text-box-icon me-2"></i>
                                Fizički rad
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                    <div class="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                        <div class="counter-thumb"> 
                            <div class="d-flex">
                                <span class="counter-number" data-from="1" data-to="2009" data-speed="1000"></span>
                                <span class="counter-number-text"></span>
                                <div id="counter"></div>
                            </div>

                            <span class="counter-text">Osnovano</span>
                        </div> 

                        <div class="counter-thumb mt-4"> 
                            <div class="d-flex">
                                <span class="counter-number" data-from="1" data-to="7" data-speed="1000"></span>
                                <span class="counter-number-text">m</span>
                            </div>

                            <span class="counter-text">Donacije</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>`;
sekcijaONama.innerHTML = contentONama;

// Sekcije Co Founder

let ispisIkoniceHref = ["https://twitter.com/", "https://www.facebook.com/", "https://www.instagram.com/"];
let ispisIkoniceKlasa = ["social-icon-link bi-twitter", "social-icon-link bi-facebook", "social-icon-link bi-instagram"];
var sekcijaCoFounder = document.querySelector("#coFounder");
var contentCoFounder = `<div class="container">
    <div class="row">

        <div class="col-lg-6 col-md-5 col-12">
            <img src="images/portrait-volunteer-who-organized-donations-charity.jpg" class="about-image ms-lg-auto bg-light shadow-lg img-fluid" alt="">
        </div>

        <div class="col-lg-5 col-md-7 col-12">
            <div class="custom-text-block">
                <h2 class="mb-0">Sandy Chan</h2>

                <p class="text-muted mb-lg-4 mb-md-4">Co-Founding Partner</p>

                <p class="fst-italic">"In goal to make it easy for good-hearted people to be able to help those who need it we opened "Udruženje Dobrog Srca"."</p>

                <p class="fst-italic">"U cilju da olakšamo dobronamernim ljudima da pomognu onima kojima je to potrebno otvorili smo "Udruženje Dobrog Srca"."</p>

                <ul class="social-icon mt-4">
                    <li class="social-icon-item">
                        <a href="${ispisIkoniceHref[0]}" class="${ispisIkoniceKlasa[0]}"></a>
                    </li>

                    <li class="social-icon-item">
                        <a href="${ispisIkoniceHref[1]}" class="${ispisIkoniceKlasa[1]}"></a>
                    </li>

                    <li class="social-icon-item">
                        <a href="${ispisIkoniceHref[2]}" class="${ispisIkoniceKlasa[2]}"></a>
                    </li>
                </ul>
            </div> 
        </div>
    </div>
    </div>`;
sekcijaCoFounder.innerHTML = contentCoFounder;

// Sekcija Nasi Ciljevi
let nizCiljeviSlike = ["images/causes/group-african-kids-paying-attention-class.jpg",
    "images/causes/poor-child-landfill-looks-forward-with-hope.jpg",
    "images/causes/african-woman-pouring-water-recipient-outdoors.jpg"];

let nizCiljeviNaslov = ["Edukovanje Dece", "Pomoć Siromašnima", "Obezbeđivanje pijuće vode"];

let nizCiljeviOpis = ["Organizovane edukacije za siromašnu decu, u sredine u kojoj će se osećati bezbedno.",
    "Nabavka stvari neophodnih za život. Kupovina svezaka, pribora i knjiga za mališane.",
    "Obezbeđujemo siromašnim naseljima bezbednu vodu."];

let nizCiljeviSakupljeno = ["150.000din", "230.000din", "350.000din"];
let nizCiljeviCilj = ["200.000din", "560.000din", "350.000din"];
let nizCiljeviProgress = ["75", "50", "100"];

for (let i = 0; i < nizCiljeviNaslov.length; i++ ){
    var sekcijaCiljevi = document.querySelector("#sekcijaCiljevi");
    sekcijaCiljevi.innerHTML += `<div class="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0 mx-auto">
        <div class="borderPlavi custom-block-wrap">
            <img src="${nizCiljeviSlike[i]}" class="custom-block-image img-fluid" alt="cilj${i}">

            <div class="custom-block">
                <div class="custom-block-body">
                    <h5 class="mb-3">${nizCiljeviNaslov[i]}</h5>

                    <p>${nizCiljeviOpis[i]}</p>

                    <div class="progress mt-4">
                        <div class="progress-bar w-${nizCiljeviProgress[i]}" role="progressbar" aria-valuenow="${nizCiljeviProgress[i]}" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div class="d-flex align-items-center my-2">
                        <p class="mb-0">
                            <strong>Skupljeno:</strong>
                            ${nizCiljeviSakupljeno[i]}
                        </p>

                        <p class="ms-auto mb-0">
                            <strong>Cilj:</strong>
                            ${nizCiljeviCilj[i]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

// Sekcija CallToAction
let nizCTATekst = ["Napravi razliku. <br> Sačuvaj živote.", "Postani volonter"];
var sekcijaCTA = document.querySelector("#cta");
var contentCTA = `<div class="col-lg-5 col-12 mx-auto d-flex">
    <h2 class="mb-0 mx-auto">${nizCTATekst[0]}</h2>
    </div>

    <div class="col-lg-5 col-12 d-flex">
        <a href="#section_4" class="custom-btn btn smoothscroll mx-auto">${nizCTATekst[1]}</a>
    </div>`;
sekcijaCTA.innerHTML = contentCTA;

// Dinamicki ispis Brzi Linkovi
var hrefBrziLinkovi = ["#", "#section_2", "#section_3", "#section_4",
"assets/DOKUMENTACIJA_fajl.pdf", "xml/sitemap.xml"];
var imeBrziLinkovi = ["Vrati se gore", "Naša priča", "Ciljevi", "Postani volonter" , "Dokumentacija", "Sitemap"];

var footerNav = document.querySelector("#brziLinkovi");
let navList = `<h5 class="site-footer-title mb-3">Brzi Linkovi</h5> <ul class="footer-menu">`;
    for (let i = 0; i < hrefBrziLinkovi.length; i++) {
        if (i >= hrefBrziLinkovi.length - 2){
            navList += `<li class="fw-bold footer-menu-item"><a href="${hrefBrziLinkovi[i]}" class="footer-menu-link" target="_blank">${imeBrziLinkovi[i]}</a></li>`;
        }
        else{
            navList += `<li class="footer-menu-item"><a href="${hrefBrziLinkovi[i]}" class="footer-menu-link">${imeBrziLinkovi[i]}</a></li>`;
        }
}
navList += `</ul>`;
footerNav.innerHTML = navList;


// jQUERY

// Responzivnost predposlednjeg dugmeta menija putem jQuery-a 
if ($(window).width() < 991) {
    $("#dugmeSpecijalno").removeClass('ms-2');
}
else {
    $("#dugmeSpecijalno").addClass('ms-2');
}

// Slajder testemonijala
$(document).ready(function() {
    $(".rslides").responsiveSlides;
});

// FORMA
// Dinamicko ispisivanje padajuce liste forme
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

// Validacija forme
window.onload = function(){
    document.querySelector("#dugmePosalji_id").addEventListener("click", proveriPolje);

}
function proveriPolje(){
    var poljeImePrezime = document.querySelector("#tbImePrezime");

    var reImePrezime = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,13}(\s[A-ZČĆŽŠĐ][a-zčćžšđ]{2,13})+$/

    if(!reImePrezime.test(poljeImePrezime.value)){
        poljeImePrezime.nextElementSibling.classList.add("alert", "alert-danger", "mt-1");
        poljeImePrezime.nextElementSibling.innerHTML = "Početno slovo imena i prezimena mora biti veliko, maksimalan broj karaktera za ime, i za prezime, je 14.";
    }
    else {
        poljeImePrezime.nextElementSibling.classList.remove("alert", "alert-danger", "mt-1");
        poljeImePrezime.nextElementSibling.innerHTML = "";
    }

    var poljeEmail = document.querySelector("#tbEmail");
    var reEmail = /^[a-z][\w\.]*\@[a-z0-9]{3,20}(\.[a-z]{3,6})?(\.[a-z]{2,3})$/

    if(!reEmail.test(poljeEmail.value)){
        poljeEmail.nextElementSibling.classList.add("alert", "alert-danger", "mt-1");
        poljeEmail.nextElementSibling.innerHTML = "Adresa mora sadržati @ karakter, završiti se sa ispravnim domenom. (Npr. primer@gmail.com)";
    }
    else {
        poljeEmail.nextElementSibling.classList.remove("alert", "alert-danger", "mt-1");
        poljeEmail.nextElementSibling.innerHTML = "";
    }

    var objSlobodnoVreme;
    objSlobodnoVreme = document.querySelector("#listaSlobodanSam");

    var brojacGresaka = 0;

    //provera padajuce liste
    if (objSlobodnoVreme.options[objSlobodnoVreme.options.selectedIndex].value == "0") {
        objSlobodnoVreme.parentElement.parentElement.lastElementChild.classList.add("prikazGreske");
        brojacGresaka++;
    }
    else {
        objSlobodnoVreme.parentElement.parentElement.lastElementChild.classList.remove("prikazGreske");
    }

    // provera radio button-a
    var objNewsletter = document.getElementsByName("rbNewsletter");
    let poslednjiP_element = document.querySelector("#poslednjiP");

    var vrednostNewsletter = "";
    for(let i = 0; i < objNewsletter.length; i++){
        if(objNewsletter[i].checked){
            vrednostNewsletter = objNewsletter[i].value;
            break;
        }
    }
    if(vrednostNewsletter == ""){
        poslednjiP_element.classList.add("prikazGreske");
        brojacGresaka++;
    }
    else {
        poslednjiP_element.classList.remove("prikazGreske");
    }

    if (brojacGresaka == 0) {
        document.querySelector("#ispisProvere").innerHTML = "Hvala Vam što ste Dobro Srce. Naš tim će Vas uskoro kontaktirati!"
    }
    else {
        document.querySelector("#ispisProvere").innerHTML = "";
    }
}
    
