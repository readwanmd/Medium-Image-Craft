<p align="center">
  <img width="120px" src="./assets/medium.png" />
  <h1 align="center">Medium Image Craft</h1>
  <p align="center">📖 Show your latest Medium article on your READMEs or anywhere dynamically!</p>
  <p align="center">Medium Image Craft is a Node.js and Express based application that transforms Medium articles into visually appealing images. Users can request an image representation of a Medium article by providing the Medium username and the article index.</p>
</p>

## ✨ Features

- Fetches articles from Medium using RSS feeds
- Converts article data into images using [node-html-to-image](https://github.com/frinyvonnick/node-html-to-image)
- Users can choose which article to convert to an image
- Handles errors gracefully if the requested article index is out of range

## 📚 Usage

Copy paste following markdown into your markdown content, and that's it.

Change the `?username=` value to the Medium's username and `&postIndex=` value to the desired article index.

```md
[![Md Readwan](http://localhost:5000/api/generate-image/readwanmd?postIndex=1)](https://medium.com/@readwanmd)
```

[![Md Readwan](http://localhost:5000/api/generate-image/readwanmd?postIndex=1)](https://medium.com/@readwanmd)

## 🔌 API endpoints

| Name           | Method | endpoint                       |
| -------------- | ------ | ------------------------------ |
| Home           | GET    | /                              |
| Generate Image | GET    | /api/generate-image/:username  |
| Article Origin | GET    | /api/article-origine/:username |

## ⚙️ Options

| Name      | Description          | Default value |
| --------- | -------------------- | ------------- |
| username  | Medium username      | REQUIRED      |
| postIndex | Index of the article | 0 (default)   |

## ⭐️ Show Your Support

If you find this project helpful, please give it a star! 🌟 It helps others discover it and motivates me to keep improving it. Thank you for your support!

## 🤝 Contributing

Feel free to submit issues and pull requests. We appreciate your help!
