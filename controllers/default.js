const defaultController = {
    sendResponse(request, response) {
        console.log(`Sending default response for: "${request.originalUrl}" Method:${request.method}`);
        response.status(404).send({
            message: "This is the default response to the API. It has not been yet implemented.",
        })
    }
};

module.exports = defaultController;