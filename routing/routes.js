const bookingRoutes = require('./bookingRoutes');
const contactRoutes = require('./contactRoutes');
const userRoutes = require("./userRoutes");
const bookingItemRoutes = require('./bookingItemRoutes');
const demurrageConfigRoutes = require('./demurrageConfigRoutes');
const inventoryRoutes = require('./inventoryRoutes');
const authorizationRoutes = require('./authorizationRoutes');

const router = (app) => {

    authorizationRoutes(app);
    inventoryRoutes(app);
    bookingRoutes(app);
    bookingItemRoutes(app);
    contactRoutes(app);
    demurrageConfigRoutes(app);
    userRoutes(app);

};

module.exports = router;