const herois = [
	{nome: 'Gato', xp: 2.002},
    {nome: 'Nego', xp: 7.000},
    {nome: 'Mago', xp: 10.001}
]

console.log("## Classificador de Nível de Herói ##");
console.log(" ");

herois.forEach((heroi) => {

	if(heroi.xp < 1.000) {
    	console.log("O Herói de nome " + heroi.nome + " está no nível de Ferro");
    } else if(heroi.xp === 1.001 || heroi.xp <= 2.000) {
    	console.log("O Herói de nome " + heroi.nome + " está no nível de Bronze");
    } else if(heroi.xp === 2.001 || heroi.xp <= 5.000) {
    	console.log("O Herói de nome " + heroi.nome + " está no nível de Prata");
    } else if(heroi.xp === 5.001 || heroi.xp <= 7.000) {
    	console.log("O Herói de nome " + heroi.nome + " está no nível de Ouro");
    } else if(heroi.xp === 7.001 || heroi.xp <= 8.000) {
    	console.log("O Herói de nome " + heroi.nome + " está no nível de Platina");
    } else if(heroi.xp === 8.001 || heroi.xp <= 9.000) {
    	console.log("O Herói de nome " + heroi.nome + " está no nível de Ascendente");
    } else if(heroi.xp === 9.001 || heroi.xp <= 10.000) {
    	console.log("O Herói de nome " + heroi.nome + " está no nível de Imortal");
    } else {
    	console.log("O Herói de nome " + heroi.nome + " está no nível de Radiante");
    }
    
});
