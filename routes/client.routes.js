import express from "express";
import { createClient, getClients, updateClient, getClientDetails } from "../controllers/client.controller.js";

// Routers
const router = express.Router();

router.route('/').post(createClient);
router.route('/').get(getClients);
router.route('/:id').post(updateClient);
router.route('/:id').get(getClientDetails);

export default router;