import axios from "axios";

const RECIPEURL =
  "https://www.food2fork.com/api/search?key=5d07a311a0f80b9d21312e7aad766dba&q=";

const newsURL = "https://newsapi.org/v2/everything?q=";
const newsAPI = "&apiKey=f14386004b984aab9c45f6dcf17b377f";

export default {
  //searching recipe API
  searchRecipes: function(query) {
    return axios.get(RECIPEURL + query);
  },
  //saving users to mongo
  saveUser: function(userData) {
    console.log(userData)
    return axios.post("/api/users", userData)
  },
  // Saves a book to the database
  saveSearch: function(searchData) {
    console.log(searchData)
    return axios.post("/api/search", searchData);
  },
  //searching newsAPI
  searchNews: function(query) {
    return axios.get(newsURL + query + newsAPI);
  },
  //getting saved searchs
  getSearch: function(savedSearch) {
    return axios.get("/api/search", savedSearch)
  }
};
