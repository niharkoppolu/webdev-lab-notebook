const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const addBooktoDOM = (book) => {
  const book_info_box = document.createElement("section");
  book_info_box.style.marginTop = "20px";
  app.appendChild(book_info_box);

  const title = document.createElement("div");
  title.textContent = book.name;
  title.style.fontSize = "20px";
  title.style.fontWeight = "bold";

  book_info_box.appendChild(title);

  const author = document.createElement("div");
  author.textContent = book.authors[0];
  author.style.marginTop = "7px";
  book_info_box.appendChild(author);

  const release_date = document.createElement("div");
  const year = book.released.substring(0, 4);
  release_date.textContent = year;
  release_date.style.marginTop = "7px";
  book_info_box.appendChild(release_date);

  const number_of_pages = document.createElement("div");
  number_of_pages.textContent = book.numberOfPages;
  number_of_pages.style.marginTop = "7px";
  book_info_box.appendChild(number_of_pages);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log("Data", data);

      data.forEach((book) => {
        console.log(
          book.name,
          book.authors[0],
          book.released,
          book.numberOfPages
        );

        addBooktoDOM(book);
      });
    })
    .catch((error) => {
      console.error(error);
      const error_message = document.createElement("div");
      error_message.textContent = "Error Occurred";
    })
    .finally(() => {
      const img = document.querySelector("#loading");
      app.removeChild(img);
    });

  /*
//This code block and the one above are basically the same. The return statement is not necessary, but can be used
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log("Data", data))
    .catch((error) => console.error(error));
*/
};

console.log("starting here\n\n");
fetchData(url);
console.log("\n\nprint last");
