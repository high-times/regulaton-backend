/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('BOOKING', {
        BOOKING_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        TYPE: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        FOR_CONTACT: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        STATUS: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        OUT_DATE: {
            type: DataTypes.DATE,
            allowNull: false
        },
        COMMENT: {
            type: DataTypes.STRING(2000),
            allowNull: true
        },
        SERVICED_BY: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    }, {
        tableName: 'BOOKING',
        timestamps: false
    });
};
