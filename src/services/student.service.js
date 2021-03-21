const StudentRequest = require("../models/student-request")

module.exports = {
    get
}

async function get(req, res){
    console.log(JSON.stringify(req.body));
    let student = JSON.parse(JSON.stringify(req.body), StudentRequest);
    console.log(student.username)
    res.send("Good bro "+student.username)
}
