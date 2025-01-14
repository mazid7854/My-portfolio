import express from "express";
import { project_get } from "../controller/projectController.js";

const router = express.Router();

router.get("/", project_get);
