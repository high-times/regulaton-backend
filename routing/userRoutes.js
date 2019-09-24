const user = require('../controllers/user');

function userRoutes(app) {
// User management
    app.post("/api/user", (request, response) => {
        user.add(request, response);
    });
    app.put("/api/user", (request, response) => {
        user.update(request, response);
    });
    app.get("/api/user", (request, response) => {
        user.get(request, response);
    });
    app.delete("/api/user", (request, response) => {
        user.remove(request, response);
    });
}

module.exports = userRoutes;