export const validateStudent = (req, res, next) => {
    const {
        first_name,
        last_name,
        email,
        password,
    } = req.body;

    if (!first_name || !last_name || !email) {
        return res.status(400).json({
            message: "Required fields missing",
        });
    }

    if (req.method === "POST" && !password) {
        return res.status(400).json({
            message: "Password required",
        });
    }

    next();
};