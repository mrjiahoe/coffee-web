require("dotenv").config();

const productsData = require("./data/products");
const slidersData = require("./data/slider");
const connectDB = require("./config/db");
const Product = require("./models/Product");
// const Slider = require("./models/Slider");

connectDB();

const importData = async () => {
	try {
		await Product.deleteMany({});
		// await Slider.deleteMany({});

		await Product.insertMany(productsData);
		// await Slider.insertMany(slidersData);

		console.log("Data Import Success");

		process.exit();
	} catch (error) {
		console.error("Error with data import");
		process.exit(1);
	}
};

importData();
