import db from "../config/db.js"

class Student {

    static async getAll() {

        const [rows] = await db.query("SELECT * FROM students ORDER BY id DESC");

        return rows;

    }

    static async getById(id){

        const [rows] = await db.query(
            "SELECT * FROM students WHERE id=?",
            [id]
        );

        return rows[0];

    }

    static async create(student){

        const sql = `
        INSERT INTO students
        (first_name,last_name,age,email,mobile,password)
        VALUES(?,?,?,?,?,?)
        `;

        const [result] = await db.query(sql,[
            student.first_name,
            student.last_name,
            student.age,
            student.email,
            student.mobile,
            student.password
        ]);

        return result;

    }

    static async update(id, student){

        const fields = [];
        const values = [];

        if (student.first_name !== undefined) {
            fields.push("first_name=?");
            values.push(student.first_name);
        }

        if (student.last_name !== undefined) {
            fields.push("last_name=?");
            values.push(student.last_name);
        }

        if (student.age !== undefined) {
            fields.push("age=?");
            values.push(student.age);
        }

        if (student.email !== undefined) {
            fields.push("email=?");
            values.push(student.email);
        }

        if (student.mobile !== undefined) {
            fields.push("mobile=?");
            values.push(student.mobile);
        }

        if (fields.length === 0) {
            return { affectedRows: 0 };
        }

        const sql = `
        UPDATE students
        SET ${fields.join(", ")}
        WHERE id=?
        `;

        values.push(id);

        const [result] = await db.query(sql, values);

        return result;

    }

    static async delete(id){

        const [result]=await db.query(
            "DELETE FROM students WHERE id=?",
            [id]
        );

        return result;

    }

}

export default Student