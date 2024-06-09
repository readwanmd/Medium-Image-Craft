const mediumService = require('../services/mediumService');
const nodeHtmlToImage = require('node-html-to-image');
const moment = require('moment');
const puppeteer = require('puppeteer');
const imageTemplate = require('../views/imageTemplate');

exports.generateImage = async (req, res) => {
	const { username } = req.params;
	const postIndex = parseInt(req.query.postIndex) || 0; // Get post index from query, default to 0

	try {
		const data = await mediumService.getMediumData(username);
		const { items } = data;

		if (postIndex >= items.length || postIndex < 0) {
			return res.status(404).json({ message: 'Post index out of range' });
		}

		const { title, author, pubDate, categories } = items[postIndex];
		const formattedDate = moment(pubDate).format('DD MMMM YYYY');
		const categoriesText = categories.map((cat) => `#${cat}`).join(' ');

		const image = await nodeHtmlToImage({
			puppeteerArgs: {
				executablePath: process.env.CHROMIUM_PATH || puppeteer.executablePath(),
				args: ['--no-sandbox', '--disable-setuid-sandbox'],
			},
			html: imageTemplate(title, author, formattedDate, categoriesText),
		});

		res.writeHead(200, { 'Content-Type': 'image/png' });
		res.end(image, 'binary');
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error');
	}
};
