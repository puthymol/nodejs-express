module.exports = (app) => {
    const studentRoute = require("./student")(app);
    return {
        studentRoute
    };
};
