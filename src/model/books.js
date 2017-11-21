const URL = "http://localhost:8888";

const dummyBook = {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 1
}

class Books {
  static getAllBooks() {
    const relativePath = "/api/books";

    return fetch(URL + relativePath, {
      method: "get",
      model: "cors",
      credentials: 'same-origin'
    }).then((response) => {
      return response.json();
    }).catch(err => {
      console.error(`Error: ${err}`);
    });
  }

  static createNewBook(data) {
    const relativePath = "/api/books";
    const book = Object.assign({}, dummyBook, data);
    console.log(data);

    return fetch(`${URL}${relativePath}`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      model: "cors",
      body: JSON.stringify(book),
      credentials: 'same-origin'
    }).then((res) => {
      return res.json();
    }).catch(err => {
      console.error(`Error: ${err}`);
    });
  }

  static deleteBookById(id) {
    const relativePath = "/api/books";

    return fetch(`${URL}${relativePath}/${id}`, {
      method: "delete",
      model: "cors",
      credentials: 'include'
    }).then(res => {
      return res.json();
    }).catch(err => {
      console.error(`Error: ${err}`);
    });
  }
}

export default Books;
