import express from "express";
import { getAll, getSingle, newTrade, updateTrade, deleteTrade} from '../controllers/tradesController';
// import { protect, admin } from '../middlewares/authMiddleware';

const router = express.Router();



router.route("/").post(newTrade)
// router.route("/mytrades").get(myTrades);

export default router;


// router.route("/:id").get(getSingle).put(protect, updateTrade).delete(protect, admin, deleteTrade);

// router.route("/").get(getAll).post(protect, admin, addTrade);
// router.route("/:id").get(getSingle).put(protect, updateTrade).delete(protect, admin, deleteTrade);
// router.route("/").post(protect, newBooking).get(protect, admin, getAll);
// router.route("/me").get(protect, myBookings);
// router.route("/check").post(checkRoomIsAvailble);
// router.route("/dates/:roomId").get(getBookedDates);
// router.route("/:id").delete(protect, admin, deleteBooking);
// router.route("/").get(protect, admin, getAll);
// router.route("/:id").put(protect, admin, updateUser).get(protect, admin, getSingleUser).delete(protect, admin, deleteUser);
// router.route("/register").post(register);
// router.route("/login").post(login);
// router.route("/update").put(protect, updateProfile);
// router.route("/update/password").put(protect, updatePassword);