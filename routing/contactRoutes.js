const contact = require('../controllers/contact');

function contactRoutes(app) {
// Contacts
    app.delete("/api/contact/:id", (request, response) => {
        contact.removeById(request, response);
    });

    app.post("/api/contact/count", (request, response) => {
        contact.getCount(request, response);
    });


    app.post("/api/contact", (request, response) => {

        if (request.query.action === 'query') {
            contact.get(request, response);
        } else if (request.query.action === 'create') {
            contact.add(request, response);
        } else {
            response.status(402).send({
                message: "Request should have 'action' query parameter to define the intent for POST."
            })
        }
    });

    app.get("/api/contact/:id", (request, response) => {
        contact.getById(request, response);
    });
    app.put("/api/contact/:id", (request, response) => {
        contact.update(request, response);
    });
}

module.exports = contactRoutes;