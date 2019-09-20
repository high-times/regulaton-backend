const Sequelize = require('sequelize');
const dbConnection = require('./databaseConnection');
var db = {};

const sequelize = new Sequelize(
    dbConnection.config.database,
    dbConnection.config.user,
    dbConnection.config.password, {
        host: dbConnection.config.host,
        port: dbConnection.config.port,
        dialect: 'mysql',
        define: {
            freezeTableName: true
        },
        pool: {
            max: 10,
            min: 0,
            acquire: 3000,
            idle: 10000
        },
        operatorsAliases: false
    }
);

let models = [
    require('./models/BOOKING'),
    require('./models/BOOKING_ITEM'),
    require('./models/CONTACT'),
    require('./models/DEMURRAGE_CONFIG'),
    require('./models/ITEM'),
    require('./models/USER')

];

models.forEach(model => {
    const seqModel = model(sequelize, Sequelize);
    db[seqModel.name] = seqModel;
});

Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
