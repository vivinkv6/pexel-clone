var express = require("express");
var router = express.Router();
require("dotenv").config();
const extractQueryParams = require("../utils/extractQuery");
const apiFetch=require('../utils/apiFtech');
const {randomImages}=require('../utils/randomResources');







/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const response = await apiFetch("https://api.pexels.com/v1/popular?page=1&per_page=15");

    const { page } = extractQueryParams(response.data.next_page);

    res.render("index", {
      title: "Free Stock Photos Royalty free images shared by creators",
      img: randomImages(),
      result: response.data.photos,
      pages: page,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// search particular image

router.get("/search", async (req, res, next) => {
  try {
    const { search } = req.query;
    const response = await apiFetch(`https://api.pexels.com/v1/search?query=${search}&per_page=60`);

    res.render("pages/search", {
      title: "Free Stock Photos Royalty free images shared by creators",
      img: randomImages(),
      result: response.data.photos,
      query: search,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});



// dynamic pages of photos

router.get("/:pages", async function (req, res, next) {
  try {
    const { pages } = req.params;
    const response = await apiFetch(`https://api.pexels.com/v1/popular?page=${pages}&per_page=15`);

    const { page } = extractQueryParams(response.data.next_page);
    res.render("pages/pages", {
      title: "Free Stock Photos Royalty free images shared by creators",
      img: randomImages(),
      result: response.data.photos,
      pages: page,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
