module.exports = function (request, response) {
    setTimeout(() => {
        response.status(201).send({
            message: 'Test, success 201'
        });
    }, 2000);
}