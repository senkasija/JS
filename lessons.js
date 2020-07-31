
// 29. 6. 2020.

/**
 * postoje tri paradigme programiranja: proceduralno, funkcionalno i objektno.
 * Razlika između anonimne i lambda funkcije
 * https://medium.com/@chineketobenna/lambda-expressions-vs-anonymous-functions-in-javascript-3aa760c958ae#:~:text=On%20the%20other%20hand%2C%20lambda,function%20as%20a%20return%20value
 * Funkcionalno programiranje jeste kada funkcije prosleđujemo funkcjijama kao svaki drugi podatak
 * Anonimne funkcije su funkcije se odmah izvršavaju.
 * lambde ne treba je posmatrati kao funkciju, već kao podatak.
 * lambde se prosleđuju kao podatak, a ključno je da mogu biti imenovane
 * Lambda funkcija ne mora imati uopšte strelicu syntantic sugar
 * lambde su zanimljive omogućavaju mutacije, promenu. Omogućavaju popravku koda.
 * Dobre su zbog brzine i čitljivosti, precizne, pružaju; prima i prevodi samo jedan atribut
 * anonimni funkcije su kreirana on the flay i moraju biti deklarisane pre nego što budu pozvane, one nisu hojstvane * koriste se za IIFE
 */

 // QUICK SORT
 /**
  * Bolje je od sort kada radi sa velikim brojevima i elementima
  * Deli elemente u male grupe na osnovu istog uslova i izvšava operacije nad tim malim grupama. Tako da je dobro za velike podatke
  * Sastoji se iz tri dela:
  * **Prvo selektuje element koji se zove element pivot i
  * **Poređenjem sa svakim elementom niza, počevši od početka niza, dovodimo ga na poziciju gde da levo od njega budu manji, a desno veći elementi
  * **Na kraju radi quick sort sa nizom na levoj, pa sa nizom na desnoj strani pivota. Pri čemu se menja pivot ulevo pri svakoj rekurziji.
  */

  function quick_Sort(origArray) {
	if (origArray.length <= 1) { //služi da blokira sortiranje kada je manji od 1
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
        var pivot = origArray.pop();
        //uzima poslednji element niza i menja dužinu niza
        var length = origArray.length;
		for (var i = 0; i < length; i++) {
            console.log("U " + i + " itaraciji " + "pivot je: " + pivot);

			if (origArray[i] <= pivot) {
                left.push(origArray[i]);
			} else {
                right.push(origArray[i]);
            }
        }

        console.log("Levi niz je: "+ left);
        console.log("Desni niz je: "+ right);

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
console.log("Dužina niza je: " + length)
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);


//BUBBLE SORT
/**
 * nije dobar za velike nizove jer je spor
 * Porede se dva susedna elementa i ukoliko je prvi veći od drugog, oni menjaju pozicije.
 * Poslednja iteracija ništa ne menja, ali kod je izvršava kako bi bio siguran da su svi elementi na svom mestu.
 */
let bubbleSort = (nesortiraniNiz) => {
    let duzinaNiza = nesortiraniNiz.length-1;
    let zamena;
    do {
        zamena = false;
        for (let i = 0; i < duzinaNiza; i++) {
            if (nesortiraniNiz[i] > nesortiraniNiz[i + 1]) {
                let tmp = nesortiraniNiz[i];
                nesortiraniNiz[i] = nesortiraniNiz[i + 1];
                nesortiraniNiz[i + 1] = tmp;
                zamena = true;
            }
        }
    } while (zamena);
    return nesortiraniNiz;
};
console.log("Bubble sortiranje je: " + bubbleSort(myArray));



 // 1. 7. 2020.

/*
* RECURZIJA
* U programiranju je funkcija koja poziva samu sebe
* Рекурзија (лат. recursio, recursion од recurrere: враћање) означава поступак или функцију који у својој дефиницији користе сами себе.
* Другим речима, уколико неки поступак захтева да делови проблема које је раздвојио од других бивају независно подвргнути истом том поступку, тај поступак је рекурзиван.
* Domaći zadatak: galerija sa flexom.
*/
/*---------------------------------------------
var tmp = 0;
    var f = 0;
    if(i<=0) {
        f = 1;
        return f;
    } else {

     for (i=0; i<num; i++) {
         console.log("i:"+ i + "f:" + f + "tmp:" + tmp);

         f = i + tmp;
         tmp = f;
        // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

     }
     return f;
    }
*/
//----------------------------------------------------------------------------

/*
console.log("-----------------------------------------------");
function fib(n){
    let arr = [0, 1];//that we know for a fact will always be there.
    for (let i = 2; i < n + 1; i++){//hoću fibonači od poslednje broja u nizu, a to je broj koji stavljam kao argument.
      arr.push(arr[i - 2] + arr[i -1])
    }
   console.log(arr[n]);
  }
  let nesto = fib(5);
  console.log(nesto);
  console.log("-----------------------------------------------");

function fib(n) {
    if (n < 2){
      return n
    }
    console.log("Ovde vidim rekurziju: " + n);
    return fib(n - 1) + fib (n - 2);
  }
  console.log("Poziv funkcije za izračunavanje fibonačija od 5, što je: " + fib(5));
console.log("-----------------------------------------------");
*/
//----------------------------------------------------------------------------
/*function fibonacci(n){
    if(n <= 1){
        return 1;
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

for(i=0; i < 5+1; i++){
    console.log("The fibonacci of " + "i = " + i +" is " + fibonacci(i))
}

fibonacci(5);

function traverseArray(arr, func) {
    let result = '';
    for (const value of arr) {
        result = result + " + " + func(value) + '--';
        //ovde se uopšte ne radi o sabiranju resutl i rezultata funkcije već o dodavanju
        //svaki put  se kopira nova varijabla result i dodaje se nova vrednost funkcije
        // tako se dobija 2 4 6 8 10
        console.log(result);
    }
    console.log(result);
}

const arr = [1, 2, 3, 4, 5];
const doubler = value => value * 2;
////alternatively, can be written verbosely as
//const doubler = (value) => {
//    return value * 2;
//}

traverseArray(arr, doubler);
//result: 2 4 6 8 10
*/


//----------------------------------------------------------------------------
// 6. 7. 2020
//----------------------------------------------------------------------------

//radimo flex panel i bavimo se petljama
//završiti primer sa flexom
//cardio 2 uraditi
//radićemo 6 i 10


//----------------------------------------------------------------------------
// 15. 7. 2020
//----------------------------------------------------------------------------
/*
fetch/then je ulančavanja, to je nova opcija, ranije se koristio objekat xtmlHTM...
čejnin služi za uvezivanje podataka
prvi then potvrđuje da je primio podatke, a drugi
promise - svaka od prethodnih funkcija je obaćenje i ona se izvršavaju asinhrono

//----------------------------------------------------------------------------
// 27. 7. 2020.
//----------------------------------------------------------------------------

API
Kad napišemo zahtev apiju, dobijemo odgovor najčešće u JASONu
V1 je prva verzija. Kad se promeni verzija, program koji obrađuje podatke više ne radi.
Frontend pokazuje lepo podatke, a bekend nam odgovara i daje podatke koje tražimo.

Prvi zadataK. Napraviti dva dinamička selekt boksa da filtrira podatke: kategorije i proizovde, na osnovu dva linka koja nam je poslao.

Jedan je API, ali on vraća različite JSONE u zavisnosti od toga šta tražimo.
POSTMAN - za testiranje Apija, da vidimo šta vraća i onda možemo uraditi JS kod
AJAX: ne mora se rifrešati i zahtevi se stavljaju u red čekanja i izvršavaju se kad  dođu na red
Za zahtev nam treba: url, parametri, funkcija koja obrađjuje podatke 

Kako radi Fetch: jedan od načina za zahhtevanje Ajax: 
tri stanja Obaćanje: ostvariće se, neće se ostvariti, i čekanje.  Omogućava asinhrono delovanje.
Then je funkcija.
tri bloka koda 
Try obrađujem odgovor koji je u redu 
Catch - obrađujem grešku, ako try nije u redu
Finally - Ovo će se uvek izvršiti, u oba slučaja.
ista stvar je kod  Promisa.
Domaći za sredu: uraditi kao anonnimnu funkciju: photos.forEach(slika => {//anonimna funkcija domaći zadatak

//----------------------------------------------------------------------------
// 29. 7. 2020.
//----------------------------------------------------------------------------
Na linkovima objašnjenjo ono što ćemo danas raditi.
HTML je podskup XML-a, a u XML-u kome možemo da definišemo tagove i atribute kako želimo.
XMLHttpRequest - šaljem zahtev kroz vebprotokol http i dobijamo odgovor u jeziku tagova - XML.
Objekti u programiranju su nastali od klase.
Da bi se desilo slanje, potrebno je pozvati funkciju SEND
Onnload, onprogres itd. su događaji koji se dešavaju kada se ispuni obećanja, a onda događaje hendlamo nekim procedurama
THIS - Imenovaj funkciji treba poslati objekat
arrayBuffer je binarni tip podataka
Blob - takođe binarni podaci	

*/