const studentService = {
     post(req, res) {
        console.log(req.username)
        return "Good "+req.username
    },

    postValidate(req, res) {
        console.log(req)
         return "Good Post"
    }
}

module.exports = studentService
