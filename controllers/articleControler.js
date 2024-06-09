const mediumService = require('../services/mediumService');

exports.getArticleOrigin = async (req, res) => {
	const { username } = req.params;
	// Get post index from query or default - 0
	const postIndex = parseInt(req.query.postIndex) || 0;

	try {
		const data = await mediumService.getMediumData(username);
		const { items } = data;

		if (postIndex >= items.length || postIndex < 0) {
			return res.status(404).json({ message: 'Post index out of range' });
		}

		const { guid } = items[postIndex];

		res.status(200).send(guid);
	} catch (error) {
		console.error(error);
		res.status(500).send('Server error');
	}
};
