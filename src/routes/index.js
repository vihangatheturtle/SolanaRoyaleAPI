import { Router } from "express";
import create from "./create.js";
import play from "./play.js";
import authorize from "./authorize.js";
import register from "./register.js";
import checkToken from "./checkToken.js";

const router = Router();

router.use("/games/create", create);
router.use("/games/play", play);
router.use("/authorize", authorize);
router.use("/register", register);
router.use("/checkToken", checkToken);

export default router;
