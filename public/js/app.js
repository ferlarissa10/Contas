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

	$scope.dataDiaria = moment().format("LLLL");

	$scope.form = [{
		data: "15/05/2016",
		descricao: "Album Fotos",
		valor: 115,
		categoria: 'S'
	},{
		data: "15/06/2016",
		descricao: "Album Fotos",
		valor: 115,
		categoria: 'S'
	},{
		data: "10/05/2016",
		descricao: "Pagamento",
		valor: 1000,
		categoria: 'E'
	}];

 	$scope.somarSaida = function(form){
 		if (form == undefined) {
 			return;
 		}
 		var total = 0, tamanhoArray = form.length;
 		for (var i = 0; i < tamanhoArray; i++) {
 			if(form[i].categoria == 'S') {
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
			console.log(typeof form[i].categoria);
			console.log(form[i].categoria);
			console.log(form[i].categoria == 'E');
			if(form[i].categoria == 'E') {
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
	};
	$scope.excluirConta = function(form){
		$scope.form= form.filter(function(formulario){
			if (!formulario.selecionado) return formulario;
			})
 	};



 	$scope.retornaMes = function(form, mesParam){
 		/* 		
		var mesMoment = moment("01/06/2016", 'DD/MM/YYYY');
 		console.log(mesMoment.month());
 		console.log(form[1].data);
 		console.log(moment(form[1].data, 'DD/MM/YYYY').month() === mesParam);
		console.log(mesParam);
		var mesTitulo = moment(form[1].data, 'DD/MM/YYYY').month();
		console.log(moment(form[1].data, 'DD/MM/YYYY').month() == mesParam);
		console.log(form.length);
		*/
 	var total = 0, tamanhoArray = form.length;
 		for (var i = 0; i < tamanhoArray; i++){
 			if((moment(form[i].data, 'DD/MM/YYYY').month() == mesParam) && (!form[i].categoria)){
 				
 				total += Number(form[i].valor)
 			}
 	 	}
 	 	console.log(total)
		return total
 	}



}])