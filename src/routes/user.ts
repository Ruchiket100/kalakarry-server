import { Router } from "express";
import { getMyself, getUser } from "../controllers/user.controllers";
import { checkUsernameExist, setUsername } from "../controllers/username.controllers";

const router = Router();

router.get("/myself", getMyself);
router.get("/:username", getUser)
router.post("/myself/username/check", checkUsernameExist);
router.put("/myself/username", setUsername);

export default router;