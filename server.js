const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());	// request body를 express에서 json으로 받아 온다.
require("./app/routes/route")(app);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});