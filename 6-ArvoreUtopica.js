
//========= Desafio - Árvore utópica ==========


function alturaArvoreUtopica(N){
	var altura = 1;

	for(let i = 1; i<=N; i++){
		
        if(i % 2 == 0)
        	altura+=1;
        else
        	altura*=2;
	}

	return altura;

}
