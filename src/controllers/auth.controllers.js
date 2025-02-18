import { generateToken } from "../utilities/auth.utils.js";
//Mock data implemented

export const login = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "password") {
    const token = generateToken({ username, role: "admin" });
    return res.json({ token });
  } else if (username === "user" && password === "password") {
    const token = generateToken({ username, role: "user" });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
};
