
const url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=d0190f801c9d4d15bcb290d963b59d39';

const newsDisplay = document.querySelector("#NewsDisplay")
// newsDisplay = (title, author, description);

const render = async () => {
  //REQUEST INFO
  const resp = await axios(url)
  //RECEIVES DATA
  const { articles } = resp.data;
  //GET AN ARRAY AND CYCLE TROUGH IT
  for (let i = 0; i < articles.length; i++) {
    //RETRIVING THE DATA FROM THE ARRAY BY NUMBER
    let { title, author, description, urlToImage, url } = articles[i]
    //CREATING THE RENDER DIV FOR EACH ARTICLE WITH THE CLASS AS "CARD"
    let article = document.createElement('div')
    article.setAttribute("class", "card")
    //ANEXING THAT DIV TO THE DOM
    newsDisplay.appendChild(article);
    // DIV INNER HTML CODE & CREATED HTML ELEMENTS
    article.innerHTML = `
    <a href="${url}">
      <img class="image" src="${urlToImage}" alt="${title}"/>    
      <h2 class="theTitle">${title}</h2>
    </a>
      <small class="theAuthor">${author}</small>
      <p class="theDescription">${description}</p>
        `
  }
}
//DISPLAYS THE INFORMATION ON THE WEBSITE/CONSOLE
render();