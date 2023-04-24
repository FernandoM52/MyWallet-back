import { Router } from "express";
import { loginSchema, signupSchema } from "../schemas/user.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { signUp, signIn, signOut } from "../controllers/user.controller.js";
import { authValidation } from "../middlewares/auth.middleware.js";

const usersRouter = Router();
usersRouter.post("/cadastro", validateSchema(signupSchema), signUp);
usersRouter.post("/logar", validateSchema(loginSchema), signIn);
usersRouter.post("/sair", authValidation, signOut);

export default usersRouter;