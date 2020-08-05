/**
 * Objekti
 */
let selectBox = document.getElementById("forma__select--kategorije");
let selectBox1 = document.getElementById("forma__select--proizvodi");


function kategorijeIzaberi() {

  let opcijeForme = selectBox.options[selectBox.selectedIndex].value;

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

  let opcijeForme = selectBox.options[selectBox.selectedIndex].value;

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

let zaKlik = document.getElementById("forma__select--kategorije").options[0];

zaKlik.addEventListener("select", kategorijeIzaberi);
