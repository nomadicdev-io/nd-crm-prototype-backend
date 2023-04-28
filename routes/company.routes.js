import express from "express";
import { createCompany } from "../controllers/company.controller.js";

// Routers
const router = express.Router();

router.route('/').post(createCompany);

export default router;