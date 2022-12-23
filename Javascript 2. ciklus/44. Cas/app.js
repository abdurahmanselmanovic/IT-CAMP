console.log(1);
console.log(2);
setTimeout(() => console.log(3), 10);
console.log(4);
setTimeout(() => console.log(5), 0);

// Promise je JS objekat koji predstavlja mesto za rezultate asinhrone funkcije sve dok traje izvrsavanje asinhone operacije.

const imatiCas = new Promise((resolve, reject) => {
	const response = 100;
	if (response === 200) {
		resolve();
	} else {
		reject();
	}
});

imatiCas
	.then(() => console.log("Odrzana je rec. Imali smo cas!"))
	.catch(() => console.log("Nismo imali cas"))
	.finally(() => console.log("Poruka koja se ispisuje u svakom slucaju")); //

// then() se izvrsava u slucaju da se desi resolve()
// catch() se izvrsava u slucaju da se desi reject()
// finally() se izvrsava u svakom slucaju.
