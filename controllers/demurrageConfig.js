const db = require('../data/databaseModel');

const demurrageConfig = {

    getCount(request, response) {
        const responseToSend = {code: 200, totalCount: 0};
        let filter = null;
        if (request.body.filters) {
            filter = filtersHandler.process(request.body.filters);
        }
        db.DEMURRAGE_CONFIG.count({
            where: filter || {}
        }).then(c => {
            if (c) {
                responseToSend.code = 200;
                responseToSend.totalCount = c;
            }
        }).catch(reason => {
            responseToSend.code = 500;
            responseToSend.message = 'Internal Server Error. Contact administrator!';
            console.error(reason);
        }).finally(() => {
            response.status(responseToSend.code).send({
                totalCount: responseToSend.totalCount
            });
        });
    },
    get(request, response) {
        const responseToSend = {code: 200, rows: [], totalCount: 0};
        let filter = null;
        if (request.body.filters) {
            filter = filtersHandler.process(request.body.filters);
        }
        db.DEMURRAGE_CONFIG.findAndCountAll({
            include:[{
                model:db.CONTACT
            }],
            where: filter || {},
            limit: parseInt(request.query.limit),
            offset: parseInt(request.query.offset),
            attributes: [
                'DEMURRAGE_CONFIG_ID',
                'CONTACT_ID',
                'ALLOWED_DAYS',
                'GAS_TYPE',
                'RATE']
        }).then(result => {
            if (result) {
                responseToSend.code = 200;
                responseToSend.rows = result.rows;
                responseToSend.totalCount = result.count;
            }
        }).catch(reason => {
            responseToSend.code = 500;
            responseToSend.message = 'Internal Server Error. Contact administrator!';
            console.error(reason);
        }).finally(() => {
            response.status(responseToSend.code).send({
                rows: responseToSend.rows,
                totalCount: responseToSend.totalCount
            });
        });
    },
    add(request, response) {
        const responseToSend = {code: 200, demurrageConfig: null};
        db.DEMURRAGE_CONFIG
            .build(request.body)
            .save()
            .then( createdDemurrageConfig=> {
                // you can now access the currently saved task with the variable anotherTask... nice!
                responseToSend.code = 200;
                responseToSend.demurrageConfig = createdDemurrageConfig;
            })
            .catch(error => {
                // Ooops, do some error-handling
                responseToSend.code = 500;
                console.error(error);
            }).finally(() => {
            response.status(responseToSend.code).send({
                demurrageConfig: responseToSend.demurrageConfig,
            });
        })
    },
    getById(request, response) {
        const responseToSend = {code: 200, demurrageConfig: null};
        db.DEMURRAGE_CONFIG.findByPk(request.params.id).then(demurrageConfig => {
            if (booking) {
                responseToSend.code = 200;
                responseToSend.demurrageConfig = demurrageConfig;
            } else {
                responseToSend.code = 404;
            }
        }).catch(reason => {
            responseToSend.code = 500;
            responseToSend.message = 'Internal Server Error. Contact administrator!';
            console.error(reason);
        }).finally(() => {
            response.status(responseToSend.code).send({
                demurrageConfig: responseToSend.demurrageConfig,
            });
        });
    },
    update(request, response) {
        const responseToSend = {code: 200, updatedRows: 0};
        let fieldsToUpdate = {};
        for (field in request.body) {
            if (field !== 'DEMURRAGE_CONFIG_ID') {
                fieldsToUpdate[field] = request.body[field];
            }
        }
        console.log(request.params.id);
        console.log(fieldsToUpdate);
        db.DEMURRAGE_CONFIG.update(fieldsToUpdate, {
            where: {
                DEMURRAGE_CONFIG_ID: request.params.id
            }
        }).then(updatedRows => {
            console.log(updatedRows[0]);
            if (updatedRows[0] === 1) {
                responseToSend.code = 200;
                responseToSend.updatedRows = 1;
            } else {
                responseToSend.code = 404;
            }
        }).catch(reason => {
            responseToSend.code = 500;
            responseToSend.message = 'Internal Server Error. Contact administrator!';
            console.error(reason);
        }).finally(() => {
            response.status(responseToSend.code).send({
                updatedRows: responseToSend.updatedRows
            });
        });
    },

    remove(request, response) {
        const responseToSend = {code: 200, deletedRows: 0};

        db.DEMURRAGE_CONFIG.destroy({
            where: {
                DEMURRAGE_CONFIG_ID: request.params.id
            }
        }).then(deletedRows => {
            console.log(typeof deletedRows);
            if (deletedRows === 1) {
                responseToSend.code = 200;
                responseToSend.deletedRows = 1;
            } else {
                responseToSend.code = 404;
            }
        }).catch(reason => {
            responseToSend.code = 500;
            responseToSend.message = 'Internal Server Error. Contact administrator!';
            console.error(reason);
        }).finally(() => {
            response.status(responseToSend.code).send({
                deletedRows: responseToSend.deletedRows
            });
        });
    }
};


module.exports = demurrageConfig;