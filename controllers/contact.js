const db = require('../data/databaseModel');
const defaultController = require('../controllers/default');
const filtersHandler = require("../helpers/filtersHandler");


const contact = {

    getCount(request, response) {
        const responseToSend = {code: 200, totalCount: 0};
        let filter = null;
        if (request.body.filters) {
            filter = filtersHandler.process(request.body.filters);
        }
        db.CONTACT.count({
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
        //defaultController.sendResponse(request, response);
        const responseToSend = {code: 200, rows: [], totalCount: 0};
        let filter = null;
        if (request.body.filters) {
            filter = filtersHandler.process(request.body.filters);
        }
        db.CONTACT.findAndCountAll({
            where: filter || {},
            limit: parseInt(request.query.limit),
            offset: parseInt(request.query.offset),
            attributes: ['CONTACT_ID', 'NAME',
                'REF_NAME',
                'ADDRESS',
                'PHONE_NO',
                'EMAIL',
                'SERVICE_TYPE',
                'AGENT_NAME']
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
        const responseToSend = {code: 200, contact: null};
        db.CONTACT
            .build(request.body)
            .save()
            .then(createdContact => {
                // you can now access the currently saved task with the variable anotherTask... nice!
                responseToSend.code = 200;
                responseToSend.contact = createdContact;
            })
            .catch(error => {
                // Ooops, do some error-handling
                responseToSend.code = 500;
                console.error(error);
            }).finally(() => {
            response.status(responseToSend.code).send({
                contact: responseToSend.contact,
            });
        })
    },

    getById(request, response) {
        const responseToSend = {code: 200, contact: null};
        db.CONTACT.findByPk(request.params.id).then(contact => {
            if (contact) {
                responseToSend.code = 200;
                responseToSend.contact = contact;
            } else {
                responseToSend.code = 404;
            }
        }).catch(reason => {
            responseToSend.code = 500;
            responseToSend.message = 'Internal Server Error. Contact administrator!';
            console.error(reason);
        }).finally(() => {
            response.status(responseToSend.code).send({
                contact: responseToSend.contact,
            });
        });
    },

    update(request, response) {
        const responseToSend = {code: 200, updatedRows: 0};
        let fieldsToUpdate = {};
        for (field in request.body) {
            if (field !== 'CONTACT_ID') {
                fieldsToUpdate[field] = request.body[field];
            }
        }
        console.log(request.params.id);
        console.log(fieldsToUpdate);
        db.CONTACT.update(fieldsToUpdate, {
            where: {
                CONTACT_ID: request.params.id
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


    removeById(request, response) {
        const responseToSend = {code: 200, deletedRows: 0};

        db.CONTACT.destroy({
            where: {
                CONTACT_ID: request.params.id
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


module.exports = contact;