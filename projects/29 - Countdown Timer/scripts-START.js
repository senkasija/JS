//definisali smo niz dugmića
var dugmici = document.querySelectorAll('.timer__button');

function timer(seconds){

    var sadasnjeVreme = Date.now();
    var dodatak = sadasnjeVreme + seconds * 1000;
    console.log(dodatak);

    var meri = setInterval(mojaFunkcija);
    function mojaFunkcija(){
        var ostaloSekundi = Math.round((dodatak - sadasnjeVreme)/1000);
        
    }
    mojaFunkcija(seconds);
}

for(dugme of dugmici){
    dugme.addEventListener("click", pokazivreme);
}
//dugmici.forEach(dugmic => dugmic.addEventListener("click", pokazivreme));

function pokazivreme(){
    var sekunde = parseInt(this.dataset.time);
  /**
   * this je objekat button iz čijeg objekta dataset uzimamo property time koje smo definisali u html-u
   * perseInt pretvara string u broj
   */
    console.log(sekunde);
    timer(sekunde);
}
