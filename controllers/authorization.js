const db = require('../data/databaseModel');

const authorization = {
    login(request, response) {
        const responseToSend = {code: 200, message: "", user: null};
        db.USER.findOne({
            where: {
                USERNAME: request.query.username,
                PASSWORD: request.query.password,
                STATUS: 1
            },
            attributes: ['FIRST_NAME', 'LAST_NAME', 'EMAIL']
        }).then(user => {
            if (user) {
                responseToSend.code = 200;
                responseToSend.message = 'Success';
                responseToSend.user = user;
            } else {
                responseToSend.code = 401;
                responseToSend.message = 'Invalid Credentials';
            }
        }).catch(reason => {
            responseToSend.code = 500;
            responseToSend.message = 'Internal Server Error. Contact administrator!';
            console.error(reason);
        }).finally(() => {
            response.status(responseToSend.code).send({
                message: responseToSend.message,
                user: responseToSend.user
            });
        });
    }
};


module.exports = authorization;