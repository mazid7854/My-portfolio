import express from "express";
import { contact_post } from "../controller/contactController.js";

const router = express.Router();

router.post("/", contact_post);
