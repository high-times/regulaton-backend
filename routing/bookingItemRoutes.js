const bookingItem = require('../controllers/bookingItem');

function bookingItemRoutes(app) {
    // Booking Item
    app.get("/api/booking/:booking-id/booking-item", (request, response) => {
        bookingItem.get(request, response);
    });

    app.get("/api/booking/:booking-id/booking-item/count", (request, response) => {
        bookingItem.getCount(request, response);
    });

    app.post("/api/booking/:booking-id/booking-item", (request, response) => {
        bookingItem.add(request, response);
    });

    app.put("/api/booking/:booking-id", (request, response) => {
        bookingItem.update(request, response);
    });

    app.delete("/api/booking/:booking-id", (request, response) => {
        bookingItem.remove(request, response);
    });
}

module.exports = bookingItemRoutes;