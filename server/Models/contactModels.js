const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true },
		message: { type: String, required: true },
		// user: {
		// 	type: mongoose.Types.ObjectId,
		// 	ref: 'User',
		// 	required: true,
		// },
	},
	{ timestamps: true }
);
const contactModel = mongoose.model('contact', contactFormSchema);
module.exports = contactModel;
