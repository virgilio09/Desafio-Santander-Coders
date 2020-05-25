function escada(altura){
	var escada = [];

	for(let i = 1; i<=altura; i++){
		escada.push(" ".repeat(altura-i)+'#'.repeat(i));
	}

	return escada;
}
