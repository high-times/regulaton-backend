/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('BOOKING_ITEM', {
        BOOKING_ITEM_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        BOOKING_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'BOOKING',
                key: 'booking_id'
            }
        },
        ITEM_ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'ITEM',
                key: 'item_id'
            }
        },
        STATUS: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        IN_DATE: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'BOOKING_ITEM',
        timestamps: false
    });
};
