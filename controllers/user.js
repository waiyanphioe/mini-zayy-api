const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
	const username = req.body.username;
	res.status(200).json({
		status: 200,
		message: "Success",
		username: username,
	});
};

const createUser = async (req, res) => {
	const { name, username, email, password } = req.body;

	if (!name || !username || !email || !password) {
		return res.status(400).json({
			message: "name, username , email and password fields are required",
		});
	}

	const userExit = await User.findOne({ username });
	if (userExit) {
		return res.status(400).json({ message: "Username is already taken" });
	}

	const hash = await bcrypt.hash(password, 10);
	const newUser = new User({ name, username, email, password: hash });
	try {
		const userData = await newUser.save();

		return res.status(200).json(userData);
	} catch (e) {
		return res.status(400).json({ message: e.message });
	}
};

const verifyUser = (req, res) => {
	const data = req.query;
	res.status(200).json(data);
};
module.exports = { loginUser, createUser, verifyUser };
