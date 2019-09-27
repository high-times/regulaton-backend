/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('CONTACT', {
        CONTACT_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        NAME: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        REF_NAME: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        ADDRESS: {
            type: DataTypes.STRING(1024),
            allowNull: true
        },
        PHONE_NO: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        EMAIL: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        SERVICE_TYPE: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        AGENT_NAME: {
            type: DataTypes.STRING(256),
            allowNull: true
        }
    }, {
        tableName: 'CONTACT',
        timestamps: false
    });
};
