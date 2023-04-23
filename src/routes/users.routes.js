import { Router } from "express";
import { userSchema } from "../schemas/user.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { signIn, signUp } from "../controllers/user.controller.js";

const usersRouter = Router();
usersRouter.post("/cadastro", validateSchema(userSchema), signUp);
usersRouter.post("/login", validateSchema(userSchema), signIn);

export default usersRouter;