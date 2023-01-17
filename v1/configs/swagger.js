
const swaggerJsDoc = require('swagger-jsdoc');

// Swagger Setup
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Check Region API",
			version: "1.0.0",
			description: "Check Region API",
		},
		servers: [
			{
				url: `http://${process.env.IP}:${process.env.PORT}/v1`,
			},
		],
	},
	apis: ["./routes/v1/*.js"],
};

module.exports = swaggerJsDoc(options);
