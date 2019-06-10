
const url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=d0190f801c9d4d15bcb290d963b59d39';
const req = new Request(url);

const render = () => {

  fetch(req)
    .then(function (response) {
      response.json()
        .then(data => {
          let { articles } = data
          for (let i = 0; i < articles.length; i++) {
            let { title } = articles[i]
            let { author } = articles[i]
            let { description } = articles[i]
            let { urlToImage } = articles[i]
            let article = document.createElement("div")
            document.body.appendChild(article);
            article.innerHTML = `
          <h1>${title}</h1>
          <p>${description}</p>
          <p>${author}</p>
          `

            // console.log(articles[i])

            // renderNote(title, author, description, urlToImage)
          }
        });
    })
    .catch(e => console.log(e))
}

render();

// ONE OF THE FUNCTIONS //

// function renderNote(title, author, description, image) {
//   console.log(title, author, description, image)

  /// SAFE CODE API ///
//   var url = 'https://newsapi.org/v2/top-headlines?' +
//   'country=us&' +
//   'apiKey=d0190f801c9d4d15bcb290d963b59d39';
// var req = new Request(url);
// fetch(req)
//   .then(function (response) {
//     response.json()
//       .then(data => {
//         let { articles } = data
//         for (let i = 0; i < articles.length; i++) {
//           // console.log(articles[i])
//           let { title } = articles[i]
//           let { author } = articles[i]
//           let { description } = articles[i]
//           let { urlToImage } = articles[i]
//           renderNote(title, author, description, urlToImage)
//         }
//       });
//   })
//   .catch(e => console.log(e))

// function renderNote(title, author, description, image) {
//   console.log(title, author, description, image)
// }