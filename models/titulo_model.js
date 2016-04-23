module.exports = function (sequelize, DataType) {

	Titulo = sequelize.define('titulo', {

		descricao: {
			type: DataType.STRING(255),
			allowNull: false
		},
		data: {
			type: DataType.DATE,
			allowNull: false
		},
		valor: {
			type: DataType.INTEGER,
			allowNull: false
		},
		categoria: {
			type: DataType.BOOLEAN,
			allowNull: false
		}
	}, {
		// classMethods: {
		// 	associate: function (models) {
		// 		Cliente.belongsTo(models.cliente, {foreignKey: 'responsavel'});
		// 	} 
		// },
		freezeTableName: true
	});

	return Titulo;
};