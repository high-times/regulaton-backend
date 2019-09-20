/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DEMURRAGE_CONFIG', {
		DEMURRAGE_CONFIG_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		CONTACT_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'CONTACT',
				key: 'contact_id'
			}
		},
		ALLOWED_DAYS: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		GAS_TYPE: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		RATE: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'DEMURRAGE_CONFIG',
		timestamps: false
	});
};
