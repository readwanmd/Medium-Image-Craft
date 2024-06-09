const express = require('express');
const imageRoutes = require('./routes/imageRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', imageRoutes);
app.get('/', (_, res) => {
	res.status(200).send('Medium Image Craft is working');
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
	console.log(`http://localhost:${port}`);
});
