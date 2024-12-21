import { Router } from "express";
import { getMyself } from "../controllers/user.controllers";

const router = Router();

router.get("/myself", getMyself);

export default router;