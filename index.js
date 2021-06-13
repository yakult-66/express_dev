const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res) =>
	res.json({
		messages: [
			{ id: 1, message: "message1" },
			{ id: 2, message: "message2" },
		],
	})
);

app.listen(8080, () => console.log("Listening on port 8080"));
