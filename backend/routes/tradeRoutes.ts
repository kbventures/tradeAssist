import express from "express";
import { getAll, getSingle, addRoom, updateRoom, deleteRoom, createRoomReview } from '../controllers/roomController';
import { protect, admin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route("/").get(getAll).post(protect, admin, addRoom);

export default router;