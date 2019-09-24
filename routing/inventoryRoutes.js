const inventory = require('../controllers/inventory');

function inventoryRoutes(app) {
//Inventory
    app.get("/api/cylinder/count", (request, response) => {
        inventory.getCount(request, response);
    });
    app.get("/api/cylinder", (request, response) => {
        inventory.get(request, response);
    });
    app.post("/api/cylinder", (request, response) => {
        inventory.add(request, response);
    });
    app.get("/api/cylinder/:id", (request, response) => {
        inventory.getById(request, response);
    });
}

module.exports = inventoryRoutes;