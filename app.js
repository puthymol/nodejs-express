const cors = require("cors");
const express = require("express");
const router = require("./routes/index");
const app = express();
app.use(express.json());
app.use(cors())
router.init(app);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
