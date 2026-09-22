import Student from "../models/studentModel.js";
import bcrypt from "bcrypt";

export const getStudents = async (req, res) => {
    try {
        const students = await Student.getAll();

        res.json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const getStudent = async (req, res) => {
    try {
        const student = await Student.getById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const createStudent = async (req, res) => {
    try {
        const body = req.body || {};

        if (!body.password) {
            return res.status(400).json({
                message: "Password is required",
            });
        }

        const hashPassword = await bcrypt.hash(body.password, 10);

        await Student.create({
            first_name: body.first_name,
            last_name: body.last_name,
            age: body.age,
            email: body.email,
            mobile: body.mobile,
            password: hashPassword,
        });

        res.status(201).json({
            message: "Student created successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const updateStudent = async (req, res) => {
    try {
        await Student.update(req.params.id, req.body);

        res.json({
            message: "Student updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        await Student.delete(req.params.id);

        res.json({
            message: "Student deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};