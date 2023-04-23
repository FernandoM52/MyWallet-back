import { Router } from "express";
import { authValidation } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { transactionSchema } from "../schemas/transaction.schema.js";
import { getTransactionsByUser, newTransaction } from "../controllers/transaction.controller.js";

const transactionsRouter = Router();
transactionsRouter.use(authValidation);
transactionsRouter.post("/nova-transacao/:tipo", validateSchema(transactionSchema), newTransaction);
transactionsRouter.get("/home", getTransactionsByUser);

export default transactionsRouter;