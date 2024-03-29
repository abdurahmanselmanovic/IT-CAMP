// reduceRight() ista kao reduce metoda samo sto ucitavanje niza ide sa desne strane

const niz = [1, 2, 3, 4, 5];
const suma = niz.reduceRight((prev, curr) => prev + curr);

// every() metoda ispituje da li je svaki element niza prosao test. Rezultat je boolean(true ili false)

const godine = [15, 14, 18, 18, 18, 16, 19, 17, 19];
const isEveryAdult = godine.every((element) => element >= 18);
console.log(isEveryAdult);
const adultArr = godine.filter((element) => element >= 18);
console.log(adultArr);
const isEveryAdult2 = adultArr.every((element) => element >= 18);
console.log(isEveryAdult2);

// some() metoda ispituje da li bar jedan element nimza zadovoljava odredjeni uslov. Takodje vraca boolean.

const isSomebodyAdult = godine.some((element) => {
	return element >= 18;
});
console.log(isSomebodyAdult);

// find() metoda nam vraca prvi element koji ispunjava odredjeni uslov

const grupa = [
	"Imran",
	"Muhamed",
	"Ahmed",
	"Muusa",
	"Amina",
	"Harun",
	"Abdurahman",
	"Talib",
];

const firstElementPassedCondition = grupa.find((element) => {
	return element.length >= 8;
});
console.log(firstElementPassedCondition);

// findIndex() metoda nam vraca index prvog elementa koji je prosao uslov zadat unutar funkcije.
// ako nijedan element ne ispunjava uslov, metoda nam vraca -1

const firstIndexPassedContidion = grupa.findIndex((element) => {
	return element.length >= 8;
});
console.log(firstIndexPassedContidion);
// Array.from() metoda nam vraca niz iz bilo kojeg objekta koji je iterirajuci odnosno koji ima length svojstvo
// Ova metoda nam vraca niz gde je svaki element jedan karakter strringa koji pretvaramo u niz.
const recenica = "Ovo mora biti niz";
const mustBeArray = Array.from(recenica);
console.log(mustBeArray);
