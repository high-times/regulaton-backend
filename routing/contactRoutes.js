const contact = require('../controllers/contact');

function contactRoutes(app) {
// Contacts
    app.delete("/api/contact/:id", (request, response) => {
        contact.removeById(request, response);
    });

    app.get("/api/contact", (request, response) => {
        contact.get(request, response);
    });

    app.post("/api/contact", (request, response) => {
        contact.add(request, response);
    });

    app.get("/api/contact/:id", (request, response) => {
        contact.getById(request, response);
    });
}

module.exports = contactRoutes;