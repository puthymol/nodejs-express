const express = require("express");
const app = express();
app.use(express.json());
const Joi = require("joi");

app.get("/", (req, res) => {
    res.send("Good job ddd ttttt");
})

app.get("/post/:year/:month", (req, res) => {
    res.send(req.params);
})

app.post("/post", (req, res) => {
    const { error } = validatePost(req.body);
    if(error){
        res.status(500).send(error.details[0].message)
        return;
    }
    res.send(req.body);
})


require("./routes/index")(app);

function validatePost(post){
    const schema = Joi.object({
        username: Joi.string().required()
    });
    return schema.validate(post);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}`));
