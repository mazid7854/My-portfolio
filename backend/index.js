import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
import { contact_post } from "./src/controller/contactController.js";

/* configure dotenv */
dotenv.config();
const port = process.env.PORT || 5000;
console.log(port);

/* configure cors */
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "PUT", "GET", "DELETE", "PATCH"],
  })
);

/* middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* routes */
app.get("/", (req, res) => res.json({ message: "Hello World" }));

app.post("/contact", contact_post);

/* app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);
}) */
/* listen for requests */

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
