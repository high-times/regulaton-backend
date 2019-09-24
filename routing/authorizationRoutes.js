const authorization = require('../controllers/authorization');

function authorizationRoutes(app) {
    app.get('/api/login', (request, response) => {
        console.log(request.query);
        authorization.login(request, response);
    });
}

module.exports = authorizationRoutes;