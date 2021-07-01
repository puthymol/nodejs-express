module.exports = {
    init(app) {
        const homeRoute = require("./home")(app);
        const studentRoute = require("./student")(app);
        return {
            homeRoute,
            studentRoute
        };
    }
}
