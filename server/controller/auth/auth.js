import jwt from 'jsonwebtoken';

const secrets = {
    user: "user",
    lawyer: "lawyer",
    magistrate: "magistrate",
    police: "police"
};

const authjwt = (req, res, next) => {
    // Extract token from cookies or Authorization header
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        // Decode token to get user role
        const decoded = jwt.decode(token);
        if (!decoded || !decoded.role || !secrets[decoded.role]) {
            return res.status(401).json({ message: "Unauthorized: Invalid token structure" });
        }

        // Verify token with the correct secret key
        const verified = jwt.verify(token, secrets[decoded.role]);
        if (!verified) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        console.log("Decoded token:", verified);
        return next();

    } catch (err) {
        return res.status(401).json({ message: "Unauthorized: Token verification failed", error: err.message });
    }
};

export default authjwt;
