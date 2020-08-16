
let kategorije = document.getElementById("forma__select--kategorije");
let proizvodi = document.getElementById("forma__select--proizvodi");


function kategorijeIzaberi() {

  if(kategorije){
/*
    kategorije.setAttribute("disabled", true); //The disabled attribute can be set to keep a user from using the element until some other condition has been met (like selecting a checkbox, etc.). Then, a JavaScript could remove the disabled value, and make the element usable.
    */

    // 1. Formiraj objekat koji će poslati zahtev za API
    let getKategorije = new XMLHttpRequest();
    getKategorije.open("GET", "https://admin.plodovisela.com/api/v1/categories");
    getKategorije.send();

    // 2. Učitaj odgovor sa API-ja
    getKategorije.onload = function(){

     // 2.1. Pretvori odgovor iz JSON-ovog stringa u JS objekat
     let odgovor = JSON.parse(getKategorije.response);
     
     // 2.2. Izdvoj kategorije iz JS objekta koji smo dobili kao odgovor // Kategorija su date kao niz
     let odgovorZaKategorije = odgovor.categories;

     // 2.3. Prođi kroz niz Odgovor za kategorije i izlistaj id i naziv svakog objekta u nizu
      var selectSadrzaj = "";
      for(i = 0; i < odgovorZaKategorije.length; i++) {
        
        let optionSadzaj = "<option value=\""+odgovorZaKategorije[i].id+"\">" + odgovorZaKategorije[i].name+ "</option>";
        // 2.3. 1 Dodaj svakom sadržaju prethodni, kako bi se na kraju dobili svi sadržaji, svaki  u tagu <option>
            selectSadrzaj += optionSadzaj;
        }
     // 2.4. Sve sadržaje upiši u formu select--kategorije   
        kategorije.innerHTML = selectSadrzaj;
        //kategorije.removeAttribute("disabled");// briše atribut jer mogućnost selektovanja treba da bude aktivna
    }

  } 
}

function proizvodiIzaberi() {

  let odabranaKategorija = kategorije.options[kategorije.selectedIndex].value; 
  /**
   * Memoriše value selektovanog taga options koji je ID
   * options je niz od tagova options u okviru objekta forme kategorija
   * SelectedIndex je indeks taga options u nizu select
   */

    if(proizvodi){
       let url = "https://admin.plodovisela.com/api/v1/products";

      // 3. Pozovi proizvode koji pripadaju određenoj kategoriji koja je definisana vrednošću iz value koja je u stvari id
      if(odabranaKategorija > 0 ){
        url = "https://admin.plodovisela.com/api/v1/products?category=" + odabranaKategorija;
      }
      let getProizvodi = new XMLHttpRequest();
      getProizvodi.open("GET", url);
      getProizvodi.send();

      getProizvodi.onload = function(){
        let odgovor = JSON.parse(getProizvodi.response);
        let odgovorZaProizvodi = odgovor.product;//ovo je niz proizvoda odabrane kategorije
  
        proizvodi.innerHTML = ""; // uklanja prethodno pretraživanje
        
        //4. Prođi kroz svaki element niza i upiši njegovo ime u select-box
        odgovorZaProizvodi.forEach(element => {

          textNode = document.createTextNode(element.name); // memoriši naziv porizvoda
          liNode = document.createElement("option"); // kreiraj tag option
          liNode.appendChild(textNode); // dodaj tagu <option> dete tekst koje je ime proizvoda
          proizvodi.appendChild(liNode); //u select-box proizvoda ispiši tekst imena
          });
      }

    } 
}

kategorije.onload = kategorijeIzaberi();
// kad se unese sadržaj u kategorije, onda pozovi funkciju proizvodiIzaberi
kategorije.oninput = proizvodiIzaberi;
// Onpinut traži Objekat, ne rezultat funkcije pa je zato i ne poziva