
var url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=d0190f801c9d4d15bcb290d963b59d39';
var req = new Request(url);
fetch(req)
  .then(function (response) {
    response.json()
      .then(data => {
        let { articles } = data
        for (let i = 0; i < articles.length; i++) {
          // console.log(articles[i])
          let { title } = articles[i]
          let { author } = articles[i]
          let { description } = articles[i]
          let { urlToImage } = articles[i]
          renderNote(title, author, description, urlToImage)
        }
      });
  })
  .catch(e => console.log(e))

function renderNote(title, author, description, image) {
  console.log(title, author, description, image)
}

/* EXAMPLESSSSSSS FOR THE FUTUTREEEEEE
//OBJECT SENT TO FUNCTIONS
let payload = {
title: articles[i].title,
author: articles[i].author
}
renderNote(payload)

//DATA SENT AS PARAMETERS
let title = articles[i].title
let author = articles[i].author
let description = articles[i].description
let image = articles[i].urlToImage
renderNote(title, author, description, image)
*/

//this is the get text button//
// document.getElementById('getText').addEventListener('click', getText);
// function getText() {
//   console.log(123);
// }
// document.getElementById('getPosts').addEventListener('click', getPosts);

// function getPosts() {
//   fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d0190f801c9d4d15bcb290d963b59d39')
//     .then((res) => res.json())
//     .then((data) => {
//       let ouput = '<h1>News Headlines</h1>';
//       data.forEach(function (post) {
//         output += `
//         <div>
//         <h3>${post.title}</h3>
//         <p>${post.description}</p>
//         </div>
//         `;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
// }



// promises yt video//

// let firstFunction = function () {
  //   return new Promise(
  //     function (resolve, reject) {
  //       resolve('access granted');
  //     }
  //   )
  // }

  // console.log(firstFunction());