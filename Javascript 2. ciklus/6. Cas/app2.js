const myFunction = () => {
	const zapreminaJedne = +prompt("Unesite zapreminu flase");
	const ukupnaKolicina = +prompt("Unesite kolicinu limunade");
	return Math.ceil(ukupnaKolicina / zapreminaJedne);
};
console.log(myFunction());
