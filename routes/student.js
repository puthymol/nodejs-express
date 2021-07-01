const studentController = require("../src/controller/student.controller")
const prefix = "/student"

module.exports = (app) => {
    app.post(prefix+"/post", (req, res) => {
        studentController.post(req, res)
    })

    app.post(prefix+"/post-validate", (req, res) => {
       studentController.postValidate(req, res)
    })
}
