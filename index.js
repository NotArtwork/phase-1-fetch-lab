const fetchBooks = async () => {
  // To pass the tests, don't forget to return your fetch!
  let request = await fetch('https://anapioficeandfire.com/api/books') // Request data from Server/API and returns a response object.
  let response = await request.json() // Returns data provided by server as an Object
  renderBooks(response)
  return fetch('https://anapioficeandfire.com/api/books')
  // const main = document.querySelector('main')
  //     response.forEach(book => { //
  //     let h2 = document.createElement('h2')
  //     h2.textContent = book.name;
  //     main.appendChild(h2);
  // })
}

// function fetchBooks() {
//   return fetch("https://anapioficeandfire.com/api/books")
//     .then(response => response.json())
//     .then(json => renderBooks(json))
// }

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
