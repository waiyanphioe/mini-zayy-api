const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
		email_verified: { type: Boolean, required: true, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
