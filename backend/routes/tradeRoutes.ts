import express from "express";
import { getAll, getSingle, addTrade, updateTrade, deleteTrade} from '../controllers/tradesController';
import { protect, admin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route("/").get(getAll).post(protect, admin, addTrade);
router.route("/:id").get(getSingle).put(protect, updateTrade).delete(protect, admin, deleteTrade);
export default router;