const pool = require('../data/config');

const authorization = {
    login(request, response) {
    pool.query("SELECT COUNT(1) CNT from USER WHERE USERNAME=? and PASSWORD=?",
        [request.query.username, request.query.password],
        (error, result) => {
            if (error) {
                response.status(500).send({
                    message: 'Internal Server Error. Contact administrator!'
                });
                console.error(error);
            } else {
                if (result[0]["CNT"] === 1) {
                    console.log("Found user!");
                    response.status(200).send({
                        message: 'Success'
                    });
                } else {
                    response.status(401).send({
                        message: 'Invalid Credentials'
                    });
                }
            }
        });
}
};


module.exports = authorization;