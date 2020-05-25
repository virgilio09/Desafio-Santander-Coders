// ============== Desafio - Mais Menos ==============

function maisMenos(array){
	var n_positivos = 0;
	var n_zeros = 0;
	var n_negativos = 0;
	var qtd_total = 0;

	for(let i = 0; i<array.length; i++){
		if(array[i]>0)
			n_positivos++;
		else if(array[i]<0)
			n_negativos++;
		else
			n_zeros++;

		qtd_total++;
	}
	var resutado = [];

	resutado[0] = ((n_positivos/qtd_total)*100)/100;
	resutado[1] = ((n_zeros/qtd_total)*100)/100;
	resutado[3] = ((n_negativos/qtd_total)*100)/100;

	var filtrado = resutado.filter(function(elemento){
		return elemento != null;
	});

	return filtrado;
}