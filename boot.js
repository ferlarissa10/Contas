module.exports = function (app) {

	app.listen(app.get("port"), function() {
		app.db.sequelize.sync().done( function() {
			/*app.db.models.venda.create({
				data_venda: new Date(),
				data_entrega: new Date(),
				data_hora_envento: new Date(),
				local: 'longe',
				observacao: 'vixi',
				valor_bruto: 30.50,
				credito: 10,
				desconto: 10,
				valor_liquido: 20,
				status: 'A',
				funcionario_id: 2,
				cliente_id: 1,
				tipo_evento_id: 1
			});*/
			console.log('\n-->\tServidor executado!');
		});
	// opener('http://localhost:3000');
	});
}