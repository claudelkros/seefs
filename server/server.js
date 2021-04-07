const express = require("express");
const app = express();
require("dotenv").config();
//const bodyParser = require('body-parser');
const path = require("path");

const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");

app.use(express.static("./public"));
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//url for documentation example : https://itnext.io/setting-up-swagger-in-a-node-js-application-d3c4d7aa56d4

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: "UFD API",
			description: "UFD API Documentation",
			contact: {
				name: "MiraclesTools",
			},
			servers: [
				{
					url: "localhost:5000/api/users",
				},
			],
		},
		securityDefinitions: {
			token: {
				type: "apiKey",
				name: "Authorization",
				scheme: "bearer",
				in: "header",
				bearerFormat: jwt,
			},
		},
	},
	apis: ["routes/api/*.js", "models/User.js", "server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.get("/swagger.json", function (req, res) {
	res.setHeader("Content-Type", "application/json");
	res.send(swaggerDocs);
});

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const uri = process.env.MONGO_PROD;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

const userRouter = require("./routes/api/users");
const fileRouter = require("./routes/upload/files");
const studentRouter = require("./routes/api/students");
const adminRouter = require("./routes/admin/admin");
const facultiesRouter = require("./routes/faculty/faculty");

app.use("/api/users", userRouter);
app.use("/api/uploads", fileRouter);
app.use("/api/student", studentRouter);
app.use("/api/seec-admin/", adminRouter);
app.use("/api/faculties/", facultiesRouter);

// app.use(express.static(path.join(__dirname, './frontend/build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, './frontend/build', 'index.html'));
// });

app.listen(PORT, function () {
	console.log("Server is running on Port: " + PORT);
});
