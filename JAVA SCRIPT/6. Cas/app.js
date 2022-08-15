// ISPISATI BROJEVE OD 1 DO 10, JEDAN ISPOD DRUGOG

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// Za resavanje ovog (i slicnih primera) je najjednostavnije koristiti petlju(brojac) <--LOOP-->
// U JS imamo 3 petlje preko kojih mozemo izvrsiti nekoliko linija koda na brzi nacin.

// 1. for petlja
// U for petlju je svakakko je dozvoljeno koristiti if naredbu prema potrebi.
// for (statement1; statement2; statement3){
//     //blok koda koji se izvrsava u svakoj iteraciji
// }

// statement1 predstavlja definisanje promenljive koja predstavlja iterator
// statement2 predstavlja uslov, odnosno granicu do koje ce se izvrsavati iteracije
// statement3 predstavlja promenu vrednosti iteratora (to moze biti povecanje ili smanjenje)

// for (let x = 1; x <= 10; x++) {
// 	console.log(x);
// }

// let i = 1;
//             //    |
// for (i; i <= 10; i++) {
// 	console.log(i);
// }

// Ispisati sve brojeve od 1 do 10, osim broja 2 i broja 5.
let x = 1;
for (x; x <= 10; x++) {
	if (x === 5 || x === 2) {
		continue;
	} else {
		console.log(x);
	}
}
// OBRNUTA LOGIKA
for (let i = 1; i <= 10; i++) {
	if (i !== 2 && i !== 5) {
		console.log(i);
	}
}

// Ako se nadje break (keyword) unutar petlje to znaci da od tog trenutka
// petlja prestaje sa iteracijama, odnosno zavrsava se.

// Ako se nadje continue(keyword) unutar petlje to znaci da se ta iteracija preskace
// , tj. odmah se prelazi na sledecu iteraciju.
