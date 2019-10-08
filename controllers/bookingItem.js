const db = require('../data/databaseModel');

const bookingItem = {

    getCount(request, response) {
        const responseToSend = {code: 200, totalCount: 0};
        let filter = null;
        if (request.body.filters) {
            filter = filtersHandler.process(request.body.filters);
        }
        db.BOOKING_ITEM.count({
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
        db.BOOKING_ITEM.findAndCountAll({
            include: [
                { model: db.ITEM, required: true }
            ],
            where: filter || {},
            limit: parseInt(request.query.limit),
            offset: parseInt(request.query.offset),
            attributes: [
                'BOOKING_ITEM_ID',
                'BOOKING_ID',
                'ITEM_ID',
                'STATUS',
                'IN_DATE'
            ]
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
        const responseToSend = {code: 200, bookingItem: null};
        db.BOOKING_ITEM
            .build(request.body)
            .save()
            .then( createdBookingItem=> {
                // you can now access the currently saved task with the variable anotherTask... nice!
                responseToSend.code = 200;
                responseToSend.bookingItem = createdBookingItem;
            })
            .catch(error => {
                // Ooops, do some error-handling
                responseToSend.code = 500;
                console.error(error);
            }).finally(() => {
            response.status(responseToSend.code).send({
                bookingItem: responseToSend.bookingItem,
            });
        })
    },
    getById(request, response) {
        const responseToSend = {code: 200, bookingss: null};
        db.BOOKING_ITEM.findByPk(request.params.id).then(bookingItem => {
            if (bookingItem) {
                responseToSend.code = 200;
                responseToSend.bookingItem = bookingItem;
            } else {
                responseToSend.code = 404;
            }
        }).catch(reason => {
            responseToSend.code = 500;
            responseToSend.message = 'Internal Server Error. Contact administrator!';
            console.error(reason);
        }).finally(() => {
            response.status(responseToSend.code).send({
                bookingItem: responseToSend.bookingItem,
            });
        });
    },
    getByBookingId(request, response){
        const responseToSend = {code: 200, rows: [], totalCount: 0};
        db.BOOKING_ITEM.findAndCountAll({
            include: [
                { model: db.ITEM, required: true },
                {model:db.BOOKING, where:{
                    'BOOKING_ID':request.params.booking_id
                }}
            ],
            limit: parseInt(request.query.limit),
            offset: parseInt(request.query.offset),
            attributes: [
                'BOOKING_ITEM_ID',
                'BOOKING_ID',
                'ITEM_ID',
                'STATUS',
                'IN_DATE'
            ]
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
    update(request, response) {
        const responseToSend = {code: 200, updatedRows: 0};
        let fieldsToUpdate = {};
        for (field in request.body) {
            if (field !== 'BOOKING_ITEM_ID') {
                fieldsToUpdate[field] = request.body[field];
            }
        }
        console.log(request.params.id);
        console.log(fieldsToUpdate);
        db.BOOKING_ITEM.update(fieldsToUpdate, {
            where: {
                BOOKING_ITEM_ID: request.params.id
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

        db.BOOKING_ITEM.destroy({
            where: {
                BOOKING_ITEM_ID: request.params.id
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


module.exports = bookingItem;