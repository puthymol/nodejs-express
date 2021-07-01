const studentService = require("../services/student.service")
const StudentRequest = require("../models/student-request")
const {validate} = require("../validator/student-validator");

const studentController = {
    post(req, res) {
        console.log(JSON.stringify(req.body));
        let student = JSON.parse(JSON.stringify(req.body), StudentRequest);
        let response = studentService.post(student)
        res.send(response)
    },

    postValidate(req, res) {
        const { error } = validate(req.body);
        if(error){
            res.status(500).send(error.details[0].message)
            return;
        }
        let student = JSON.parse(JSON.stringify(req.body), StudentRequest);
        let response = studentService.postValidate(student, res)
        res.send(response);
    }
}

module.exports = studentController
