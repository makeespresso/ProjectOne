
const url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=d0190f801c9d4d15bcb290d963b59d39';

const newsDisplay = document.querySelector("#NewsDisplay")

const render = async () => {
  const resp = await axios(url)
  const { articles } = resp.data;
  for (let i = 0; i < articles.length; i++) {
    let { title, author, description, urlToImage } = articles[i]
    let article = document.createElement('div')
    newsDisplay.appendChild(article);
    article.innerHTML = `    
          <p class="theTitle">${title}</p>
          <p class="theAuthor">${author}<p>
          <p class="theDescription">${description}</p>
          `
  }
}
render();