// MATH Metode

// Nesto drugacija sitaksa u odnosu na klasince metode:
// Math.method(number)

// Postoje 4 metode pomocu kojih mozemo da zaokruzimo broj (ucinimo ga celim)

// Math.round() - zaokruzuje broj najblizem celom broju

console.log(Math.round(4.41));
console.log(Math.round(4.74));

// Math.ceil() - zaokruzuje broj na sledeci ceo broj

console.log(Math.ceil(4.0000000004));
console.log(Math.ceil(4.89));

// Math.floor() - zaokruzuje broj na prethodni ceo broj

console.log(Math.floor(8.222));
console.log(Math.floor(3.02323));
console.log(Math.floor(-5.8));

// Math.trunc() - zaokruzuje broj tako sto odstrani decimalni zapis

console.log(Math.trunc(4.74));
console.log(Math.trunc(4.04));
console.log(Math.trunc(-5.8));

// Math.sign() - metoda moze vratiti 3 vrednosti:
// -1  - ako je argument metode negativan broj
// 0 - ako je argument nula
// 1 - ako je argumen metode pozitivan broj

console.log(Math.sign(0));
console.log(Math.sign(-2));
console.log(Math.sign(45));

// Math.pow() - metoda vraca prvi argument stepenovan drugim argumentom

console.log(Math.pow(6, 4));
console.log(6 ** 4);

// Math.sqrt() - vraca kvadratni koren argumenta

console.log(Math.sqrt(9));
console.log(Math.ceil(Math.sqrt(129632)));

// Math.abs() - vraca pozitivnu vrednost argumenta

console.log(Math.abs(9));
console.log(Math.abs(-9));

// Math.sin() - vraca sinus argumenta (vraca vrednost iz intervala -1,1,) a argument mora biti vrednost u radijanima

console.log(Math.sin(Math.PI / 2));

// Math.cos() - vraca kosinus argumenta (vraca vrednost iz [-1,1]), argument mora biti vrednost u radijanima

console.log(Math.cos(Math.PI));

// Dve metode za nalazenje najmanje, odnosno najvece vrednosti za nekoliko datih brojeva:

// Math.min() Math.max()

console.log(Math.min(-33, -22, -11, 11, 22, 33, 66));
console.log(Math.max(433, -22, -11, 11, 22, 33, 66));

// Math.radnom() - vraca random broj izmedju 0(ukljucujuci) i 1 (neukljucujuci)
console.log(Math.random());

console.log(Math.floor(Math.random() * 101)); // vraca broj od 0 do 100(ukljucujuci)

// Sledeci primer vraca random broj izmedju 1 i 10(ukljucujuci oba)
console.log(Math.floor(Math.random() * 10) + 1);

// Sledeci prime vraca random broj izmedju 5 i 500(ukljucujuci oba)
console.log(Math.floor(Math.random() * 496) + 5);

// Math.log() - metode

// Math.log(x) vraca nam logaritam broj x za osnovu e

console.log(Math.log(6));

// Math.log(x) vraca nam logaritam broj x za osnovu 2

console.log(Math.log2(10));

// Math.log(x) vraca logaritam broja x za osnovu 10

console.log(Math.log10(6));
