const express=require('express');
require("dotenv").config();
const extractQueryParams = require("../utils/extractQuery");
const apiFetch=require('../utils/apiFtech');
const {randomVideos}=require('../utils/randomResources');
const router=express.Router();






// GET video section

router.get("videos/", async function (req, res) {

  const response=await apiFetch('https://api.pexels.com/videos/popular?per_page=12');
 const {page}=extractQueryParams(response.data.next_page);
 console.log(page);
  console.log(response.data);
  res.render("pages/videos", {
    title: "Free Stock Videos Royalty free videos shared by creators",
    video:randomVideos(),
    result:response.data.videos,
    pages:page
  });
});

// search particular video

router.get("/search", async (req, res, next) => {
  try {
    const { search } = req.query;
    const response = await apiFetch(`https://api.pexels.com/videos/search?query=${search}&per_page=12`);
    console.log(search);
    res.render("pages/searchVideos", {
      title: "Free Stock Photos Royalty free images shared by creators",
      video: randomVideos(),
      result: response.data.videos,
      query: search,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/:pages", async function (req, res, next) {
  try {
    const { pages } = req.params;
    const response = await apiFetch(`https://api.pexels.com/videos/popular?page=${pages}&per_page=12`);

    const { page } = extractQueryParams(response.data.next_page);
    res.render("pages/videoPage", {
      title: "Free Stock Photos Royalty free images shared by creators",
      video: randomVideos(),
      result: response.data.videos,
      pages: page,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports=router