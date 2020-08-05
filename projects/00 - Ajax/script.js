/**
 * Objekti
 */
let kategorije = document.getElementById("forma__select--kategorije");
let proizvodi = document.getElementById("forma__select--proizvodi");

function kategorijeIzaberi() {

  if(kategorije){

    kategorije.setAttribute("disabled", true);

    let getKategorije = new XMLHttpRequest();
    getKategorije.open("GET", "https://admin.plodovisela.com/api/v1/categories");
    getKategorije.send();

    getKategorije.onload = function(){
      
      let odgovor = JSON.parse(getKategorije.response);
      let odgovorZaKategorije = odgovor.categories;//ovo je niz kategorija

      var ispisi = document.querySelector("#forma__select--kategorije");
      //console.log(ispisi);

      var selectSadrzaj = "";
      for(i = 0; i < odgovorZaKategorije.length; i++) {
        let optionSadzaj = "<option value=\""+odgovorZaKategorije[i].id+"\">" +odgovorZaKategorije[i].name+ "<option>";
            selectSadrzaj += optionSadzaj;
        }
        kategorije.innerHTML = selectSadrzaj;
        kategorije.removeAttribute("disabled");//treba ga  obrisati
    }

  } 
}



/*
function kategorijeIzaberi() {

    if(selectBox){

      let getKategorije = new XMLHttpRequest();
      getKategorije.open("GET", "https://admin.plodovisela.com/api/v1/categories");
      getKategorije.send();

      getKategorije.onload = function(){
        let odgovor = JSON.parse(getKategorije.response);
        let odgovorZaKategorije = odgovor.categories;//ovo je niz kategorija

        var ispisi = document.querySelector("#forma__select--kategorije");
        console.log(ispisi);
   
        odgovorZaKategorije.forEach(element => {
          textNode = document.createTextNode(element.name);
          liNode = document.createElement("option");
          liNode.appendChild(textNode);
          ispisi.appendChild(liNode);
          });
      }

    } 
}
      function proizvodiIzaberi() {

          if(selectBox1){

            let getProizvodi = new XMLHttpRequest();
            getProizvodi.open("GET", "https://admin.plodovisela.com/api/v1/products?category=1");
            getProizvodi.send();

            getProizvodi.onload = function(){
              let odgovor = JSON.parse(getProizvodi.response);
              let odgovorZaProizvodi = odgovor.product;//ovo je niz kategorija

              var ispisi = document.querySelector("#forma__select--proizvodi");
              console.log(ispisi);

              odgovorZaProizvodi.forEach(element => {
                textNode = document.createTextNode(element.name);
                liNode = document.createElement("option");
                liNode.appendChild(textNode);
                ispisi.appendChild(liNode);
                });
            }
          }
      }

      */

function proizvodiIzaberi(event) {

  let odabranaKategorija = kategorije.options[kategorije.selectedIndex].value; 

  console.log(odabranaKategorija);

    if(proizvodi){
       let url = "https://admin.plodovisela.com/api/v1/products";
      if(odabranaKategorija > 0 ){
        url = "https://admin.plodovisela.com/api/v1/products?category="+odabranaKategorija;
      }
      let getProizvodi = new XMLHttpRequest();
      getProizvodi.open("GET", url);
      getProizvodi.send();

      getProizvodi.onload = function(){
        let odgovor = JSON.parse(getProizvodi.response);
        let odgovorZaProizvodi = odgovor.product;//ovo je niz kategorija

        var ispisi = document.querySelector("#forma__select--proizvodi");
        ispisi.innerHTML = ""; // uklanja prethodno pretraživanje
       // console.log(ispisi);
   
        odgovorZaProizvodi.forEach(element => {

          textNode = document.createTextNode(element.name);
          liNode = document.createElement("option");
          liNode.appendChild(textNode);
          ispisi.appendChild(liNode);
          });
      }

    } 
}

kategorije.onload = kategorijeIzaberi();

kategorije.oninput = proizvodiIzaberi;
//Objekat traži, ne funkciju i anonimna funkcija