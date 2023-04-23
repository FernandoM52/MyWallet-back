import { db } from "../database/database.connection.js";
import dayjs from "dayjs";

const date = dayjs().format("DD/MM");

export async function newTransaction(req, res) {
    const { value, description } = req.body;
    const { tipo } = req.params;

    try {
        const { session } = res.locals;

        if (tipo === "entrada") {
            const transaction = await db.collection("transactions").insertOne({ userId: session.userId, type: tipo, date, ...req.body });
            res.send("Transação efetuada com sucesso!");
        } else if (tipo === "saida") {
            const transaction = await db.collection("transactions").insertOne({ userId: session.userId, type: tipo, date, ...req.body });
            res.send("Transação efetuada com sucesso!");
        } else {
            return res.status(422).send("Tipo de transação inválida");
        }
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