module.exports = function (request, response) {
    setTimeout(() => {
        response.status(200).send({
            message: 'Test, success 200'
        });
    }, 500);
}

// json file
/*module.exports = function (request, response) {
    setTimeout(() => {
        response.sendFile('GET.json', {root: __dirname});
    }, 500);
}*/