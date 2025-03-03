function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response){
    return response.json()
  })
  .then(response => renderBooks(response))
}

function renderBooks(response) {
  const main = document.querySelector('main')
  response.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
