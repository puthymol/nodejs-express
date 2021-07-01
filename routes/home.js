const homeController = require("../src/controller/home.controller")

module.exports = (app) => {
    app.get("/", (req, res) => {
        return homeController.home(req, res)
    })

    app.get("/post/:year/:month", (req, res) => {
        homeController.param(req, res).then((r) => {
            return r
        } )
    })

}
