import axios from "axios";

export default {
  // Gets all products
  getProducts: function () {
    return axios.get("/api/products");
  },
  // Gets family products
  getFamilyProducts: function (fam) {
    if (fam === "All") {
      return axios.get("/api/products");
    } else {
      return axios.get("/api/products/family/" + fam);
    }
  },
  // Gets the product with the given id
  getProduct: function (id) {
    return axios.get("/api/products/" + id);
  },
  // Gets the product with the given id
  getCustomer: function (id) {
    return axios.get("/api/customers/" + id);
  },
  // Gets the product with the given id
  getCustomerByEmail: function (email, password) {
    return axios.get(`/api/customers/login?email=${email}&password=${password}`);
  }




  // Gets all books
  , getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};
