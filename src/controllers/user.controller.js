import { db } from "../database/database.connection.js";
import { v4 as uuid } from "uuid";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });
        if (user) return res.status(409).send("E-mail já cadastrado, preencha um e-mail disponível");

        const hash = bcrypt.hashSync(password, 10);

        await db.collection("users").insertOne({ name, email, password: hash });
        res.status(201).send("Usuário cadastrado com sucesso");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });
        if (!user) return res.status(404).send("E-mail não cadastrado");

        const passwordIsCorrect = bcrypt.compareSync(password, user.password);
        if (!passwordIsCorrect) return res.status(401).send("Senha incorreta");

        const token = uuid();
        await db.collection("sessions").insertOne({ token, userId: user._id, name: user.name });
        res.send({ token, userId: user._id, name: user.name });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export async function signOut(req, res) {
    try {
        const { session } = res.locals;

        const result = await db.collection("sessions").findOneAndDelete({ userId: new ObjectId(session.userId) });
        if (result.deletedCount === 0) return res.status(404).send("Erro ao fazer logoff");
        res.send("Usuário deslogado com sucesso");
    } catch (err) {
        res.status(500).send(err.message);
    }
};