const authorization = require('./controllers/authorization');

const router = app => {
    app.get('/api/login', (request, response) => {
        console.log(request.query);
        authorization.login(request, response);
    });
};

module.exports = router;