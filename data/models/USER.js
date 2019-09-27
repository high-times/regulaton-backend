/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('USER', {
        FIRST_NAME: {
            type: DataTypes.STRING(256),
            allowNull: false,
            autoIncrement: true
        },
        LAST_NAME: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        USERNAME: {
            type: DataTypes.STRING(256),
            allowNull: false,
            unique: true
        },
        EMAIL: {
            type: DataTypes.STRING(256),
            allowNull: false,
            unique: true
        },
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
        },
        PASSWORD: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        ROLE: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        STATUS: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            defaultValue: '0'
        },
        PHONE_NO: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        tableName: 'USER',
        timestamps: false
    });
};
