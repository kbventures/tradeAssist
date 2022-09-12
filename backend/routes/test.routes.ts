import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  let users = ["Goon", "Tsuki", "Joe"];
  res.status(200).send(users);
});

export { router };



import express from "express";
import { getAll} from '../controllers/testController';
import { protect, admin } from '../middlewares/authMiddleware';

const router = express.Router();

router.route("/").get(getAll)
export default router;