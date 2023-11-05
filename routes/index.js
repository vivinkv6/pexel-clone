var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");
const extractQueryParams = require("../utils/extractQuery");
const apiFetch=require('../utils/apiFtech');
const {randomImages,randomVideos}=require('../utils/randomResources');







/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const response = await apiFetch("https://api.pexels.com/v1/popular?page=1&per_page=60");
     console.log(response);

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

// GET video section

router.get("/videos", function (req, res) {
  res.render("pages/videos", {
    title: "Free Stock Videos Royalty free videos shared by creators",
    video:randomVideos(),
  });
});



// search particular image

router.get("/search", async (req, res, next) => {
  try {
    const { search } = req.query;
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${search}&per_page=60`,
      {
        headers: {
          Authorization: `${process.env.API_KEY}`,
        },
      }
    );

    res.render("pages/search", {
      title: "Free Stock Photos Royalty free images shared by creators",
      img: randomImages(),
      result: response.data.photos,
      query: search,
    });
    console.log(response.data.photos);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// dynamic pages of photos

router.get("/:pages", async function (req, res, next) {
  try {
    const { pages } = req.params;
    const response = await apiFetch(`https://api.pexels.com/v1/popular?page=${pages}&per_page=60`);

    const { page } = extractQueryParams(response.data.next_page);
    console.log(page);
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
