// ============== Desafio - Produto ==============

function produto(array){
	var produto = 1;

	for(let i = 0; i<array.length; i++)
		produto*=array[i];

	return produto;
}