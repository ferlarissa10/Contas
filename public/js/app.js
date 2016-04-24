var app=angular.module('appContas',[]);
app.controller ('appContasCrtl', ['$scope', function($scope){
	/*angular.element(document).ready(function () {
		$scope.somarEntrada($scope.form);
		$scope.somarSaida($scope.form);
	});*/

	moment.locale('pt');
	$scope.totalEntrada = 0;
	$scope.totalSaida = 0;

	$scope.mesParam = moment().format("MMMM");
	$scope.mesAtual = moment().format("MMMM");

	$scope.dataDiaria = moment().format("LL");

	$scope.form = [{
		data: "15/05/2016",
		descricao: "Album Fotos",
		valor: 115,
		categoria: false
	},{
		data: "15/06/2016",
		descricao: "Album Fotos",
		valor: 115,
		categoria: false
	},{
		data: "10/05/2016",
		descricao: "Pagamento",
		valor: 1000,
		categoria: true
	}];

 	$scope.somarSaida = function(form){
 		if (form == undefined) {
 			return;
 		}
 		var total = 0, tamanhoArray = form.length;
 		for (var i = 0; i < tamanhoArray; i++) {
 			if(!form[i].categoria) {
 				total += Number(form[i].valor);
 			}
 		}
		$scope.totalSaida = total;
 	};

 	$scope.somarEntrada = function(form){
		if (form == undefined) {
			return;
		}
		var total = 0, tamanhoArray = form.length;
		for (var i = 0; i < tamanhoArray; i++) {
			if(form[i].categoria) {
				total += Number(form[i].valor);
			}
		}
	$scope.totalEntrada = total;
	};

	var totais = function(arrayValores) {
		$scope.somarEntrada(arrayValores);
		$scope.somarSaida(arrayValores);
	};

	totais($scope.form);

	$scope.salvar = function(data, descricao, valor, categoria){
		$scope.form.push({data: new Date(data), descricao: descricao, valor: valor, categoria: categoria});
		totais($scope.form);
		totaisMensais($scope.form);
		totaisAtuais($scope.form);
	};
	$scope.excluirConta = function(form){
		$scope.form= form.filter(function(formulario){
			if (!formulario.selecionado) return formulario;
			})
 	};

/*mes por parametro*/
	/* funcao para retornar a entrada de determinado mês*/
 	$scope.retornaMes = function(form, mesParam){
 	var total = 0, tamanhoArray = form.length;
 		for (var i = 0; i < tamanhoArray; i++){
 			if((moment(form[i].data, 'DD/MM/YYYY').month() == mesParam) && (!form[i].categoria)){
 				
 				total += Number(form[i].valor)
 			}
 	 	}
 	 	$scope.totalMesSaida = total;
 	}

	/* funcao para retornar a entrada de determinado mês*/
	$scope.retornaMesEntrada = function(form, mesParam){
		var total = 0, tamanhoArray = form.length;
		for (var i=0; i < tamanhoArray; i++){
			if((moment(form[i].data, 'DD/MM/YYYY').month() == mesParam) && (form[i].categoria)){

				total += Number(form[i].valor)
			}
		}
		$scope.totalMesEntrada = total
	}


		var totaisMensais = function(arrayValoresMes) {
		$scope.retornaMes(arrayValoresMes);
		$scope.retornaMesEntrada(arrayValoresMes);
	};

		totaisMensais($scope.form);

/*mes por parametro*/
/*mes atual*/
	$scope.retornaMesAtualSaida = function(form, mesAtual){
		var total = 0, tamanhoArray = form.length;
		for (var i = 0; i < tamanhoArray; i++){
			if((moment(form[i].data, 'DD/MM/YYYY').month() == mesAtual) && (!form[i].categoria)){

				total += Number(form[i].valor)
			}
		}
		$scope.totalSaidaAtual = total;
	}

	/* funcao para retornar a entrada de determinado mês*/
	$scope.retornaMesAtualEntrada = function(form, mesAtual){
		var total = 0, tamanhoArray = form.length;
		for (var i=0; i < tamanhoArray; i++){
			if((moment(form[i].data, 'DD/MM/YYYY').month() == mesAtual) && (form[i].categoria)){

				total += Number(form[i].valor)
			}
		}
		$scope.totalEntradaAtual = total;
	}


	var totaisAtuais = function(arrayValoresAtuais) {
		$scope.retornaMesAtualSaida(arrayValoresAtuais);
		$scope.retornaMesAtualEntrada(arrayValoresAtuais);
	};

	totaisAtuais($scope.form);

	$somarMesAtual = function ($retornaMesAtualSaida,$retornaMesAtualEntrada) {
		$scope.valorAtual = $retornaMesAtualEntrada - $retornaMesAtualSaida;

		return valorAtual
	}

	/*mes atual*/


}])