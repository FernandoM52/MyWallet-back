import { db } from "../database/database.connection.js";
import dayjs from "dayjs";

const date = dayjs().format("DD/MM");

export async function newTransaction(req, res) {
    const { value, description, type } = req.body;

    const newTransaction = { value, description, type, date }

    try {
        const { session } = res.locals;

        await db.collection("transactions").insertOne({ ...newTransaction, userId: session.userId });
        res.status(200).send({ message: "Transação efetuada com sucesso!" });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export async function getTransactionsByUser(req, res) {
    try {
        const { session } = res.locals;

        const transactions = await db.collection("transactions")
            .find({ userId: session.userId })
            .sort({ $natural: -1 })
            .toArray();

        res.send(transactions);
    } catch (err) {
        res.status(500).send(err.message);
    }
}