
const base_url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=d0190f801c9d4d15bcb290d963b59d39';

const brokenCat = 'img/brokencat_img.jpg';
const oh_snap = 'img/ohsnap.jpg'

const newsDisplay = document.querySelector("#NewsDisplay")
// newsDisplay = (title, author, description);

const render = async (url) => {
  newsDisplay.innerHTML = '';
  //REQUEST INFO
  const resp = await axios(url)
  //RECEIVES DATA
  const { articles } = resp.data;
  //GET AN ARRAY AND CYCLE TROUGH IT
  if (articles.length) {

    for (let i = 0; i < articles.length; i++) {
      //RETRIVING THE DATA FROM THE ARRAY BY NUMBER
      let { title, author, description, urlToImage, url } = articles[i]
      // VALIDATION - CONDITIONAL STATEMENT 
      //CREATING THE RENDER DIV FOR EACH ARTICLE WITH THE CLASS AS "CARD"
      let article = document.createElement('div')
      article.setAttribute("class", "card")
      //ANEXING THAT DIV TO THE DOM
      newsDisplay.appendChild(article);
      // DIV INNER HTML CODE & CREATED HTML ELEMENTS
      article.innerHTML = `
      <a href="${url}">
        <img class="image" src="${urlToImage ? urlToImage : brokenCat}" alt="${title}"/>    
        <h2 class="theTitle">${title}</h2>
      </a>
        <small class="theAuthor">${author ? author : 'Anonymous'}</small>
        <p class="theDescription">${description ? description : ''}</p>
          `
    }
  } else {
    let brokenImg = document.createElement('img');
    brokenImg.src = oh_snap;
    brokenImg.className = 'spaceCat';
    newsDisplay.appendChild(brokenImg);
  }
}
render(base_url);
const search = async (search) => {
  //REQUEST INFO
  const resp = await axios(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=d0190f801c9d4d15bcb290d963b59d39`)
  //RECEIVES DATA
  const { articles } = resp.data;
  //GET AN ARRAY AND CYCLE TROUGH IT
  for (let i = 0; i < articles.length; i++) {

    //RETRIVING THE DATA FROM THE ARRAY BY NUMBER
    let { title, author, description, urlToImage, url } = articles[i]
    // VALIDATION - CONDITIONAL STATEMENT 
    if (author == null) {
      author = 'Anonymous';
    }
    console.log(articles[i]);
  }
}
document.getElementById("searchBar").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector('input');
  const search = input.value;
  const searchUrl = `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=d0190f801c9d4d15bcb290d963b59d39`;
  render(searchUrl)
});
