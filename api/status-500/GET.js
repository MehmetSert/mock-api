module.exports = function (request, response) {
    setTimeout(() => {
        response.status(500).send({
            message: 'Test, error 500'
        });
    }, 500);
}