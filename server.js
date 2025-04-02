const express = require("express");
const { errorHandler } = require("./middleware/errorHandler.js");
const { connectDb } = require("./configs/dbConnection.js");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.json());
connectDb();
const port = process.env.PORT || 3000;

app.use("/api/contacts", require("./Routes/contacts.routes.js"));
app.use("/api/users", require("./Routes/userRoutes.routes.js"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
