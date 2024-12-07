const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
app.style.paddingLeft = 0;
const loading = document.querySelector("#loading");
/*
const oG = (item) => {
  console.log(item);
  let element = document.createElement("div");
  let title = document.createElement("h4");
  let author = document.createElement("p");
  let published = document.createElement("p");
  let pages = document.createElement("p");

  element.style.display = "flex";
  element.style.flexDirection = "column";
  element.style.alignItems = "center";
  element.style.marginTop = "20px";

  title.textContent = item.name;
  author.textContent = `by ${item.authors[0]}`;
  published.textContent = item.released.substr(0, 4);
  pages.textContent = `${item.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(published);
  element.append(pages);

  app.append(element);
};
*/

//New function
const addBookToDOM = (item) => {
  $("#books").append(
    $("<div>")
      .css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      })
      .append($("<h4>").text(item.name))
      .append($("<p>").text(`by ${item.authors[0]}`))
      .append($("<p>").text(item.released.substr(0, 4)))
      .append($("<p>").text(`${item.numberOfPages} pages`))
  );
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      let li = document.createElement("li");
      li.textContent = `An error occured. Please try again.`;
      app.append(li);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
