// ============== Desafio - Professora Furiosa ==============

function acontece(frequencia, qtd_min){
	var qtd = 0;
	for(let i = 0; i<frequencia.length; i++){
		if(frequencia[i]<=0) qtd++;
		if(qtd>=qtd_min) return true;	
	}
	
	
	return false;
}

function aberturas(frequencia, qtd_min){
	var dias_acontecem = [];

	for(let i = 0; i<frequencia.length; i++){
		dias_acontecem.push(acontece(frequencia[i], qtd_min));
	}

	return dias_acontecem;
	
}