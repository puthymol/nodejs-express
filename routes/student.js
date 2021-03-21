const studentService = require("../src/services/student.service")

const prefix = "/student";
module.exports = (app) => {
    app.get(prefix+"/get", (req, res) => {
        studentService.get(req, res)
    })
    app.post(prefix+"/post", (req, res) => res.send("POST"));
    return app;
};
