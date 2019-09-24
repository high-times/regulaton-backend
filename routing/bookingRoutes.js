const booking = require('../controllers/booking');

function bookingRoutes(app) {
// Bookings
    app.get("/api/booking", (request, response) => {
        booking.get(request, response);
    });
    app.get("/api/booking/count", (request, response) => {
        booking.getCount(request, response);
    });
    app.post("/api/booking", (request, response) => {
        booking.add(request, response);
    });
    app.get("/api/booking/:id", (request, response) => {
        booking.getById(request, response);
    });
    app.put("/api/booking/:id", (request, response) => {
        booking.update(request, response);
    });
    app.delete("/api/booking/:id", (request, response) => {
        booking.cancel(request, response);
    });
}

module.exports = bookingRoutes;