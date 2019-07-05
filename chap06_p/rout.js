module.exports = function (app) {
    app.get('/semantic/:book/:page', function (req,res) {
        var book = req.params.book;
        var page = req.params.page;
        res.send(book + page);
    });
}