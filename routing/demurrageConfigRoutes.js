const demurrageConfig = require('../controllers/demurrageConfig');


function demurrageConfigRoutes(app) {
// Demurrage Config
    app.post("/api/contact/:contact-id/demurrage-config", (request, response) => {
        demurrageConfig.add(request, response);
    });
    app.put("/api/contact/:contact-id/demurrage-config", (request, response) => {
        demurrageConfig.update(request, response);
    });
    app.get("/api/contact/:contact-id/demurrage-config", (request, response) => {
        demurrageConfig.get(request, response);
    });
    app.delete("/api/contact/:contact-id/demurrage-config/:id", (request, response) => {
        demurrageConfig.remove(request, response);
    });
}



module.exports = demurrageConfigRoutes;