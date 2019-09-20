const pool = require('../data/config');

const authorization = {
    login(request, response) {
    pool.query("SELECT COUNT(1) CNT from USER WHERE USERNAME=? and PASSWORD=?",
        [request.query.username, request.query.password],
        (error, result) => {
            const responseToSend = {code:200, message:""};
            if (error) {
                responseToSend.code = 500;
                responseToSend.message = 'Internal Server Error. Contact administrator!';
                console.error(error);
            } else {
                if (result[0]["CNT"] === 1) {
                    console.log("Found user!");
                    responseToSend.code = 200;
                    responseToSend.message = 'Success';

                } else {
                    responseToSend.code = 401;
                    responseToSend.message = 'Invalid Credentials';
                }
            }
            response.status(responseToSend.code).send({
                message: responseToSend.message
            });
        });
}
};


module.exports = authorization;