const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');

// database
const { connectDb } = require('./Db/db');

//  routers
const authRouter = require('./Routes/authRoutes');
const aboutRoutes = require('./Routes/aboutRoutes');
const contactRouter = require('./Routes/contactRoutes');
const experienceRouter = require('./Routes/experienceRoutes');
const projectRouter = require('./Routes/projectRoutes');
const skillRoutes = require('./Routes/skillRoutes');
const uploadRoutes = require('./Routes/uploadRoutes');

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: '*',
	})
);

app.use('/auth', authRouter);
app.use('/about', aboutRoutes);
app.use('/contact', contactRouter);
app.use('/experience', experienceRouter);
app.use('/project', projectRouter);
app.use('/skill', skillRoutes);
app.use('/upload', uploadRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }
// app.listen(port, () => {
// 	console.log(`Server is running at port: ${port} `);
// });

const start = async () => {
	try {
		await connectDb();
		app.listen(PORT, (err) => {
			if (err) throw err;
		});
	} catch (err) {
		console.log(err);
	}
};

start();
