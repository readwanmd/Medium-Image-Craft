const axios = require('axios');

exports.getMediumData = async (username) => {
	const response = await axios.get(
		`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
	);
	return response.data;
};
