/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ITEM', {
		ITEM_ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		USER_DEFINED_ID: {
			type: DataTypes.STRING(128),
			allowNull: false,
			unique: true
		},
		SIZE: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		TYPE: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		SUB_TYPE: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		OWNER: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'CONTACT',
				key: 'contact_id'
			}
		},
		PURPOSE: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		STATUS: {
			type: DataTypes.STRING(20),
			allowNull: false
		}
	}, {
		tableName: 'ITEM',
		timestamps: false
	});
};
