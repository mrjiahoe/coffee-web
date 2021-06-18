const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	path: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
});

const Slider = mongoose.model("slider", sliderSchema);

module.exports = Slider;
