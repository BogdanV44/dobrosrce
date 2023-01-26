
// !-Validacija forme-!

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

    var objSlobodnoVreme = document.querySelector("#listaSlobodanSam");

    var brojacGresaka = 0;

    //provera padajuce liste
    if (objSlobodnoVreme.options[objSlobodnoVreme.options.selectedIndex].value == "izb") {
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
// DINAMICKI ISPIS
// Dinamicko ispisivanje nav
let nizHref = ["#top", "#section_2", "#section_3", "#section_4", "author.html"];
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

// Sekcije Hero
var nizHeroNaslovi = ["budi Dobro Srce", "Neprofitabilno", "Humanost"];
var nizHeroP = ["Postani jedan od volontera", "Podržavani od strane građana", "Recite za nas Vašim prijateljima"];
var nizHeroImgHref = ["images/slide/volunteer-helping-with-donation-box.jpg",
    "images/slide/volunteer-selecting-organizing-clothes-donations-charity.jpg",
    "images/slide/medium-shot-people-collecting-donations.jpg"];
var heroSlide = document.querySelector("#heroInner");
for (let i = 0; i<nizHeroNaslovi.length; i++) {
    var glavniDiv = document.createElement("div");
    glavniDiv.setAttribute("class", "carousel-item");

    if (i==0) {glavniDiv.classList.add("active")}

    var img = document.createElement("img");
    img.setAttribute("src", nizHeroImgHref[i]);
    img.classList.add("carousel-image", "img-fluid");
    img.setAttribute("alt", `slide0${i+1}`);

    var divTeksta = document.createElement("div");
    divTeksta.classList.add("carousel-caption", "d-flex", "flex-column", "justify-content-end");

    var naslov = document.createElement("h1");
    naslov.textContent = nizHeroNaslovi[i];

    var opis = document.createElement("p");
    opis.textContent = nizHeroP[i];
    
    divTeksta.appendChild(naslov);
    divTeksta.appendChild(opis);
    glavniDiv.appendChild(img);
    glavniDiv.appendChild(divTeksta);
    heroSlide.appendChild(glavniDiv);
}
document.querySelector("#hero-slide").heroSlide;

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

// Sekcija O nama
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
                    <div class="custom-text-box d-flex justify-content-center flex-wrap d-lg-block mb-lg-0">
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

var nizFounderP = ["Co-Founding Partner",
 '"In goal to make it easy for good-hearted people to be able to help those who need it we opened "Udruženje Dobrog Srca"."',
 '"U cilju da olakšamo dobronamernim ljudima da pomognu onima kojima je to potrebno otvorili smo "Udruženje Dobrog Srca"."'];
var nizFounderSocial = ["twitter", "facebook", "instagram"];
var sekcijaCoFounder = document.querySelector("#coFounder");
var contentCoFounder = `<div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-5 col-12">
            <img src="images/portrait-volunteer-who-organized-donations-charity.jpg" class="about-image ms-lg-auto bg-light shadow-lg img-fluid" id="co-founder-img" alt="co-founder" />
        </div>

        <div class="col-lg-5 col-md-7 col-12">
            <div class="custom-text-block">
                <h2 class="mb-0">Sandy Chan</h2>

                <p class="text-muted mb-lg-4 mb-md-4">${nizFounderP[0]}</p>

                <p class="fst-italic">${nizFounderP[1]}</p>

                <p class="fst-italic">${nizFounderP[2]}</p>

                <ul class="social-icon mt-4">
                    <li class="social-icon-item">
                        <a href="https://${nizFounderSocial[0]}.com/" class="social-icon-link bi-${nizFounderSocial[0]}"></a>
                    </li>

                    <li class="social-icon-item">
                        <a href="https://${nizFounderSocial[1]}.com/" class="social-icon-link bi-${nizFounderSocial[1]}"></a>
                    </li>

                    <li class="social-icon-item">
                        <a href="https://${nizFounderSocial[2]}.com/" class="social-icon-link bi-${nizFounderSocial[2]}"></a>
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

// Galerija
var galerija = document.querySelector("#galerija-slike");
var button = document.querySelector("#vidi-jos");
const putanjaGalerija = "images/gallery/img";
for (let i = 1; i < 4; i++) {
    kreirajElementeGalerije(i);
}

button.addEventListener("click", ucitajGaleriju);

var vecProsiren = 0;
var vecUcitaneSlike = 0; //da se nebi pravili novi HTTP requestovi
function ucitajGaleriju() {
    if (vecUcitaneSlike == 0) {
        for (let i = 4; i < 10; i++) {
            kreirajElementeGalerije(i);


            vecUcitaneSlike = 1;
            button.textContent = "Umanji";
        }
    }
    else if (button.textContent == "Učitaj Još") {
        var nizUcitanihSlika = document.querySelectorAll(".gallery-item");
        nizUcitanihSlika.forEach(function (slika) {
            selektujParentElement(slika);
            parentElement.classList.remove("d-none");
            parentElement.classList.add("col");
        })
        
        galerija.classList.add("gy-4");
        vecProsiren = 1;
        button.textContent = "Umanji";
    }
    else {
        var nizUcitanihSlika = document.querySelectorAll(".gallery-item");
        // Da bi prve tri ostale vidljive
        for (let i = 3; i < nizUcitanihSlika.length; i++ ) {
            selektujParentElement(nizUcitanihSlika[i]);
            parentElement.classList.add("d-none");
            parentElement.classList.remove("col");
        }
        
        galerija.classList.add("gy-4");
        vecProsiren = 0;
        button.textContent = "Učitaj Još";
    }
}

function kreirajElementeGalerije(i) {
    var div_slike = document.createElement("div");
    div_slike.classList.add("col");

    var img = document.createElement("img");
    img.setAttribute("src", `${putanjaGalerija+i}.jpg`);
    img.setAttribute("alt", `img_${i}`);
    img.setAttribute("class", "gallery-item");

    div_slike.appendChild(img);
    galerija.appendChild(div_slike);
}
function selektujParentElement(element) {
    return parentElement = element.parentElement;
}

// Sekcija CallToAction
var ctaTekst = ["Napravi razliku. <br/> Sačuvaj živote.", "Postani volonter"];
var sekcijaCTA = document.querySelector("#cta");
var contentCTA = `<div class="col-lg-5 col-12 ms-auto">
    <h2 class="mb-0 mx-auto">${ctaTekst[0]}</h2>
    </div>

    <div class="col-lg-5 col-12">
    <a href="#section_4" class="custom-btn btn smoothscroll mx-auto">${ctaTekst[1]}</a>
    </div>`;
sekcijaCTA.innerHTML = contentCTA;

// Dinamicki ispis testemonijala
var testemonijali = document.querySelector("#testemonijali");

var nizTestemNaslov = ["Toplo bih preporučila Udruženje Dobrog Srca svim organizacijama!", 
    "Pokazali su neverovatnu sposobnost da pomognu u izgradnji svetlije i bolje budućnosti za našu zemlju.",
    "Član sam već 2 godine. Uvek je lep osećaj pomagati drugima kroz razne aktivnosti!",
    "Udruženje Dobrog Srca je bilo od velike pomoći za prvu fazu projekta seoske vode."];
var nizTestemIme = ["Marija", "Nikola", "Jana", "Saša"];
var nizTestemOsobina = [", Šef", ", Partner", ", Član", ', "Crveni Krst"'];
for(let i=0; i < nizTestemNaslov.length; i++) {
    var glavniDiv = document.createElement("div");
    glavniDiv.setAttribute("class", "carousel-item");
    if(i==0) {glavniDiv.classList.add("active");}

    var div = document.createElement("div");
    div.setAttribute("class", "carousel-caption");

    var naslov = document.createElement("h4");
    naslov.setAttribute("class", "carousel-title");
    var textContent = document.createTextNode(nizTestemNaslov[i]);
    naslov.appendChild(textContent);

    var small = document.createElement("small");
    small.setAttribute("class", "carousel-name");
    var span = document.createElement("span");
    span.setAttribute("class", "carousel-name-title");
    span.textContent = nizTestemIme[i];
    small.appendChild(span);
    var tekstSmall = document.createTextNode(nizTestemOsobina[i]);
    small.appendChild(tekstSmall);

    div.appendChild(naslov);
    div.appendChild(small);
    glavniDiv.appendChild(div);
    testemonijali.appendChild(glavniDiv);
}

const testemPutanja = "images/avatar/";
var nizTestemImg = [`${testemPutanja}portrait-beautiful-young-woman-standing-grey-wall.jpg`,
    `${testemPutanja}portrait-young-redhead-bearded-male.jpg`,
    `${testemPutanja}pretty-blonde-woman-wearing-white-t-shirt.jpg`,
    `${testemPutanja}studio-portrait-emotional-happy-funny.jpg`];
var ol = document.createElement("ol");
ol.setAttribute("class", "carousel-indicators");
for (let i = 0; i < nizTestemImg.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("data-bs-target", "#testimonial-carousel");
    li.setAttribute("data-bs-slide-to", i);
    if(i==0) {li.classList.add("active");}

    var img = document.createElement("img");
    img.setAttribute("src", nizTestemImg[i]);
    img.classList.add("img-fluid", "rounded-circle", "avatar-image");
    img.setAttribute("alt", "avatar");

    li.appendChild(img);
    ol.appendChild(li);
}
testemonijali.appendChild(ol);

// Dinamicki ispis Brzi Linkovi
var hrefBrziLinkovi = ["#", "#section_2", "#section_3", "#section_4", "author.html",
"assets/DOKUMENTACIJA_fajl.pdf", "xml/sitemap.xml"];
var imeBrziLinkovi = ["Vrati se gore", "Naša priča", "Ciljevi", "Postani volonter", "Autor", "Dokumentacija", "Sitemap"];

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

// FORMA

// Dinamicko ispisivanje input type text
var nizPlaceHoldera = ["Ime i prezime", "E-mail"];
var nizInputTekstId = ["tbImePrezime", "tbEmail"]
var divForme = document.querySelector("#tekstualnaPolja");
for (let i = 0; i < nizPlaceHoldera.length ; i++) {
    var parentDiv = document.createElement("div");
    parentDiv.classList.add("form-group", "col-lg-6", "col-12");

    var inputText = document.createElement("input");
    inputText.setAttribute("type", "text");
    inputText.setAttribute("id", nizInputTekstId[i]);
    inputText.setAttribute("placeholder", nizPlaceHoldera[i]);
    inputText.setAttribute("class", "form-control");

    var p = document.createElement("p");

    parentDiv.appendChild(inputText);
    parentDiv.appendChild(p);

    divForme.appendChild(parentDiv);
}

// Dinamicka ispisivanje padajuce liste forme
var nizSlobodanSam = ["Slobodan sam samo vikendom", "Slobodan sam svaki dan"];
var nizVrednostSlobodanSam = ["SV", "SS"];

var select = document.createElement("select");
select.setAttribute("id", "listaSlobodanSam");
select.setAttribute("class", "form-control");
for(let i = -1; i < nizSlobodanSam.length; i++){
    var option = document.createElement("option");
    if (i == -1) {
        option.setAttribute("id", "optIzaberite")
        option.setAttribute("value", "izb");
        var contentOption = document.createTextNode("Izaberite...");
    }
    else {
        option.setAttribute("id", `opt${i+1}`);
        option.setAttribute("value", nizVrednostSlobodanSam[i]);
        var contentOption = document.createTextNode(nizSlobodanSam[i]);
    }

    option.appendChild(contentOption);
    select.appendChild(option);
}
document.querySelector("#ddLista").appendChild(select);

// Dinamicko ispisivanje radio button liste
var nizRadioPoljeValue = ["P", "N"]; 
var newsletterTekst = "Prihvatam";

var divRadioPolje = document.querySelector("#radioPolje");
var p = document.createElement("p");
p.classList.add("fw-bold", "mb-0");
p.textContent = "Newsletter - Budite obavešteni o našem radu!";
divRadioPolje.insertBefore(p, document.querySelector("#poslednjiP"))
for(let i = 0; i < nizRadioPoljeValue.length; i++) {
    var div = document.createElement("div");
    div.classList.add("form-check", "mb-2");

    var input = document.createElement("input");
    input.setAttribute("class", "form-check-input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "rbNewsletter");
    input.setAttribute("value", nizRadioPoljeValue[i]);

    var label = document.createElement("label");
    label.setAttribute("class", "form-check-label");
    label.setAttribute("for", `flexRadioDefault${i+1}`);
    if (i==0) {label.textContent = newsletterTekst;}
    else {label.textContent=`Ne ${newsletterTekst}`;}
    div.appendChild(input);
    div.appendChild(label);
    divRadioPolje.insertBefore(div, document.querySelector("#poslednjiP"));
}

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



// jQUERY

$(document).ready(function() {
    // Responzivnost predposlednjeg dugmeta menija putem jQuery-a 
    if ($(window).width() < 991) {
        $("#dugmeSpecijalno").removeClass('ms-2');
    }
    else {
        $("#dugmeSpecijalno").addClass('ms-2');
    }
    // Slajder testemonijala
    $(".rslides").responsiveSlides();
});
