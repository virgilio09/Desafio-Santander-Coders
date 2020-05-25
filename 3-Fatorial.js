
// ============== Desafio - Fatorial ==============

function fatorial(num){
	var fat = 1;
	if(num>1)
		fat = num*fatorial(num-1);

	return fat;
	
}
