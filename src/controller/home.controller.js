const homeService = require("../services/home.service")

const homeController = {
    home(req, res) {
        let response = homeService.home(req, res)
        res.send(response)
    },

    async param(req, res) {
        res.send(req.params);
    }
}

module.exports = homeController
