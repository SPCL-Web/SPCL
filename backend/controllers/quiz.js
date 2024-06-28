

import Questions from "../model/questionSchema.js";
import Results from "../model/resultSchema.js";
import questions, { answers } from '../config/data.js';

/** get all questions */
export async function getQuestions(req, res) {
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({ error });
    }
}

/** insert all questions */
export async function insertQuestions(req, res) {
    try {
        await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

/** Delete all Questions */
export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

/** get all results */
export async function getResult(req, res) {
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({ error });
    }
}

/** post all results */
export async function storeResult(req, res) {
    try {
        const { username, result, attempts, points, achieved } = req.body;
        if (!username && !result) throw new Error('Data Not Provided...!');

        await Results.create({ username, result, attempts, points, achieved });
        res.json({ msg: "Result Saved Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}

/** delete all results */
export async function dropResult(req, res) {
    try {
        await Results.deleteMany();
        res.json({ msg: "Result Deleted Successfully...!" });
    } catch (error) {
        res.json({ error });
    }
}
