module.exports = function (request, response) {
    setTimeout(() => {
        response.status(400).send({
            message: 'Test, error 400'
        });
    }, 500);
}