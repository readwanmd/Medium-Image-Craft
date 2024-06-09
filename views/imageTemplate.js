module.exports = (title, author, formattedDate, categoriesText) => `
<html>
  <style>
    body {
      width: fit-content;
      height: fit-content;
    }

    * {
      margin: 0;
      padding: 0;
    }

    .card {
      font-family: sans-serif;
      width: 600px;
      padding: 15px;
      background-color: #333;
      color: #fff;
    }

    .card h1 {
      font-size: 24px;
      line-height: 1.2;
    }

    .line {
      margin: 10px 0;
      height: 4px;
      width: 140px;
      background-color: #939393;
      border-radius: 2px;
    }

    .published {
      font-size: 14px;
    }

    .tags {
      font-style: italic;
      color: #ffa500;
      padding-bottom: 15px;
    }

    .divider {
      margin: 10px 0;
      height: 1px;
      width: 100%;
      background-color: #939393;
      border-radius: 2px;
    }

    .published {
      display: flex;
      justify-content: space-between;
    }

    .author {
      font-weight: bold;
    }
  </style>

  <body>
    <div class="card">
      <h1>${title}</h1>
      <div class="line"></div>
      <p class="tags">${categoriesText}</p>
      <div class="divider"></div>
      <div class="published">
        <p class="author">by ${author}</p>
        <p class="date">${formattedDate}</p>
      </div>
    </div>
  </body>
</html>
`;
