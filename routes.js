const authorization = require('./controllers/authorization');
const defaultController = require('./controllers/default');


const router = app => {
    app.get('/api/login', (request, response) => {
        console.log(request.query);
        authorization.login(request, response);
    });

    app.get("/api/cylinder/count", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.get("/api/cylinder", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.post("/api/cylinder", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.get("/api/cylinder/:id", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.get("/api/booking", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.get("/api/booking/count", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.post("/api/booking", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.get("/api/booking/:id", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.put("/api/booking/:id", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.delete("/api/booking/:id", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.get("/api/contact", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.post("/api/contact", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.get("/api/contact/:id", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.delete("/api/booking/:id", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.post("/api/user", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.put("/api/user", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.get("/api/user", (request, response) => {
        defaultController.sendResponse(request, response);
    });
    app.delete("/api/user", (request, response) => {
        defaultController.sendResponse(request, response);
    });
};

module.exports = router;